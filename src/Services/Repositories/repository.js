import axios from "axios";
import store from "../store";

// You can use your own logic to set your local or production domain
const baseDomain = window.configExim.hostApi.url;
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

let axiosExport = axios.create({
  baseURL,
});

axiosExport.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("_token_");
    const refId = sessionStorage.getItem("caId") || "";
    const clientId = sessionStorage.getItem("clientId") || "";
    const passCheckClientId = sessionStorage.getItem("passCheckClientId") || "";

    config.headers.PASSCHECKCLIENTID = passCheckClientId;
    if (token) {
      config.headers.Authorization = "Bearer " + token;
      config.headers.LOS_CLIENT_ID = clientId;
      config.headers._RefId_ = refId;
    }

    store.set("Loading/Loading!");
    return config;
  },
  (error) => {
    store.set("Loading/Unloading!");
    return Promise.reject(error);
  }
);

axiosExport.interceptors.response.use(
  (response) => {
    if (response) {
      let data = response.data;
      if (data) {
        if (data.isResultDb == true) {
          data.warning = data.warning || [];
          if (data.warning.length > 0) {
            for (let m = 0; m < data.warning.length; m++) {
              let msg = data.warning[m];
              store.set("Loading/addMessage", {
                message: msg,
                status: 400,
              });
            }
          } else {
            store.set("Loading/addMessage", {
              message: "",
              status: 200,
            });
          }
        }
      }
    }
    store.set("Loading/Unloading!");
    return response;
  },
  (error) => {
    var response = error.response;
    if (response) {
      //400
      let errorData = response.data;
      if (errorData) {
        let messages = errorData.messages || [];
        if (!(messages instanceof Array) && messages instanceof Object) {
          messages = [messages];
        }
        let has500 = messages.filter((p) => p.status == 500).length;
        if (messages.length > 0) {
          store.set("Loading/addMessage", {
            message: messages
              .map((f) => {
                return f.message;
              })
              .join(","),
            status: has500 > 0 ? 500 : 400,
          });
        }
      }
    } else {
      if (error.message) {
        store.set("Loading/addMessage", {
          message: error.message,
          status: 500,
        });
      }
    }

    store.set("Loading/Unloading!");
    return response;
  }
);

export default axiosExport;

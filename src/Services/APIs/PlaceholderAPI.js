import axiosInstance from "../AxiosInstance.js";

axiosInstance
  .get("/getAllProducts")
  .then((response) => {
    console.log("response: ", response);
  })
  .catch((error) => {
    console.error(error);
    Promise.reject(error);
  });

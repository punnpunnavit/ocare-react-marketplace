//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks

const APICall = {
  getMainInfo: async () => {
    return axiosInstance
      .get("/users")
      .then((response) => {
        console.log("inhere");
        return JSON.stringify(response.data.map((b) => b.name));
      })
      .catch((error) => {
        console.error(error);
        Promise.reject(error);
      });
  },
};

export default APICall;

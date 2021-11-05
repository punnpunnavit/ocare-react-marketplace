//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks

const AuthAPI = {
  login: async (email, password) => {
    return axiosInstance
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
        Promise.reject(error);
      });
  },
  signUp: async (email, password) => {
    return axiosInstance
      .post("/auth/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
        Promise.reject(error);
      });
  },
  forgetPassword: async (email) => {
    return axiosInstance
      .post("/auth/forget", {
        email: email,
      })
      .then((response) => {
        console.log("inhere");
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        console.error(error);
        Promise.reject(error);
      });
  },
};

export default AuthAPI;

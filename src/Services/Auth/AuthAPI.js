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
        console.log(response.status + "yay");
        console.log(response.statusText);
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
        console.log(response.status);
        console.log(response.statusText);
      })
      .catch((error) => {
        console.error(error);
        Promise.reject(error);
      });
  },
  forgetPassword: async (email) => {
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

export default AuthAPI;

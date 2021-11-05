import axiosInstance from "../AxiosInstance.js";
import grayImage from "../../Assets/Images/gray.png";

const UpdateProfileAPI = {
  updateProfile: async (displayName, firstName, lastName, tel, image) => {
    var FormData = require("form-data");
    var data = new FormData();
    data.append("displayName", displayName);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("tel", tel);
    if (image != undefined) {
      data.append("image", image[0]);
    } else {
      data.append("image", grayImage);
    }
    console.log(image);
    return axiosInstance
      .post("/profile/edit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
        Promise.reject(error);
      });
  },
  getCurrentProfile: async () => {
    console.log(window.localStorage.getItem("accessToken"));
    return axiosInstance
      .get("/profile/get/", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        Promise.reject(error);
      });
  },
};

export default UpdateProfileAPI;

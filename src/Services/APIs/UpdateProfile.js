import axiosInstance from "../AxiosInstance.js";

const UpdateProfileAPI = {
  updateProfile: async (displayName, firstName, lastName, tel, image) => {
    var FormData = require("form-data");
    var data = new FormData();
    data.append("displayName", displayName);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("tel", tel);
    data.append("image", image);
    return axiosInstance
      .post("/profile/edit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.YzQ5YzgyZTgwYTA0ZjJhYWI5OWNhMmJjMjhhYzRlZjU1MDFjMzY4MGI0YzdmOWMxMDE4OTE2ZWM4ZjE0NmU5Yg.pDuwuMKI7tqt6ftVkrzZZYZIuoB7lwDyIQykYz5UTYQ",
        },
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
        Promise.reject(error);
      });
  },
};

export default UpdateProfileAPI;
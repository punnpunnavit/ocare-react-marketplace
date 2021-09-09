import axiosInstance from "../AxiosInstance.js";

const AddProductsAPI = {
  addProduct: async (
    productName,
    uploadImages,
    description,
    price,
    category
  ) => {
    var FormData = require("form-data");
    var data = new FormData();
    data.append("productName", productName);
    data.append("uploadImages", uploadImages);
    // data.append("uploadImages", uploadImages[1]);
    // data.append("uploadImages", uploadImages[2]);
    data.append("description", "รis it gonna work?");
    data.append("price", Date().toLocaleString());
    data.append("category", "test");
    console.log(Date().toLocaleString());
    return axiosInstance
      .post("/product/add", data, {
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

export default AddProductsAPI;

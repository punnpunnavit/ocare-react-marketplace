import axiosInstance from "../AxiosInstance.js";

const AddProductsAPI = {
  addProduct: async (
    productName,
    uploadImages,
    description,
    price,
    category
  ) => {
    var bodyFormData = new FormData();
    console.log(uploadImages);
    bodyFormData.append("productName", productName);
    for (let i = 0; i < uploadImages.length; i++) {
      bodyFormData.append(i, uploadImages[i]);
    }
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);
    bodyFormData.append("category", category);
    for (var pair of bodyFormData.entries()) {
      console.log(pair[0] + ":" + pair[1]);
    }
    return axiosInstance
      .post("/product/add", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.YzQ5YzgyZTgwYTA0ZjJhYWI5OWNhMmJjMjhhYzRlZjU1MDFjMzY4MGI0YzdmOWMxMDE4OTE2ZWM4ZjE0NmU5Yg.pDuwuMKI7tqt6ftVkrzZZYZIuoB7lwDyIQykYz5UTYQ",
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

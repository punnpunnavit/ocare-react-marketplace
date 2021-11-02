import axiosInstance from "../AxiosInstance.js";

const AddProductsAPI = {
  addProduct: async (
    productName,
    uploadImages,
    description,
    price,
    category
  ) => {
    var data2 = new FormData();
    console.log(productName + "product name");
    console.log(uploadImages + "uploadImages");
    console.log(description + "description");
    console.log(price + "price");
    console.log(category + "category");
    data2.append("productName", productName);
    // data2.append("uploadImages", uploadImages);
    for (let i = 0 ; i < uploadImages.length ; i++) {
      data2.append("uploadImages", uploadImages[i]);
  }
    data2.append("description", description);
    data2.append("price", price);
    data2.append("category", category);
    return axiosInstance
      .post("/product/add", data2, {
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

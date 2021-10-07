//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks

const ProductDetailAPI = {
  fetchDetails: async (
    id
  ) => {
    return axiosInstance
      .get(`/product`, {
       params:{
         productId:id
       }
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
      
        Promise.reject(error);
      });
  },
};

export default ProductDetailAPI;

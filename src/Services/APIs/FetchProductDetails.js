//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks

const ProductDetailAPI = {
  fetchDetails: async (
    id
  ) => {
    return axiosInstance
      .get(`/product/:id?id=${id}`, {
       
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
      
        Promise.reject(error);
      });
  },
};

export default ProductDetailAPI;

// axios({
//     method: 'GET',
//     url: 'http://openlibrary.org/search.json',
//     params: { q: query, page: pageNumber },
//     cancelToken: new axios.CancelToken(c => cancel = c)
//   })

import { useEffect, useState } from "react";
import FetchProductDetails from "../Services/APIs/FetchProductDetails";
import { useCancelToken } from "./useCancelToken";

export default function useProductDetailsFetch(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProductDetails.fetchDetails(id)
      .then((res) => {
       
        setLoading(true);
        setError(false);
        setProducts(() => {
          return {
            productName: res.data.productName,
            productDes: res.data.description,
            productMainImage: res.data.mainImage,
            productImg: res.data.images,
            productPrice: res.data.price,
            productCategory: res.data.category,
          };
        });
        console.log(products.productImg[0])
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  },[id]);

  return {
    loading,
    error,
    products,
  };
}

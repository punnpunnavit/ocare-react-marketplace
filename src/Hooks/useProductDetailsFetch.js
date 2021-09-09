import { useEffect, useState } from "react";
import FetchProductDetails from "../Services/APIs/FetchProductDetails";
import { useCancelToken } from "./useCancelToken";

export default function useProductDetailsFetch(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsName, setProductsName] = useState([]);
  const [productsMainImg, setProductsMainImg] = useState([]);
  const [productsImg, setProductsImg] = useState([]);
  const [productsDes, setProductsDes] = useState([]);
  const [productsPrice, setProductsPrice] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  FetchProductDetails.fetchDetails(id)
    .then((res) => {
        setProductsName(res.data.productName);
        setProductsMainImg(res.data.mainImage);
        setProductsImg(res.data.images)
        setProductsDes(res.data.description)
        setProductsPrice(res.data.price)
        setProductsCategory(res.data.category)
      }  )
    .catch((e) => {
      console.log(e);
      setError(true);
    });

  return {
    loading,
    error,
    productsName,
    productsMainImg,
    productsImg,
    productsDes,
    productsPrice,
    productsCategory,
  };
}

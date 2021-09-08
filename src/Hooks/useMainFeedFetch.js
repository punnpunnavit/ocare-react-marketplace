import { useEffect, useState } from "react";
import MainFeedAPI from "../Services/APIs/FetchMainFeed";
import { useCancelToken } from "./useCancelToken";

export default function useMainFeedFetch(category, index) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsDes, setProductsDes] = useState([]);
  const [productsImg, setProductsImg] = useState([]);
  const [productsUsername, setProductsUsername] = useState([]);
  const [productsUserImg, setProductsUserImg] = useState([]);
  const [productsId, setProductsId] = useState([]);
  const [lastDocTimeStamp, setLastDocTimestamp] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const { createNewToken, isCancel } = useCancelToken();

  useEffect(() => {
    setProducts([]);
    setProductsDes([]);
    setProductsImg([]);
    setProductsUsername([]);
    setProductsUserImg([]);
    setProductsId([]);
    setLastDocTimestamp(0);
  }, [category]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    console.log(index);

    MainFeedAPI.fetchMainFeed(category, index, createNewToken, isCancel)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.productName)];
          });
          setProductsDes((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.description)];
          });
          console.log(productsDes);
          setProductsImg((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.mainImage)];
          });
          setProductsUsername((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.username)];
          });
          setProductsUserImg((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.imageUser)];
          });
          setProductsId((prevProducts) => {
            return [...prevProducts, ...res.data.map((b) => b.productId)];
          });


          setHasMore(res.data.length > 0);
          setLoading(false);
          setLastDocTimestamp(res.data[res.data.length - 1].time);
        } else {
          setHasMore(false);
          setLoading(false);
        }

        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, [index, category]);

  return {
    loading,
    error,
    products,
    productsDes,
    productsImg,
    productsUsername,
    productsUserImg,
    productsId,
    hasMore,

  };
}

import { useEffect, useState } from "react";
import MainFeedAPI from "../Services/APIs/FetchMainFeed";
import { useCancelToken } from "./useCancelToken";

export default function useMainFeedFetch(category, index) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [lastDocTimeStamp, setLastDocTimestamp] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const { createNewToken, isCancel } = useCancelToken();

  useEffect(() => {
    setProducts([]);
    setLastDocTimestamp(0);
  }, [category]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    console.log(index + "hereeee is the indexxx");

    MainFeedAPI.fetchMainFeed(category, index, createNewToken, isCancel)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts((prevProducts) => {
            return [
              ...prevProducts,
              ...res.data.map((_product) => {
                return {
                  id: _product.productId,
                  name: _product.productName,
                  description: _product.description,
                  image: _product.mainImage,
                  username: _product.username,
                  userImage: _product.imageUser,
                };
              }),
            ];
          });
          setHasMore(res.data.length > 0);
          setLoading(false);
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
  }, [category, index]);

  return {
    loading,
    error,
    products,
    hasMore,
  };
}

import { useEffect, useState } from "react";
import MainFeedAPI from "../Services/APIs/FetchMainFeed";
import { useCancelToken } from './useCancelToken';


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


    MainFeedAPI.fetchMainFeed(category, index,createNewToken,isCancel)
      .then((res) => {
        setProducts((prevProducts) => {
          return [
            ...[
              ...prevProducts,
              ...res.data.map((b) => b.productName),
            ],
          ];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
        setLastDocTimestamp(res.data[res.data.length - 1].time);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, [index, category]);

  return { loading, error, products, hasMore };
}

import { useState } from "react";
import AddProductsAPI from "../Services/APIs/AddProducts";

export default function useProductDetailsFetch(
  productName,
  uploadImages,
  description,
  price,
  category
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  AddProductsAPI.addProduct(
    productName,
    uploadImages,
    description,
    price,
    category
  )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      setError(true);
    });

  return {
    loading,
    error,
  };
}

import { useState, useEffect } from "react";

//API
import APICall from "../Services/APIs/GetMainInfo";

export const useMainInfoFetch = () => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMainInfo = async () => {
    try {
      setError(false);
      setLoading(true);
      console.log("trying hereee");
      const mainInfo = await APICall.getMainInfo();
      console.log(mainInfo);
      setState(mainInfo);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //initial and search
  useEffect(() => {
    setState("");
    fetchMainInfo();
  }, []);

  return { state, loading, error };
};

import { useState, useEffect } from "react";
import objectToArray from "../utils/objectToArray";
import { useDispatch } from "react-redux";

const API_URL = "https://api.coinlore.net/api/";

export function useFetchList(endPoint: string, callback: any) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = API_URL + endPoint;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(callback(objectToArray(json))))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error };
}

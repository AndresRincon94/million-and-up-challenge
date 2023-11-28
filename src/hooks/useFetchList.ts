import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import objectToArray from '../utils/objectToArray';

import { IUseFetchList } from './IUseFetch';
import { API_URL } from '../constants/constants';

function useFetchList({ endPoint, callbackPayload }: IUseFetchList) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = API_URL + endPoint;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(callbackPayload(objectToArray(json))))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error };
}

export default useFetchList;

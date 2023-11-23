import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import objectToArray from '../utils/objectToArray';
import { API_URL } from '../constants/constants';

import { IUseFetchPagination } from './IUseFetch';

/**
 * Hook to fetch data paginated
 *
 * @param IUseFetch - UseFetchPagination props
 * @param IUseFetch.callbackPayload - Callback the payload action
 * @param IUseFetch.startPage - Start record of api url complement
 * @param IUseFetch.endPoint - Api url complement 
 * @param IUseFetch.pageLimit - Page limit of api url complement
 */
function useFetchPagination({
  callbackPayload,
  startRecord,
  endPoint,
  pageLimit
}: IUseFetchPagination) {
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
  }, [startRecord, pageLimit]);

  return { loading, error };
}

export default useFetchPagination;

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logger from 'loglevel';

import objectToArray from '../utils/objectToArray';
import { API_URL } from '../constants/constants';

import { IUseFetchPagination } from './IUseFetch';

/**
 * Hook to fetch data paginated
 *
 * @param IUseFetchPagination - UseFetchPagination props
 * @param IUseFetchPagination.endPoint - Api url complement 
 * @param IUseFetchPagination.callbackPayload - Callback the payload action
 * @param IUseFetchPagination.startPage - Start record of api url complement
 * @param IUseFetchPagination.pageLimit - Page limit of api url complement
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
      .catch((error) => {
        logger.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [startRecord, pageLimit]);

  return { loading, error };
}

export default useFetchPagination;

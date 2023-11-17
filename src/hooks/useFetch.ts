import { useState, useEffect } from 'react';

const API_URL = 'https://api.coinlore.net/api/'

export function useFetch(endPoint: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = API_URL + endPoint;

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}

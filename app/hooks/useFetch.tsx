import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};

export default useFetch;

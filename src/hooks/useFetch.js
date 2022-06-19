import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const path = 'https://bookingssss.herokuapp.com/api' + url;

  const baseUrl = "https://booking-app-api-b.herokuapp.com/api"
  const url = baseUrl + path;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(path);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [path]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(path);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;

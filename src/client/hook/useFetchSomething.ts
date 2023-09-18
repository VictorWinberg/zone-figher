import { useCallback, useEffect, useState } from "react";

import axios from "axios";

export interface Response {
  status: string;
}

const useFetchSomething = (props: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(props);

      setData(response.data.results);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
};

export default useFetchSomething;

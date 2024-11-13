import { useState, useEffect } from "react";

const useFetchSearch = (keyword, page) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_SEARCH_URL}${keyword}`,
          {
            signal: controller.signal,
          }
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [keyword, page]);

  return { data, error };
};

export default useFetchSearch;

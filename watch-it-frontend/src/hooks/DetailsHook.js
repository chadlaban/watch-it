import { useState, useEffect } from "react";

const useFetchById = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_DETAILS_URL}${id}`,
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
  }, [id]);

  return { data, error };
};

export default useFetchById;

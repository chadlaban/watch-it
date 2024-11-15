import { useState, useEffect } from "react";

const useFetchById = (id, type) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            type === "movie"
              ? process.env.REACT_APP_API_MOV_DETAILS_URL
              : type === "series"
              ? process.env.REACT_APP_API_SER_DETAILS_URL
              : type === "person"
              ? process.env.REACT_APP_API_PRSN_DETAILS_URL
              : process.env.REACT_APP_API_TV_DETAILS_URL
          }${id}`,
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
  }, [id, type]);

  return { data, error };
};

export default useFetchById;

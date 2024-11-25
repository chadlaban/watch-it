import React, { useState, useEffect } from "react";
import { DetailCard } from "../card/DetailCard";
import { useFetch } from "../../hooks/FetchHook";

export const SeeMore = (prop) => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);

  const dataTest = useFetch(
    `${process.env.REACT_APP_API_URL}${prop.type}?${page}`
  );

  useEffect(() => {
    if (dataTest[0]?.results) {
      setFilms((prevFilms) => [...prevFilms, ...dataTest[0].results]); // append new results
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTest[0]]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prevPage) => prevPage + 1); // increment page number when reaching bottom of screen
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <DetailCard data={films} type={prop.type} />
      {dataTest[0] && (
        <div className="animate-pulse px-4 py-8" role="status">
          <article className="w-full">
            <p className="h-2.5 my-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[100%] mb-1">
              {""}
            </p>
          </article>
        </div>
      )}
    </>
  );
};

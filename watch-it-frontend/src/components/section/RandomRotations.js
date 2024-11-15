import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/FetchHook";
import { SectionImageSkeleton } from "../LoadingState/SectionImageSkeleton";

export const RandomRotations = () => {
  const [films] = useFetch(`${process.env.REACT_APP_API_URL}trending`);
  const [currImg, setcurrImg] = useState(0);
  const [fade, setFade] = useState(false); // fade effect

  useEffect(() => {
    if (films.results && films.results.length > 0) {
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setcurrImg((prevIndex) => (prevIndex + 1) % films.results.length);
          setFade(false);
        }, 700); // fade out
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [films]);

  if (!films.results || films.results.length === 0) {
    return <SectionImageSkeleton />;
  }

  const currImgActive = films.results[currImg];

  return (
    <div className="relative z-0 w-full h-[70vw] sm:h-[60vw] md:h-[50vw] lg:h-[40vw] xl:h-[35vw]">
      <img
        src={
          currImgActive.backdrop_path &&
          `${process.env.REACT_APP_API_IMGOG_URL}${currImgActive.backdrop_path}`
        }
        alt={currImgActive.original_title || currImgActive.original_name}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
        <span
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold p-4 transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {currImgActive.original_title || currImgActive.original_name}
        </span>
      </div>
    </div>
  );
};

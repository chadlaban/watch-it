import React from "react";
import { useRef } from "react";
import { truncateText } from "../../utils/StringUtils";
import { Link } from "react-router-dom";

export const RelatedList = (list) => {
  console.log(list.type);
  const listContainerRef = useRef(null);

  // Tracking
  const isDragging = useRef(false);
  const active = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    active.current = e.pageX - listContainerRef.current.offsetLeft;
    scrollLeft.current = listContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const move = e.pageX - listContainerRef.current.offsetLeft;
    const drag = (move - active.current) * 2; // scrolling speed
    listContainerRef.current.scrollLeft = scrollLeft.current - drag;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {list.type} Movies
      </h1>
      <div
        ref={listContainerRef}
        className="flex overflow-x-auto overflow-y-hidden space-x-4 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {list.data?.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md w-64 h-90 flex-shrink-0"
          >
            <Link to={`/info/${movie.id}`}>
              {/* Image Container */}
              <div className="h-40 w-full rounded-t-lg overflow-hidden">
                <img
                  src={`${process.env.REACT_APP_API_IMG_URL}${movie.backdrop_path}`}
                  alt="poster_image"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Movie Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-700 text-sm">
                  {truncateText(movie.overview, 80)}{" "}
                  {/* Adjust character limit as needed */}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useRef } from "react";
import { truncateText } from "../../utils/StringUtils";
import { Link } from "react-router-dom";
import NoPostImage from "../../assets/imgs/placeholder/no-poster.jpg";

export const RelatedList = (list) => {
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
        {list.film === "movie" ? list.type + " Movies" : list.type + " Series"}
      </h1>
      <div
        ref={listContainerRef}
        className="flex overflow-x-auto overflow-y-hidden space-x-4 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {list.data?.map((film) => (
          <div
            key={film.id}
            className="bg-white rounded-lg shadow-md w-64 h-90 flex-shrink-0"
          >
            <Link to={`/${list.film}/${film.id}`}>
              {/* Image Container */}
              <div className="h-40 w-full rounded-t-lg overflow-hidden">
                <img
                  src={
                    film.backdrop_path
                      ? `${process.env.REACT_APP_API_IMG_URL}${film.backdrop_path}`
                      : NoPostImage
                  }
                  alt={`${film.title}-poster` || "no-poster-image"}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Movie Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {list.film === "movie" ? film.title : film.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Release Date:{" "}
                {list.film === "movie"
                  ? film.release_date
                  : film.first_air_date}
              </p>
              <p className="text-gray-700 text-sm">
                {truncateText(
                  film.overview || "No overview added to this film yet.",
                  80
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

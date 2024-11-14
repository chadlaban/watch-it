import React from "react";
import { useRef } from "react";
import { truncateText } from "../../utils/StringUtils";
import { Link } from "react-router-dom";
import NoPostImage from "../../assets/imgs/placeholder/no-poster.jpg";

const TaggedMovieList = ({ data }) => {
  const images =
    data.images.results.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) => t.media.original_title === value.media.original_title // remove duplicates based on title
        )
    ) || [];

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
      <div
        ref={listContainerRef}
        className="flex overflow-x-auto overflow-y-hidden space-x-4 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {images.map((film) => (
          <div
            key={film.id}
            className="bg-white rounded-lg shadow-md w-64 h-90 flex-shrink-0"
          >
            <Link to={`/${film.media_type}/${film.media.id}`}>
              {/* Image Container */}
              <div className="h-40 w-full rounded-t-lg overflow-hidden">
                <img
                  src={
                    film.media.backdrop_path
                      ? `${process.env.REACT_APP_API_IMG_URL}${film.media.backdrop_path}`
                      : NoPostImage
                  }
                  alt={
                    `${film.media.original_title}-poster` || "no-poster-image"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Movie Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {film.media.original_title}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  Release Date:{" "}
                  {film.media.media_type === "movie"
                    ? film.media.release_date
                    : film.media.first_air_date}
                </p>
                <p className="text-gray-700 text-sm">
                  {truncateText(
                    film.media.overview ||
                      "No overview added to this film yet.",
                    80
                  )}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaggedMovieList;

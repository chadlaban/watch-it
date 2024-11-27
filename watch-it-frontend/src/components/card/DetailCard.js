import React from "react";
import { Link } from "react-router-dom";
import NoPostImage from "../../assets/imgs/placeholder/no-poster.jpg";
import { truncateText } from "../../utils/StringUtils";

export const DetailCard = (prop) => {
  console.log(prop);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 scrollbar-hide">
      {prop.data?.map((film) => (
        <div
          key={
            film.id + "-" + film.title ||
            film.name + "-" + film.release_date ||
            film.first_air_date
          }
          className="bg-white rounded-lg shadow-md w-full h-90"
        >
          <Link to={`/${prop.type}/${film.id}`}>
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

          {/* film Details */}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              {prop.type === "movie" ? film.title : film.name}
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              Release Date:{" "}
              {prop.type === "movie" ? film.release_date : film.first_air_date}
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
  );
};

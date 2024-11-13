import React from "react";
import { Link } from "react-router-dom";
import NoPostImage from "../../assets/imgs/placeholder/no-poster.jpg";

export const SearchCard = (props) => {
  return (
    <div className="w-full max-w-6xl mt-6">
      {props.loading && <p className="text-center">Loading...</p>}
      {props.error && (
        <p className="text-center text-red-500">Error: {props.error.message}</p>
      )}
      {props.data && props.data.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {props.data.map((item) => (
            <li key={item.id} className="p-4 bg-white shadow rounded-lg">
              <div className="relative">
                <Link to={`/${item.media_type}/${item.id}`}>
                  <img
                    src={
                      item.backdrop_path
                        ? `${process.env.REACT_APP_API_IMG_URL}${
                            item.backdrop_path || item.poster_path
                          }`
                        : NoPostImage
                    }
                    alt={item.backdrop_path + "-search-photo"}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                    <h2 className="text-xl font-semibold">
                      {item.original_name || item.original_title}
                    </h2>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        props.keyword &&
        !props.loading && <p className="text-center">No results found.</p>
      )}
    </div>
  );
};

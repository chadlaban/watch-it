import React from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/DetailsHook.js";
import MovieSectionList from "../MovieSectionList.js";
import DOMPurify from "dompurify";

export const Details = () => {
  const { id } = useParams();
  const { data, error } = useFetchById(id);

  if (data === null) return <div>Loading {id}...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Poster Image */}
          {data.info.poster_path && (
            <img
              src={`${process.env.REACT_APP_API_IMG_URL}${data.info.poster_path}`}
              alt={data.info.title}
              className="w-auto h-96 rounded-lg shadow-md"
            />
          )}

          {/* Movie Details */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              {data.info.title}
            </h3>
            <p className="text-gray-600 italic mb-4">{data.info.tagline}</p>
            <p className="text-gray-700 mb-4">{data.info.overview}</p>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800">Genres:</h4>
                <ul className="text-gray-700">
                  {data.info.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Production Companies:
                </h4>
                <ul className="text-gray-700">
                  {data.info.production_companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800">Release Date:</h4>
                <p className="text-gray-700">{data.info.release_date}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Runtime:</h4>
                <p className="text-gray-700">{data.info.runtime} minutes</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Vote Average:</h4>
                <p className="text-gray-700">{data.info.vote_average} / 10</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Vote Count:</h4>
                <p className="text-gray-700">{data.info.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white border rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Reviews</h3>
        {data.reviews.results ? (
          <div className="space-y-6">
            {data.reviews.results.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {review.author}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
                <p
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(review.content),
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No reviews available.</p>
        )}
      </div>
      <MovieSectionList list="upcoming" />
    </>
  );
};

import React from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/DetailsHook.js";
import Reviews from "./Reviews.js";
import { RelatedList } from "./RelatedList.js";
import NoPostImage from "../../assets/imgs/placeholder/no-poster.jpg";
import { DetailsSkeleton } from "../LoadingState/DetailsSkeleton.js";
import { ReviewsSkeleton } from "../LoadingState/ReviewsSkeleton.js";
import { ListSkeleton } from "../LoadingState/ListSkeleton.js";
import TaggedMovieList from "./TaggedMovieList.js";

export const Details = (prop) => {
  const { id } = useParams();
  const { data, error } = useFetchById(id, prop.type);

  if (data === null)
    return (
      <>
        <DetailsSkeleton />
        <ReviewsSkeleton />
        <ListSkeleton />
        <ListSkeleton />
      </>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Poster Image */}
          {data.info.poster_path && (
            <img
              src={
                data.info.poster_path
                  ? `${process.env.REACT_APP_API_IMG_URL}${
                      data.info.poster_path || data.profile_path
                    }`
                  : NoPostImage
              }
              alt={
                `${data.info.title || data.info.name}-poster` ||
                "no-poster-image"
              }
              className="w-auto h-96 rounded-lg shadow-md"
            />
          )}

          {/* Movie Details */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              {prop.type === "movie" ? data.info.title : data.info.name}
            </h3>
            <p className="text-gray-600 italic mb-4">
              {data.info.tagline || data.info.place_of_birth}
            </p>
            {prop.type === "person" && data.info.birthday ? (
              <p className="text-gray-600 italic mb-4">
                Birth Date: {data.info.birthday}
              </p>
            ) : (
              ""
            )}
            <p className="text-gray-700 mb-4">
              {data.info.overview ||
                data.info.biography ||
                "No overview added to this film yet."}
            </p>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              {prop.type !== "person" ? (
                <div>
                  <h4 className="font-semibold text-gray-800">Genres:</h4>
                  <ul className="text-gray-700">
                    {data.info.genres?.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                (
                  <p className="text-gray-700 mb-4">
                    {data.info.homepage && `Website: ${data.info.homepage}`}
                  </p>
                ) || ""
              )}

              {prop.type !== "person" ? (
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Production Companies:
                  </h4>
                  <ul className="text-gray-700">
                    {data.info.production_companies?.map((company) => (
                      <li key={company.id}>{company.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            {prop.type !== "person" ? (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Release Date:</h4>
                  <p className="text-gray-700">
                    {prop.type === "movie"
                      ? data.info.release_date
                      : data.info.first_air_date}
                  </p>
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {prop.type !== "person" ? (
        <Reviews data={data} />
      ) : (
        <TaggedMovieList data={data} />
      )}

      {/* Similar Movies */}
      {prop.type !== "person" ? (
        <RelatedList
          data={
            prop.type === "movie"
              ? data.similarMovies?.results
              : data.similarSeries?.results
          }
          type="similar"
          film={prop.type}
        />
      ) : (
        ""
      )}

      {/* recommendations */}
      {prop.type !== "person" ? (
        <RelatedList
          data={data.recommendations?.results}
          type="recommendations"
          film={prop.type}
        />
      ) : (
        ""
      )}
    </>
  );
};

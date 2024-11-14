import React, { useState } from "react";
import useFetchSearch from "../hooks/SearchHook";
import { SearchCard } from "../components/card/SearchCard.js";

function Search() {
  const [keyword, setKeyword] = useState("");
  const { data, loading, error } = useFetchSearch(keyword);

  return (
    <div
      className={`flex flex-col items-center ${
        keyword ? "justify-start" : "justify-center"
      } min-h-screen bg-gray-100 p-4`}
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Watch It Search</h1>
        <input
          type="text"
          placeholder="Search for movies, shows, etc."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <SearchCard
        keyword={keyword}
        data={data && keyword ? data.results : []} // only render when data exist
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Search;

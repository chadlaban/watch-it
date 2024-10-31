import React from "react";
import MovieSectionList from "../components/MovieSectionList";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <article>
        <h1>Watch It Home</h1>
        <p>This is the Homepage.</p>
      </article>
      <div>
        <MovieSectionList list="now-playing" />
        <MovieSectionList list="popular" />
        <MovieSectionList list="top_rated" />
        <MovieSectionList list="upcoming" />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import SectionList from "../components/SectionList";

function Home() {
  return (
    <>
      <article>
        <h1>Watch It Home</h1>
        <p>This is the Homepage.</p>
      </article>
      <div>
        <SectionList list="movies-now-playing" type="movie" />
        <SectionList list="popular-movies" type="movie" />
        <SectionList list="top-rated-movies" type="movie" />
        <SectionList list="upcoming-movies" type="movie" />
        <SectionList list="top-rated-series" type="series" />
        <SectionList list="popular-series" type="series" />
      </div>
    </>
  );
}

export default Home;

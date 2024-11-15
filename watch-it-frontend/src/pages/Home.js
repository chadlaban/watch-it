import React from "react";
import SectionList from "../components/SectionList";
import { RandomRotations } from "../components/section/RandomRotations";

function Home() {
  return (
    <>
      <RandomRotations />
      <div>
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

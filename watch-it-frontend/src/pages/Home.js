import React from "react";
import NowPlaying from "../components/NowPlaying";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <article>
        <h1>Watch It Home</h1>
        <p>This is the Homepage.</p>
      </article>
      <div>
        <NowPlaying />
      </div>
    </>
  );
}

export default Home;

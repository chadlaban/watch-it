import React, { useEffect, useState } from "react";

const MovieSectionList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/${props.list}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchData();
  }, [props.list]);

  return (
    <div>
      <h1>{props.list} Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSectionList;

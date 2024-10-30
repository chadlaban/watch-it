import { useFetch } from "../hooks/hooks";

const MovieSectionList = (props) => {
  const [movies] = useFetch(`${window.env.API_URL}${props.list}`);

  return (
    <div>
      <h1>{props.list} Movies</h1>
      <ul>
        {movies.results?.map((movie) => (
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

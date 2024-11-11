import express from "express";
import CORS from "./src/config/middleware/middleware.js";
import "dotenv/config";

import {
  MoviesNowPlaying,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "./src/config/routes/movies.js";
import {
  SeriesNowPlaying,
  OnAirSeries,
  PopularSeries,
  TopRatedSeries,
} from "./src/config/routes/series.js";
import {
  MovieDetails,
  Reviews,
  SimilarMovies,
  Recommendations,
} from "./src/config/routes/details.js";

const app = express();

app.use(CORS);

// Movie Endpoints
app.get("/api/now-playing", async (req, res) => {
  try {
    const data = await MoviesNowPlaying();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/popular", async (req, res) => {
  try {
    const data = await PopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/top_rated", async (req, res) => {
  try {
    const data = await TopRatedMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/upcoming", async (req, res) => {
  try {
    const data = await UpcomingMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Series Endpoints
app.get("/api/series-now-playing", async (req, res) => {
  try {
    const data = await SeriesNowPlaying();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/on-air", async (req, res) => {
  try {
    const data = await OnAirSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/top-rated-series", async (req, res) => {
  try {
    const data = await TopRatedSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/popular-series", async (req, res) => {
  try {
    const data = await PopularSeries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// search, filter, categorize
app.get("/info/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [
      movieInfoData,
      movieReviewsData,
      similarMoviesData,
      recommendationsData,
    ] = await Promise.all([
      MovieDetails(id),
      Reviews(id),
      SimilarMovies(id),
      Recommendations(id),
    ]);

    res.json({
      info: movieInfoData,
      reviews: movieReviewsData,
      similarMovies: similarMoviesData,
      recommendations: recommendationsData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is now running @PORT: ${process.env.PORT}`);
});

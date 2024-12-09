import express from "express";
import CORS from "./src/config/middleware/middleware.js";
import "dotenv/config";

import {
  Movies,
  MoviesNowPlaying,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "./src/config/routes/movies.js";
import {
  Series,
  SeriesNowPlaying,
  OnAirSeries,
  PopularSeries,
  TopRatedSeries,
} from "./src/config/routes/series.js";
import { Trending } from "./src/config/routes/trending.js";
import {
  MovieDetails,
  MovieReviews,
  SimilarMovies,
  MovieRecommendations,
} from "./src/config/routes/movieDetails.js";
import {
  SeriesDetails,
  SeriesReviews,
  SimilarSeries,
  SeriesRecommendations,
} from "./src/config/routes/seriesDetails.js";
import {
  TvSeriesDetails,
  TvSeriesReviews,
  TvSimilarSeries,
  TvSeriesRecommendations,
} from "./src/config/routes/tvSeriesDetails.js";
import { SearchByKeyword } from "./src/config/routes/search.js";
import {
  PersonDetails,
  PersonTaggedImages,
} from "./src/config/routes/personDetails.js";

const app = express();

app.use(CORS);

// Movie Endpoints
app.get("/api/movie", async (req, res) => {
  try {
    const page = Object.keys(req.query)[0];
    const parsedPage = parseInt(page, 10);

    const data = await Movies(parsedPage);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/series", async (req, res) => {
  try {
    const page = Object.keys(req.query)[0];
    const parsedPage = parseInt(page, 10);

    const data = await Series(parsedPage);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/movies-now-playing", async (req, res) => {
  try {
    const data = await MoviesNowPlaying();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/popular-movies", async (req, res) => {
  try {
    const data = await PopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/top-rated-movies", async (req, res) => {
  try {
    const data = await TopRatedMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/upcoming-movies", async (req, res) => {
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

app.get("/api/trending", async (req, res) => {
  try {
    const data = await Trending();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Movie Details
app.get("/movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [
      movieInfoData,
      movieReviewsData,
      similarMoviesData,
      recommendationsData,
    ] = await Promise.all([
      MovieDetails(id),
      MovieReviews(id),
      SimilarMovies(id),
      MovieRecommendations(id),
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

// Series Details
app.get("/series/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [
      seriesInfoData,
      seriesReviewsData,
      similarSeriesData,
      recommendationsData,
    ] = await Promise.all([
      SeriesDetails(id),
      SeriesReviews(id),
      SimilarSeries(id),
      SeriesRecommendations(id),
    ]);

    res.json({
      info: seriesInfoData,
      reviews: seriesReviewsData,
      similarSeries: similarSeriesData,
      recommendations: recommendationsData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TV Series details
app.get("/tv/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [
      tvSeriesInfoData,
      tvSeriesReviewsData,
      tvSimilarSeriesData,
      recommendationsData,
    ] = await Promise.all([
      TvSeriesDetails(id),
      TvSeriesReviews(id),
      TvSimilarSeries(id),
      TvSeriesRecommendations(id),
    ]);

    res.json({
      info: tvSeriesInfoData,
      reviews: tvSeriesReviewsData,
      similarSeries: tvSimilarSeriesData,
      recommendations: recommendationsData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// search page
app.get("/api/search/:keyword", async (req, res) => {
  const { keyword, page } = req.params;
  try {
    const data = await SearchByKeyword(keyword, page);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// person details from search page
app.get("/person/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [personInfoData, taggedImagesData] = await Promise.all([
      PersonDetails(id),
      PersonTaggedImages(id),
    ]);

    res.json({
      info: personInfoData,
      images: taggedImagesData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is now running @PORT: ${process.env.PORT}`);
});

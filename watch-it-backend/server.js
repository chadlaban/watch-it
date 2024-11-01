import express from "express";
import CORS from "./src/config/middleware/middleware.js";
import "dotenv/config";

import NowPlaying from "./src/config/routes/nowPlaying.js";
import Popular from "./src/config/routes/popular.js";
import TopRated from "./src/config/routes/topRated.js";
import Upcoming from "./src/config/routes/upcoming.js";

const app = express();

app.use(CORS);

// Endpoints
app.get("/api/now-playing", async (req, res) => {
  try {
    const data = await NowPlaying();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/popular", async (req, res) => {
  try {
    const data = await Popular();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/top_rated", async (req, res) => {
  try {
    const data = await TopRated();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/upcoming", async (req, res) => {
  try {
    const data = await Upcoming();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

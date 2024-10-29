import express from "express";
import CORS from "./src/config/middleware/middleware.js";
import "dotenv/config";

import NowPlaying from "./src/config/routes/nowPlaying.js";

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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

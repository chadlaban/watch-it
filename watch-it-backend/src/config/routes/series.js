import "dotenv/config";

const SeriesNowPlaying = async () => {
  const url =
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch now playing movies.");
  }
};

const OnAirSeries = async () => {
  const url =
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    // sort by date
    if (json.results && Array.isArray(json.results)) {
      json.results.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch now playing movies.");
  }
};

const PopularSeries = async () => {
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch now playing movies.");
  }
};

const TopRatedSeries = async () => {
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    // sort by date
    if (json.results && Array.isArray(json.results)) {
      json.results.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch now playing movies.");
  }
};

export { SeriesNowPlaying, OnAirSeries, PopularSeries, TopRatedSeries };

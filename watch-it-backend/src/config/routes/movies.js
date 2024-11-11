import "dotenv/config";

const NowPlaying = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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

const Popular = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
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
    throw new Error("Failed to fetch popular movies.");
  }
};

const TopRated = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
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
    throw new Error("Failed to fetch top rated movies.");
  }
};

const Upcoming = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
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
    throw new Error("Failed to fetch upcoming movies.");
  }
};

export { NowPlaying, Popular, TopRated, Upcoming };

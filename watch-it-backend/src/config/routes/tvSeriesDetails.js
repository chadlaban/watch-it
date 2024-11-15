import "dotenv/config";

const TvSeriesDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
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
    throw new Error("Failed to fetch now playing series.");
  }
};

const TvSeriesReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`;
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
    throw new Error("Failed to fetch now reviews on series.");
  }
};

const TvSimilarSeries = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`;
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
    throw new Error("Failed to fetch now reviews on series.");
  }
};

const TvSeriesRecommendations = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`;
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
    throw new Error("Failed to fetch now reviews on series.");
  }
};

export {
  TvSeriesDetails,
  TvSeriesReviews,
  TvSimilarSeries,
  TvSeriesRecommendations,
};

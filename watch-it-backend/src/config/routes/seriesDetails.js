import "dotenv/config";

const SeriesDetails = async (id) => {
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

const SeriesReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/reviews`;
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

const SimilarSeries = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/similar`;
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

const SeriesRecommendations = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/recommendations`;
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

export { SeriesDetails, SeriesReviews, SimilarSeries, SeriesRecommendations };

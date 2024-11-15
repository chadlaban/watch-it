import "dotenv/config";

const Trending = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
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
    if (json.results && Array.isArray(json.results)) {
      json.results.sort(
        (a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)
      );
    }
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch now playing series.");
  }
};

export { Trending };

import "dotenv/config";

// searches by keyword, movies, TV, and people
const SearchByKeyword = async (keyword, page) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`;
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
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }
    return json;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch keyword search.");
  }
};

export { SearchByKeyword };

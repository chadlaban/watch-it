import "dotenv/config";

const Reviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
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
    throw new Error("Failed to fetch now reviews on movie.");
  }
};

export default Reviews;

const PersonDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
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

const PersonTaggedImages = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}/tagged_images?page=1`;
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

export { PersonDetails, PersonTaggedImages };

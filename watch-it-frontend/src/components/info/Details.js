import React from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/DetailsHook.js";

export const Details = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchById(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Details for ID: {id}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Movielist = ({ data, esem, ra9em }) => {
  console.log(data);
  return (
    <div>
      {data
        .filter(
          (el) =>
            el.title.toLocaleLowerCase().includes(esem.toLocaleLowerCase()) &&
            el.rating >= ra9em
        )
        .map((el) => (
          <MovieCard key={el.id} el={el} />
        ))}
    </div>
  );
};

export default Movielist;

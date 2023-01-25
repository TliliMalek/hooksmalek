import React from "react";

import { Rating } from "react-simple-star-rating";

function Filter({ thez, hezi }) {
  return (
    <div>
      <input
        placeholder="write the film name"
        onChange={(e) => thez(e.target.value)}
      />
      <input
        placeholder="Stars number"
        onChange={(e) => hezi(e.target.value)}
      />
      <button>Search</button>
      <Rating numberOfStars={5} />
    </div>
  );
}

export default Filter;

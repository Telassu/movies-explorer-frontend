import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardlist(props) {
  return (
    <section className="movies">

      <ul className="movies__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
};

export default MoviesCardlist;
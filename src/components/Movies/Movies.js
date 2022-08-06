import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";

function Movies(props) {
  return (
    <div className="movies-page">
      <Header />
      <MoviesCardlist />
      <button className="movies-page__button">Еще</button>
      <Footer />
    </div>
  );
};

export default Movies;
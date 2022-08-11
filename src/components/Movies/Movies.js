import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <Header />
      <div className="movies-page">
        <SearchForm />
        <MoviesCardlist />
        <button className="movies-page__button" type="button" aria-label="показать ещё">Еще</button>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="movies-page">
        <SearchForm />
        <MoviesCardlist />
        <button
          className="movies-page__button"
          type="button"
          aria-label="показать ещё">
          Еще
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
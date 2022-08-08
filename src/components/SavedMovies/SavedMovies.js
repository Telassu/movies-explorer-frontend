import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";

function SavedMovies() {
  return (
    <>
      <Header />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardlist />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;
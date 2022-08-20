import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";

function SavedMovies(props) {
  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardlist />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
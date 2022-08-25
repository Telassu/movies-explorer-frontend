import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const pageSavedMovies = true;

  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="saved-movies">
        <SearchForm
          movies={props.movies}
          setMovies={props.setMovies}
          setIsLoading={props.setIsLoading}
          setIsNotMovies={props.setIsNotMovies}
        />
        {props.isLoading
          ? <Preloader /> : ''}
        {props.isNotMovies
          ? <p className="movie-page__not-found">Ничего не найдено</p>
          : <MoviesCardlist
            movies={props.movies}
            onCardDelete={props.onCardDelete}
            pageSavedMovies={pageSavedMovies}
          />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
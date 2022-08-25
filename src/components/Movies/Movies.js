/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  //  console.log(localStorage)

  // результаты последнего поиска
  useEffect(() => {
    const lastSearchedMovie = JSON.parse(localStorage.getItem("searchMovies"));
    const lastShortMovie = JSON.parse(localStorage.getItem("shortMovies"));
    const lastCheckboxState = localStorage.getItem('Checkbox')
    if (localStorage.getItem("searchMovies")) {
      if (lastCheckboxState === true) {
        if (lastShortMovie.length > 0) {
          props.setMovies(lastShortMovie)
        }
        else {
          props.setIsNotMovies(true)
        }
      } else {
        if (lastSearchedMovie.length > 0) {
          props.setMovies(lastSearchedMovie)
        }
        else {
          props.setIsNotMovies(true)
        }
      }
    }
  }, [])

  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="movies-page">
        <SearchForm
          isLoading={props.isLoading}
          setIsLoading={props.setIsLoading}
          movies={props.movies}
          shownMovies={props.shownMovies}
          setMovies={props.setMovies}
          setIsNotMovies={props.setIsNotMovies}
        />

        {props.isLoading
          ? <Preloader /> : ''}
        {props.isNotMovies
          ? <p className="movie-page__not-found">Ничего не найдено</p>
          : <MoviesCardlist
            movies={props.shownMovies}
            onCardSaved={props.onCardSaved}
            onCardDelete={props.onCardDelete}
            savedMovies={props.savedMovies}
          />
        }
      </main>
      <Footer />
    </>
  );
};

export default Movies;
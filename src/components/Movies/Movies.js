/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

import { moviesApi } from '../../utils/MoviesApi'

function Movies(props) {

  // получение массива фильмов
  useEffect(() => {
    props.setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies))
      })
      .catch((err) => {
        console.log("ERROR! =>", err);
        props.setIsErrorMessage('Во время запроса проишла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
      })
      .finally(() => props.setIsLoading(false));
  }, []);

  //результаты последнего поиска
  useEffect(() => {
    const lastSearchedMovies = JSON.parse(localStorage.getItem("searchMovies"));
    const lastShortMovies = JSON.parse(localStorage.getItem("shortMovies"));
    const lastCheckboxState = JSON.parse(localStorage.getItem('lastCheckboxState'));
    props.setIsChecked(lastCheckboxState)

    if (lastSearchedMovies === null ?? lastShortMovies === null) {
      props.setShownMovies([])
    } else {
      if (lastCheckboxState === true) {
        if (lastShortMovies.length === 0) {
          props.setIsNotMovies(true)
        } else {
          props.setIsNotMovies(false)
          props.setShownMovies(lastShortMovies)
        }
      } else {
        if (lastSearchedMovies.length === 0) {
          props.setIsNotMovies(true)
        } else {
          props.setIsNotMovies(false)
          props.setShownMovies(lastSearchedMovies)
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
          setMovies={props.setShownMovies}
          setIsNotMovies={props.setIsNotMovies}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
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
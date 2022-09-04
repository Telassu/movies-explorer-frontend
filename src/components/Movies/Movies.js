/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies({
  isLoggedIn,
  isLoading,
  setIsLoading,
  isNotMovies,
  setIsNotMovies,
  isChecked,
  setIsChecked,
  movies,
  setShownMovies,
  shownMovies,
  savedMovies,
  onCardDelete,
  onCardSaved,
  onSearch
}) {

  //результаты последнего поиска
  useEffect(() => {
    const lastSearchedMovies = JSON.parse(localStorage.getItem("searchMovies"));
    const lastShortMovies = JSON.parse(localStorage.getItem("shortMovies"));
    const lastCheckboxState = JSON.parse(localStorage.getItem('lastCheckboxState'));

    setIsNotMovies(false)
    setIsChecked(lastCheckboxState)

    if (lastSearchedMovies === null ?? lastShortMovies === null) {
      setShownMovies([])
    } else {
      if (lastCheckboxState === true) {
        if (lastShortMovies.length === 0) {
          setIsNotMovies(true)
        } else {
          setIsNotMovies(false)
          setShownMovies(lastShortMovies)
        }
      } else {
        if (lastSearchedMovies.length === 0) {
          setIsNotMovies(true)
        } else {
          setIsNotMovies(false)
          setShownMovies(lastSearchedMovies)
        }
      }
    }
  }, [])

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className="movies-page">
        <SearchForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movies={movies}
          shownMovies={shownMovies}
          setMovies={setShownMovies}
          setIsNotMovies={setIsNotMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          onSearch={onSearch}
        />

        {isLoading
          ? <Preloader /> : ''}
        {isNotMovies
          ? <p className="movie-page__not-found">Ничего не найдено</p>
          : <MoviesCardlist
            movies={shownMovies}
            setShownMovies={setShownMovies}
            onCardSaved={onCardSaved}
            onCardDelete={onCardDelete}
            savedMovies={savedMovies}
          />
        }
      </main>
      <Footer />
    </>
  );
};

export default Movies;
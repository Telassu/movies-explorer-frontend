import React, { useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardlist from "../MoviesCardList/MoviesCardlis";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
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
  onCardDelete,
  onSearch
}) {
  const pageSavedMovies = true;

  useEffect(() => {
    setIsNotMovies(false)
    setIsChecked(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className="saved-movies">
        <SearchForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movies={movies}
          shownMovies={shownMovies}
          setMovies={setShownMovies}
          setIsNotMovies={setIsNotMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          pageSavedMovies={pageSavedMovies}
          onSearch={onSearch}
        />
        {isLoading
          ? <Preloader /> : ''}
        {isNotMovies
          ? <p className="movie-page__not-found">Ничего не найдено</p>
          : <MoviesCardlist
            movies={shownMovies}
            setShownMovies={setShownMovies}
            onCardDelete={onCardDelete}
            pageSavedMovies={pageSavedMovies}
          />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
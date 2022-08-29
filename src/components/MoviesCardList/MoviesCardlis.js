/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from "../../utils/WindowSize";
import {
  WIDTH_SCREEN_DESKTOP,
  WIDTH_SCREEN_TABLET,
  WIDTH_SCREEN_MOBILE,
  QUANTITY_CARDS_DESKTOP,
  QUANTITY_CARDS_TABLET,
  QUANTITY_CARDS_MOBILE,
} from '../../utils/constants'

function MoviesCardlist({
  movies,
  onCardSaved,
  onCardDelete,
  pageSavedMovies,
  savedMovies,
  isSaveMovieIcon,
  setIsSaveMovieIcon,
  setShownMovies
}) {
  const size = useWindowSize();
  const [addCardsRow, setAddCardsRow] = useState(QUANTITY_CARDS_DESKTOP);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  const checkWindow = () => {
    if (size.width >= WIDTH_SCREEN_DESKTOP) {
      setAddCardsRow(QUANTITY_CARDS_DESKTOP);
    } else if (size.width >= WIDTH_SCREEN_TABLET) {
      setAddCardsRow(QUANTITY_CARDS_TABLET);
    } else if (size.width >= WIDTH_SCREEN_MOBILE) {
      setAddCardsRow(QUANTITY_CARDS_MOBILE)
    }
  }

  useEffect(() => {
    checkWindow();
  }, [size.width])

  useEffect(() => {
    if (addCardsRow.total <= movies.length) {
      setIsButtonHidden(true);
    } else if (addCardsRow.total > movies.length) {
      setIsButtonHidden(false)
    }
  }, [movies.length, addCardsRow.total]);

  const addMoreCards = () => {
    setAddCardsRow({
      ...addCardsRow,
      total: addCardsRow.total + addCardsRow.plus,
    })
  }

  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.slice(0, addCardsRow.total).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onCardSaved={onCardSaved}
            onCardDelete={onCardDelete}
            pageSavedMovies={pageSavedMovies}
            savedMovies={savedMovies}
            isSaveMovieIcon={isSaveMovieIcon}
            setIsSaveMovieIcon={setIsSaveMovieIcon}
          ></MoviesCard>
        ))}
      </ul>
      <button
        className="movies-page__button"
        type="button"
        aria-label="показать ещё"
        hidden={!isButtonHidden || pageSavedMovies}
        onClick={addMoreCards}
      >
        Еще
      </button>

    </section>
  );
};

export default MoviesCardlist;
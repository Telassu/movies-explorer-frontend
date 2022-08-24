import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from "../../utils/WindowSize";

function MoviesCardlist({ movies, onCardSaved, onCardDelete, pageSavedMovies, savedMovies }) {
  const size = useWindowSize();

  const [addCardsRow, setAddCardsRow] = useState({ total: 12, plus: 3 });
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  const checkWindow = () => {
    if (size.width >= 1100) {
      setAddCardsRow({ total: 12, plus: 3 });
    } else if (size.width >= 768) {
      setAddCardsRow({ total: 8, plus: 2 });
    } else if (size.width >= 320) {
      setAddCardsRow({ total: 5, plus: 2 })
    }
  }

  useEffect(() => {
    checkWindow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width])

  useEffect(() => {
    if (addCardsRow.total <= movies.length) {
      setIsButtonHidden(true);
    } else if (addCardsRow.total > movies.length) {
      setIsButtonHidden(false)
    }
  }, [addCardsRow.total, movies, setIsButtonHidden]);


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
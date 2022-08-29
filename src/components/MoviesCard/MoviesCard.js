import React, { useState } from "react";

import CardButton from "../CardButton/CardButton";

function MoviesCard({
  movie,
  onCardSaved,
  onCardDelete,
  pageSavedMovies,
  savedMovies
}) {
  const baseURL = 'https://api.nomoreparties.co';

  const [isButtonHidden, setIsButtonHidden] = useState(true);

  const isSaved = movie.id && savedMovies.some(el => el.movieId === movie.id);

  const showButton = () => {
    setIsButtonHidden(false)
  }

  const hideButton = () => {
    setIsButtonHidden(true)
  }

  function getTime(duration) {
    const hours = Math.trunc(duration / 60);
    const min = duration % 60;
    return hours + 'ч ' + min + 'м';
  }

  return (
    <>
      <li className="movie"
        onMouseOver={showButton}
        onMouseOut={hideButton}
      >
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="movie__image"
            src={movie.image.url ? `${baseURL}/${movie.image.url}` : movie.image}
            alt={movie.nameRU}
          />
        </a>
        <div className="movie__subtitle">
          <p className="movie__name">{movie.nameRU}</p>
          <div className="movie__time-container">{getTime(movie.duration)}</div>
        </div>
        <div className="movie__button">
          <CardButton
            movie={movie}
            onCardSaved={onCardSaved}
            onCardDelete={onCardDelete}
            isSaved={isSaved}
            pageSavedMovies={pageSavedMovies}
            savedMovies={savedMovies}
            isButtonHidden={isButtonHidden}
          />
        </div>
      </li>
    </>
  );
};

export default MoviesCard;
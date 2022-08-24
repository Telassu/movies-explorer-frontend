import React, { useState } from "react";

import CardButton from "../CardButton/CardButton";

function MoviesCard({ movie, onCardSaved, onCardDelete, pageSavedMovies, savedMovies }) {
  const baseURL = 'https://api.nomoreparties.co';

  const [isButton, setIsButton] = useState(true);

  const isSaved = movie.id && savedMovies.some(el => el.movieId === movie.id)

  const showButton = () => {
    setIsButton(false)
  }

  const hideButton = () => {
    setIsButton(true)
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
        <img
          className="movie__image"
          src={movie.image.url ? `${baseURL}/${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
        <div className="movie__subtitle">
          <p className="movie__name">{movie.nameRU}</p>
          <div className="movie__time-container">{getTime(movie.duration)}</div>
        </div>
        <div className={`${isButton ? `movie__button_hidden` : ` `}`}>
          <CardButton
            movie={movie}
            onCardSaved={onCardSaved}
            onCardDelete={onCardDelete}
            isSaved={isSaved}
            pageSavedMovies={pageSavedMovies}
            savedMovies={savedMovies}
          />
        </div>

      </li>
    </>
  );
};

export default MoviesCard;
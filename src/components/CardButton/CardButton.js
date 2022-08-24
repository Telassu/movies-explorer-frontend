import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Delete from "../../images/delete.svg"
import Saved from "../../images/saved.svg";


function CardButton({ onCardSaved, movie, onCardDelete, isSaved, pageSavedMovies, savedMovies }) {
  const [isSaveMovieIcon, setIsSaveMovieIcon] = useState(false);

  const currentMovie = movie.id && savedMovies.filter(el => el.movieId === movie.id)

  useEffect(() => {
    if (isSaved) {
      setIsSaveMovieIcon(true)
    } else {
      setIsSaveMovieIcon(false)
    }
  }, [isSaved])

  const handleMovieDelete = () => {
    if (pageSavedMovies) {
      onCardDelete(movie._id)
    } else {
      onCardDelete(currentMovie[0]._id)
    }
    setIsSaveMovieIcon(false)
  }

  const handleMovieSave = () => {
    onCardSaved(movie)
    setIsSaveMovieIcon(true)
  }

  return (
    <>
      <Switch>
        <Route path="/movies">
          {isSaveMovieIcon
            ? <img
              className="movie__saved"
              src={Saved}
              alt="сохраненный фильм"
              onClick={handleMovieDelete}
            />
            : <button
              type="button"
              className="movie__save-button"
              aria-label="сохранить"
              onClick={handleMovieSave}
            >
              Сохранить
            </button>
          }
        </Route>

        <Route path="/saved-movies">
          < img
            className="movie__delete-button"
            src={Delete}
            alt="удалить фильм"
            onClick={handleMovieDelete}
          />
        </Route>
      </Switch>
    </>
  )
}

export default CardButton

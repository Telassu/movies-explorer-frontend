import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Delete from "../../images/delete.svg"
import Saved from "../../images/saved.svg";
import useWindowSize from "../../utils/WindowSize";
import {
  WIDTH_SCREEN_TABLET,
} from '../../utils/constants'


function CardButton({
  onCardSaved,
  movie,
  onCardDelete,
  isSaved,
  pageSavedMovies,
  savedMovies,
  isButtonHidden,
}) {

  const [isSaveMovieIcon, setIsSaveMovieIcon] = useState(false);
  const size = useWindowSize();
  const desktopWidth = size.width >= WIDTH_SCREEN_TABLET;

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

    isSaved
      ? setIsSaveMovieIcon(false)
      : setIsSaveMovieIcon(true)
  }

  const handleMovieSave = () => {
    onCardSaved(movie)
    isSaved
      ? setIsSaveMovieIcon(true)
      : setIsSaveMovieIcon(false)
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
              hidden={
                desktopWidth ? isButtonHidden : false
              }
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
            hidden={
              desktopWidth ? isButtonHidden : false
            }
            alt="удалить фильм"
            onClick={handleMovieDelete}
          />
        </Route>
      </Switch>
    </>
  )
}

export default CardButton

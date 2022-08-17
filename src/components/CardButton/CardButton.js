import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Delete from "../../images/delete.svg"
import Saved from "../../images/saved.svg";


function CardButton(props) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  const saveMovie = () => {
    setIsSavedMovie(true);
  }

  const cancelSaveMovie = () => {
    setIsSavedMovie(false)
  }

  return (
    <>
      <Switch>
        <Route path="/movies">
          {isSavedMovie
            ? <img
              className="movie__saved"
              src={Saved}
              alt="сохранено успешно"
              onClick={cancelSaveMovie}
            />
            : <button
              type="button"
              className="movie__save-button"
              aria-label="сохранить"
              onClick={saveMovie}
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
          />
        </Route>
      </Switch>
    </>
  )
}

export default CardButton

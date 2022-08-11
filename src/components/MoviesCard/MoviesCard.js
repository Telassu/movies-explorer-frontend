import React, { useState } from "react";

import Example from "../../images/example_movie.png";
import Saved from "../../images/saved.svg";

function MoviesCard() {
  const [isSaveButton, setIsSaveButton] = useState(true);
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  const showSaveButton = () => {
    setIsSaveButton(false)
  }

  const hideSaveButton = () => {
    setIsSaveButton(true)
  }

  const saveMovie = () => {
    setIsSavedMovie(true);
  }

  return (
    <>
      <li className="movie"
        onMouseOver={showSaveButton}
        onMouseOut={hideSaveButton}
      >
        <img
          className="movie__image"
          src={Example} alt="film"
        />
        {isSavedMovie
          ? (
            <img className="movie__saved" src={Saved} alt="сохранено успешно" />
          )
          : (
            <button
              type="button"
              className={`movie__save-button ${isSaveButton ? `movie__save-button_hidden` : ` `}`}
              aria-label="сохранить"
              onClick={saveMovie}
            >
              Сохранить
            </button>
          )
        }
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
      </li>
    </>
  );
};

export default MoviesCard;
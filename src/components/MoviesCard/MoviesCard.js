import React, { useState } from "react";

import Example from "../../images/example_movie.png";
import CardButton from "../CardButton/CardButton";

function MoviesCard(props) {
  const [isButton, setIsButton] = useState(true);

  const showButton = () => {
    setIsButton(false)
  }

  const hideButton = () => {
    setIsButton(true)
  }

  return (
    <>
      <li className="movie"
        onMouseOver={showButton}
        onMouseOut={hideButton}
      >
        <img
          className="movie__image"
          src={Example} alt="film"
        />
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
        <div className={`${isButton ? `movie__button_hidden` : ` `}`}>
          <CardButton />
        </div>

      </li>
    </>
  );
};

export default MoviesCard;
import React from "react";

import Example from "../../images/example_movie.png";
import Saved from "../../images/saved.svg";

function MoviesCard() {
  return (
    <>
    <li className="movie">
      <img className="movie__image" src={Example} alt="film" />
      <button className="movie__save-button" aria-label="сохранить">Сохранить</button>
      <img className="movies__saved" src={Saved} alt="сохранено успешно" />
      <div className="movie__subtitle">
        <p className="movie__name">33 слова о дизайне</p>
        <div className="movie__time-container">1 ч 17 мин</div>
      </div>
    </li>
    <li className="movie">
      <img className="movie__image" src={Example} alt="film" />
      <button className="movie__save-button" aria-label="сохранить">Сохранить</button>
      <img className="movies__saved" src={Saved} alt="сохранено успешно" />
      <div className="movie__subtitle">
        <p className="movie__name">33 слова о дизайне</p>
        <div className="movie__time-container">1 ч 17 мин</div>
      </div>
    </li>
    <li className="movie">
      <img className="movie__image" src={Example} alt="film" />
      <button className="movie__save-button" aria-label="сохранить">Сохранить</button>
      <img className="movies__saved" src={Saved} alt="сохранено успешно" />
      <div className="movie__subtitle">
        <p className="movie__name">33 слова о дизайне</p>
        <div className="movie__time-container">1 ч 17 мин</div>
      </div>
    </li>
    <li className="movie">
      <img className="movie__image" src={Example} alt="film" />
      <button className="movie__save-button" aria-label="сохранить">Сохранить</button>
      <img className="movies__saved" src={Saved} alt="сохранено успешно" />
      <div className="movie__subtitle">
        <p className="movie__name">33 слова о дизайне</p>
        <div className="movie__time-container">1 ч 17 мин</div>
      </div>
    </li>
    </>
  );
};

export default MoviesCard;
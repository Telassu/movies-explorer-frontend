import React from "react";

import Example from "../../images/example_movie.png";
import Saved from "../../images/saved.svg";

function MoviesCard() {
  return (
    <>
      <li className="movie">
        <img className="movie__image" src={Example} alt="film" />
        <button className="movie__save-button" aria-label="сохранить" type="submit">Сохранить</button>
        <img className="movie__saved_hidden" src={Saved} alt="сохранено успешно" />
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
      </li>
      <li className="movie">
        <img className="movie__image" src={Example} alt="film" />
        <button type="submit" className="movie__save-button_hidden" aria-label="сохранить">Сохранить</button>
        <img className="movie__saved" src={Saved} alt="сохранено успешно" />
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
      </li>
      <li className="movie">
        <img className="movie__image" src={Example} alt="film" />
        <button className="movie__save-button" aria-label="сохранить" type="submit">Сохранить</button>
        <img className="movie__saved" src={Saved} alt="сохранено успешно" />
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
      </li>
      <li className="movie">
        <img className="movie__image" src={Example} alt="film" />
        <button className="movie__save-button" aria-label="сохранить" type="submit">Сохранить</button>
        <img className="movie__saved" src={Saved} alt="сохранено успешно" />
        <div className="movie__subtitle">
          <p className="movie__name">33 слова о дизайне</p>
          <div className="movie__time-container">1ч 17м</div>
        </div>
      </li>
    </>
  );
};

export default MoviesCard;
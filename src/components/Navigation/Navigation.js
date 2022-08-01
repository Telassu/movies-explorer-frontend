import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Navigation() {
  return (
    <section className="navigation">
      <Switch>
        <Route exact path="/">
          <ul className="navigation__links navigation__links_not-login">
            <li className="navigation__link">
              <Link to="/signup" className="navigation__button navigation__button_register">
                Регистрация
              </Link>
            </li>
            <li className="navigation__link">
              <Link to="/signin" className="navigation__button navigation__button_enter">
                Войти
              </Link>
            </li>
          </ul>
        </Route>

        <Route path="*">
          <ul className="navigation__links navigation__links_login">
            <li className="navigation__link">
              <Link to="/movies" className="navigation__button navigation__button_movies">
                Фильмы
              </Link>
            </li>
            <li className="navigation__link">
              <Link to="/saved-movies" className="navigation__button navigation__button_saved-movies">
                Сохранённые фильмы 
              </Link>
            </li>
          </ul>
          <button className="navigation__account"><Link to="/profile">Аккаунт</Link></button>
        </Route>
      </Switch>
  </section>
  )
};

export default Navigation;
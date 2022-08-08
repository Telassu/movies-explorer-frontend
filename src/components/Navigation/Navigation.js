import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Navigation() {
  return (
    <section className="navigation">
      <Switch>
        <Route exact path="/">
          <ul className="navigation__links navigation__links_not-login">
            <li className="navigation__button">
              <Link to="/signup" className="navigation__link">
                Регистрация
              </Link>
            </li>
            <li className="navigation__button navigation__button_login">
              <Link to="/signin" className="navigation__link navigation__link_login">
                Войти
              </Link>
            </li>
          </ul>
        </Route>

        <Route path="*">
          <ul className="navigation__links navigation__links_login">
            <li className="navigation__button">
              <Link to="/movies" className="navigation__link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="navigation__link">
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation__button navigation__button_account">
              <Link to="/profile" className="navigation__link">Аккаунт</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </section>
  )
};

export default Navigation;
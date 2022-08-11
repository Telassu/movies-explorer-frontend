import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

function Navigation() {
  let isLoggedIn

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <>
      <section className="navigation">

        <Switch>
          <Route exact path="/">
            {!isLoggedIn
              ? (
                <ul className="navigation__links navigation__links_not-login">
                  <li className="navigation__button">
                    <Link to="/signup" className="navigation__link_not-login">
                      Регистрация
                    </Link>
                  </li>
                  <li className="navigation__button navigation__button_login">
                    <Link to="/signin" className="navigation__link_not-login navigation__link_login">
                      Войти
                    </Link>
                  </li>
                </ul>
              )
              : (
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
              )
            }
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
            <button
              type="button"
              className="button-burger"
              aria-label="открыть навигацию"
              onClick={handleOpenMenu}>
            </button>
          </Route>
        </Switch>
      </section>
      <section className={`navigation__burger ${isOpenMenu ? `navigation__burger_opened` : ` `}`}>
        <button
          type="button"
          className="burger__close-button"
          aria-label="закрыть окно"
          onClick={handleCloseMenu}>
        </button>
        <Route path="*">
          <ul className="navigation__links navigation__links_burger">
            <li className="navigation__button navigation__button_burger">
              <Link to="/" className="navigation__link">
                Главная
              </Link>
            </li>
            <li className="navigation__button navigation__button_burger">
              <Link to="/movies" className="navigation__link">
                Фильмы
              </Link>
            </li>
            <li className="navigation__button navigation__button_burger">
              <Link to="/saved-movies" className="navigation__link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <button className="navigation__button_account">
            <Link to="/profile" className="navigation__link_account">Аккаунт</Link>
          </button>

        </Route>

      </section>
    </>
  )
};

export default Navigation;
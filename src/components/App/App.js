import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // защита роутов
import * as auth from "../../utils/Auth";
import { api } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // для прелоадера
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  //получение информации о пользователе
  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log("ERROR! =>", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  //проверка токена
  useEffect(() => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => console.log("ERROR! =>", err));
  }, [history])

  // получение массива фильмов
  useEffect(() => {
    moviesApi
      .getInitialMovies()
      .then((movies) => {
        setMovies(movies)
        console.log(movies)
      })
      .catch((err) => console.log("ERROR! =>", err));

  })

  //регистрация
  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        setIsLoggedIn(true)
        history.push("/movies")
      })
      .catch((err) => {
        console.log('ERROR =>', err)
      })
  }

  //авторизация
  const hadleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((res) => {
        history.push("/movies")
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log('ERROR =>', err)
      })

  }

  //выход из системы
  function handleSignOut() {
    auth
      .logout()
      .then((res) => {
        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log('ERROR =>', err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main
              isLoggedIn
            />
          </Route>
          <Route path="/movies">
            <Movies
              isLoggedIn
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              isLoggedIn
            />
          </Route>
          <Route path="/profile">
            <Profile
              isLoggedIn
              OnSignOut={handleSignOut}
            />
          </Route>
          <Route path="/signin">
            <Login onLogin={hadleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;

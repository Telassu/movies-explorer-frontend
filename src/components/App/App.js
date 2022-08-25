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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/Auth";
import { api } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [shownMovies, setShownMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isNotMovies, setIsNotMovies] = useState(false);

  const [isErrorMessage, setIsErrorMessage] = useState('');
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  const history = useHistory();

  //  console.log(localStorage)
  //console.log(isLoggedIn)

  //проверка токена
  useEffect(() => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          localStorage.setItem('IsLoggedIn', true)
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log("ERROR! =>", err));
  }, [history])

  //получение информации о пользователе
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUserInfo(), api.getInitialMovies()])
        .then(([userInfo, InitialMovies]) => {
          setCurrentUser(userInfo);
          setSavedMovies(InitialMovies)
          localStorage.setItem("InitialMovies", JSON.stringify(InitialMovies))
        })
        .catch((err) => console.log("ERROR! =>", err));
    }
  }, [isLoggedIn]);

  //регистрация
  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        auth.login(email, password)
        setIsLoggedIn(true)
        history.push("/movies")
      })
      .catch((err) => {
        setIsErrorMessage('При регистрации пользователя произошла ошибка.')
      })
  }

  //авторизация
  function hadleLogin(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        history.push("/movies")
        setIsLoggedIn(true)
      })
      .catch((err) => {
        setIsErrorMessage('Вы ввели неправильный логин или пароль.')
      })
  }

  //обновление информации пользователя
  const handleOnUpdateUser = (user) => {
    setIsLoading(true);

    api
      .editUserInfo(user.name, user.email)
      .then((user) => {
        setCurrentUser(user);
        setIsErrorMessage("Данные успешно обновлены")
      })

      .catch((err) => {
        console.log("ERROR! =>", err);
        setIsErrorMessage(err)
      })
      .finally(() => setIsLoading(false));
  }

  // получение массива фильмов
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies))
      })
      .catch((err) => {
        console.log("ERROR! =>", err);
        setIsErrorMessage('Во время запроса проишла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
      })
      .finally(() => setIsLoading(false));
  }, [history]);

  // сохранение фильма в своем списке
  const handleMovieSave = (movie) => {
    setIsLoading(true)
    api
      .saveNewMovie(movie)
      .then((movie) => setSavedMovies([movie, ...savedMovies]))
      .catch((err) => console.log("ERROR =>", err))
      .finally(() => setIsLoading(false));
  }

  // удаление из списка сохраненных
  const handleMovieDelete = (movieId) => {
    setIsLoading(true)
    api
      .deleteMovie(movieId)
      .then(() => {
        const newList = savedMovies.filter((element) => element._id !== movieId);
        setSavedMovies(newList);
      })
      .catch((err) => console.log("ERROR =>", err))
      .finally(() => setIsLoading(false));
  }

  //выход из системы
  const handleSignOut = () => {
    auth
      .logout()
      .then((res) => {
        setIsLoggedIn(false);
        localStorage.clear();
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
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            isLoading={isLoading}
            isErrorMessage={isErrorMessage}
            isNotMovies={isNotMovies}
            setIsLoading={setIsLoading}
            movies={allMovies}
            shownMovies={shownMovies}
            setMovies={setShownMovies}
            onCardSaved={handleMovieSave}
            onCardDelete={handleMovieDelete}
            setIsNotMovies={setIsNotMovies}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isNotMovies={isNotMovies}
            isLoading={isLoading}
            isErrorMessage={isErrorMessage}
            movies={savedMovies}
            setMovies={setSavedMovies}
            setIsLoading={setIsLoading}
            onCardDelete={handleMovieDelete}
            setIsNotMovies={setIsNotMovies}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            isErrorMessage={isErrorMessage}
            setIsErrorMessage={setIsErrorMessage}
            OnSignOut={handleSignOut}
            onUpdateUser={handleOnUpdateUser}
          />

          <Route path="/signin">
            <Login
              onLogin={hadleLogin}
              isErrorMessage={isErrorMessage}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              isErrorMessage={isErrorMessage}
            />
          </Route>

          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider >
  )
};

export default App;

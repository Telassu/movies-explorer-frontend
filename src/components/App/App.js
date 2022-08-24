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
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // защита роутов
import * as auth from "../../utils/Auth";
import { api } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [shownMovies, setShownMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState('');
  const [isNotMovies, setIsNotMovies] = useState(false);
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  const history = useHistory();

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

  //проверка токена
  useEffect(() => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log("ERROR! =>", err));
  }, [history])

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
  const handleSignOut = () => {
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

  //обновление информации пользователя
  const handleOnUpdateUser = (user) => {
    setIsLoading(true);

    api
      .editUserInfo(user.name, user.email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log("ERROR! =>", err);
      })
      .finally(() => setIsLoading(false));
  }

  // получение массива фильмов
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((movies) => {
        setShownMovies(movies)
        localStorage.setItem('allMovies', JSON.stringify(movies))
      })
      .catch((err) => {
        console.log("ERROR! =>", err);
        setIsError('Во время запроса проишла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
      })
      .finally(() => setIsLoading(false));
  }, []);

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/movies">
            <Movies
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              isError={isError}
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
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
              isLoggedIn={isLoggedIn}
              isNotMovies={isNotMovies}
              isLoading={isLoading}
              isError={isError}
              movies={savedMovies}
              setMovies={setSavedMovies}
              setIsLoading={setIsLoading}
              onCardDelete={handleMovieDelete}
              setIsNotMovies={setIsNotMovies}
            />
          </Route>
          <Route path="/profile">
            <Profile
              isLoggedIn={isLoggedIn}
              OnSignOut={handleSignOut}
              onUpdateUser={handleOnUpdateUser}
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

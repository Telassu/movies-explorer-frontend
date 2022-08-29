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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //фильмы, отображающиеся в "Фильмы"
  const [shownMovies, setShownMovies] = useState([]);
  //фильмы, отображающиеся в "Сохраненные фильмы"
  const [savedMovies, setSavedMovies] = useState([]);
  //"Ничего не найдено"
  const [isNotMovies, setIsNotMovies] = useState(false);
  //массив всех фильмов
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  //состояние чекбокса
  const [isChecked, setIsChecked] = useState(`${localStorage.getItem('lastCheckboxState')
    ? JSON.parse(localStorage.getItem('lastCheckboxState'))
    : true
    }`);
  //состояние лоадера
  const [isLoading, setIsLoading] = useState(false);
  //сообщение для пользователя об ошибках сервера
  const [isErrorMessage, setIsErrorMessage] = useState('');
  //блокирование инпутов и кнопки сохранения на время обработки запроса
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(false)

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

  useEffect(() => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem('IsLoggedIn', true)
          history.push("/");
        }
      })
      .catch((err) => console.log("ERROR! =>", err));
  }, [history])

  //авторизация
  // добавить ошибки авторизации
  function hadleLogin(email, password) {
    setIsLoading(true)
    setIsDisabledInput(true)
    setIsDisabledButton(true)

    auth
      .login(email, password)
      .then((res) => {
        history.push("/movies")
        setIsLoggedIn(true)
      })
      .catch((err) => {
        if (400) {
          setIsErrorMessage('Вы ввели неправильный логин или пароль.');
        } else {
          setIsErrorMessage('При авторизации произошла ошибка.')
        }
        console.log("ERROR =>", err)
      })
      .finally(() => {
        setIsLoading(false)
        setIsDisabledInput(false)
        setIsDisabledButton(false)
      }
      )
  }

  //регистрация
  const handleRegister = (name, email, password) => {
    setIsLoading(true)
    setIsDisabledInput(true)
    setIsDisabledButton(true)

    auth
      .register(name, email, password)

      .then(() => {
        hadleLogin(email, password)
        setIsErrorMessage('')
      })
      .catch((err) => {
        if (409) {
          setIsErrorMessage('Пользователь с таким email уже существует.');
        } else {
          setIsErrorMessage('При регистрации пользователя произошла ошибка.')
        }
      })
      .finally(() => {
        setIsLoading(false)
        setIsDisabledInput(false)
        setIsDisabledButton(false)
      }
      )
  }

  //обновление информации пользователя
  const handleOnUpdateUser = (user) => {
    setIsLoading(true)
    setIsDisabledInput(true)
    setIsDisabledButton(true)
    setIsErrorMessage('')

    api
      .editUserInfo(user.name, user.email)
      .then((user) => {
        setCurrentUser(user);
        setIsErrorMessage("Данные успешно обновлены")
      })
      .catch((err) => {
        if (409) {
          setIsErrorMessage('Пользователь с таким email уже существует.');
        } else {
          setIsErrorMessage('При обновлении профиля произошла ошибка.')
        }
      })
      .finally(() => {
        setIsLoading(false)
        setIsDisabledInput(false)
        setIsDisabledButton(false)
      });
  }

  // сохранение фильма в своем списке
  //поднять стейт изменения состояния кнопки сохранения из CardButton
  // добавить к .then, чтобы состояние изменялось только при удачном сохранении
  //тоже самое исправить в удалении карточки 
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
        setCurrentUser({})

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
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/movies"
            component={Movies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isErrorMessage={isErrorMessage}
            isNotMovies={isNotMovies}
            setIsNotMovies={setIsNotMovies}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            movies={allMovies}
            setShownMovies={setShownMovies}
            shownMovies={shownMovies}
            savedMovies={savedMovies}
            onCardDelete={handleMovieDelete}
            onCardSaved={handleMovieSave}
          />
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/saved-movies"
            component={SavedMovies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isErrorMessage={isErrorMessage}
            isNotMovies={isNotMovies}
            setIsNotMovies={setIsNotMovies}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            movies={savedMovies}
            setSavedMovies={setSavedMovies}
            onCardDelete={handleMovieDelete}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            isErrorMessage={isErrorMessage}
            setIsErrorMessage={setIsErrorMessage}
            isDisabledInput={isDisabledInput}
            isDisabledButton={isDisabledButton}
            setIsDisabledButton={setIsDisabledButton}
            OnSignOut={handleSignOut}
            onUpdateUser={handleOnUpdateUser}
          />

          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
            />
          </Route>


          <Route path="/signin">
            <Login
              onLogin={hadleLogin}
              isErrorMessage={isErrorMessage}
              isDisabledInput={isDisabledInput}
              isDisabledButton={isDisabledButton}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              isErrorMessage={isErrorMessage}
              isDisabledInput={isDisabledInput}
              isDisabledButton={isDisabledButton}
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

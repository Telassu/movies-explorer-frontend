import React, { createRef, useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";

function Profile(props) {
  const nameInput = createRef();
  const emailInput = createRef();
  const currentUser = useContext(CurrentUserContext)


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  //  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [currentUser])

  const editProfile = () => {
    setIsActive(true);
    nameInput.current.removeAttribute('disabled');
    emailInput.current.removeAttribute('disabled');
  }

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsActive(false);
  }

  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="profile">
        <h1 className="profile__title">Привет, {name || ' '}!</h1>
        <form className="profile__form" name="profile" onSubmit={handleFormSubmit}>
          <div>
            <label className="profile__label">Имя
              <input
                type="name"
                name="name"
                id="name"
                ref={nameInput}
                className="profile__input profile__input_type_name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
                disabled
                onChange={handleChangeName}
                value={name || ' '}
              />
            </label>
            <label className="profile__label">E-mail
              <input
                type="email"
                name="email"
                id="email"
                ref={emailInput}
                className="profile__input profile__input_type_email"
                placeholder="E-mail"
                required
                disabled
                onChange={handleChangeEmail}
                value={email || ' '}
              />
            </label>
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__buttons">
            <button type="button" className={`profile__button ${isActive ? `profile__button_hidden` : ``}`} onClick={editProfile}>Редактировать</button>
            <button
              type="button"
              className={`profile__button ${isActive ? `profile__button_hidden` : ``} profile__button_exit`}
              onClick={props.OnSignOut}
            >
              Выйти из аккаунта
            </button>
            <button
              type="submit"
              className={`profile__button ${!isActive ? `profile__button_hidden` : ``} profile__save-button`}
            //              disabled={!isValid}
            >Сохранить</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
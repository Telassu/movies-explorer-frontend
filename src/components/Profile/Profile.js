import React, { createRef, useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import useFormWithValidation from "../../utils/Validation";
import Header from "../Header/Header";

function Profile(props) {
  const nameInput = createRef();
  const emailInput = createRef();
  const currentUser = useContext(CurrentUserContext)
  const { values, setValues, errors, isValid, handleChange } = useFormWithValidation();

  const [isActive, setIsActive] = useState(false);
  const [inputActive, setInputValid] = useState(false)

  //  console.log(currentUser)
  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  function editProfile() {
    setIsActive(true);
    setInputValid(true);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateUser({
      name: values.name,
      email: values.email
    });
  }

  const handleToggle = () => {
    setIsActive(false);
    setInputValid(false);
  }

  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
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
                disabled={!inputActive}
                onChange={handleChange}
                value={values.name || ''}
              />
            </label>
            <span className="profile__input-error">{errors.name}</span>
            <label className="profile__label">E-mail
              <input
                type="email"
                name="email"
                id="email"
                ref={emailInput}
                className="profile__input profile__input_type_email"
                placeholder="E-mail"
                required
                disabled={!inputActive}
                onChange={handleChange}
                value={values.email || ''}
              />
            </label>
            <span className="profile__input-error">{errors.email}</span>
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
              disabled={!isValid}
              onClick={handleToggle}
            >Сохранить</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
import React, { createRef, useState } from "react";

import Header from "../Header/Header";

function Profile(props) {
  const nameInput = createRef();
  const emailInput = createRef();

  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [isActive, setIsActive] = useState(false)


  const editProfile = () => {
    setIsActive(true);
    nameInput.current.removeAttribute('disabled');
    emailInput.current.removeAttribute('disabled');
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }


  return (
    <>
      <Header />
      <h1 className="profile__title">Привет, {props.name || 'Виталий'}!</h1>
      <form className="profile__form" name="profile">
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
        <span className="profile__input-error name-input-error"></span>

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
        <span className="profile__input-error email-input-error"></span>
      </form>

      <div className="profile__buttons">
        <button type="button" className={`profile__button ${isActive ? `profile__button_hidden` : ``}`} onClick={editProfile}>Редактировать</button>
        <button type="button" className={`profile__button ${isActive ? `profile__button_hidden` : ``} profile__button_exit`}>Выйти из аккаунта</button>
        <button type="submit" className={`profile__button ${!isActive ? `profile__button_hidden` : ``} profile__save-button`}>Сохранить</button>
      </div>
    </>
  );
};

export default Profile;
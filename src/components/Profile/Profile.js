import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

function Profile(props) {
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
            className="profile__input profile__input_type_name"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            required
            value={props.name || 'Виталий'}
          />
        </label>
        <span className="profile__input-error name-input-error"></span>

        <label className="profile__label">E-mail
          <input
            type="email"
            name="email"
            id="email"
            className="profile__input profile__input_type_email"
            placeholder="E-mail"
            required
            value={props.email || 'pochta@yandex.ru'}
          />
        </label>
        <span className="profile__input-error email-input-error"></span>
      </form>
      <div className="profile__buttons">
        <button type="submit" className="profile__button">Редактировать</button>
        <Link to="/" className="profile__link">Выйти из аккаунта</Link>
      </div>
    </>
  );
};

export default Profile;
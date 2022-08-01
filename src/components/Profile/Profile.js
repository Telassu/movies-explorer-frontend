import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

function Profile(props) {
  return (
    <section className="profile">
      <Header />
      <h1 className="profile__title">Привет, {props.name}!</h1>
      <form className="profile__form" name="profile">
        <input
          type="name"
          name="name"
          id="name"
          className="profile__input profile__input_type_name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="profile__input-error name-input-error"></span>
        <input
          type="email"
          name="email"
          id="email"
          className="profile__input profile__input_type_email"
          placeholder="E-mail"
          required
        />
        <span className="profile__input-error email-input-error"></span>
        <p className="profile__text">Редактировать</p>
        <Link to="/" className="profile__link">Выйти из аккаунта</Link>
      </form>
    </section>
  );
};

export default Profile;
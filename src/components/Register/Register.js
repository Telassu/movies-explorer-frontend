import React from "react";

import Form from "../Form/Form";

function Register() {
  return (
    <Form
      name="auth"
      title="Добро пожаловать"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы? "
      link="/signin"
      linkText="Войти"
    >
      <span className="input-caption auth__input-caption">Имя</span>
      <input
        type="name"
        name="name"
        id="name"
        className="input auth__input auth__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="input-error auth__input-error name-input-error"></span>
      <span className="input-caption auth__input-caption">E-mail</span>
      <input
        type="email"
        name="email"
        id="email"
        className="input auth__input auth__input_type_email"
        placeholder="E-mail"
        required
      />
      <span className="input-error auth__input-error email-input-error"></span>
      <span className="input-caption auth__input-caption">Пароль</span>
      <input
        type="password"
        name="password"
        id="password"
        className="input auth__input auth__input_type_password"
        placeholder="Пароль"
        required
      />
      <span className="input-error auth__input-error password-input-error"></span>
    </Form>
  );
};

export default Register;
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
     <input
          type="name"
          name="name"
          id="name"
          className="auth__input auth__input_type_name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="auth__input-error name-input-error"></span>
        <input
          type="email"
          name="email"
          id="email"
          className="auth__input auth__input_type_email"
          placeholder="E-mail"
          required
        />
        <span className="auth__input-error email-input-error"></span>
        <input
          type="password"
          name="password"
          id="password"
          className="auth__input auth__input_type_password"
          placeholder="Пароль"
          required
        />
        <span className="auth__input-error password-input-error"></span> 
    </Form>
  );
};

export default Register;
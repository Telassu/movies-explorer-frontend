import React from "react";

import Form from "../Form/Form";

function Login() {
  return (
    <Form
      name="login"
      title="Рады видеть!"
      buttonText="Войти"
      text="Еще не зарегистрированы? "
      link="/signup"
      linkText="Зарегистрироваться"
    >
      <span className="input-caption login__input-caption">Email</span>
      <input
        type="email"
        name="email"
        id="email"
        className="input login__input login__input_type_email"
        placeholder="E-mail"
        required
      />
      <span className="login__input-error email-input-error"></span>
      <span className="input-caption login__input-caption">Пароль</span>
      <input
        type="password"
        name="password"
        id="password"
        className="input login__input login__input_type_password"
        placeholder="Пароль"
        required
      />
      <span className="login__input-error password-input-error"></span>
    </Form>
  );
};

export default Login;
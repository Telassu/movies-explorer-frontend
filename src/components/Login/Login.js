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
      <input
          type="email"
          name="email"
          id="email"
          className="login__input login__input_type_email"
          placeholder="E-mail"
          required
        />
        <span className="login__input-error email-input-error"></span>
        <input
          type="password"
          name="password"
          id="password"
          className="login__input login__input_type_password"
          placeholder="Пароль"
          required
        />
        <span className="login__input-error password-input-error"></span>      
    </Form>
  );
};

export default Login;
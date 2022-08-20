import React, { useState } from "react";

import Form from "../Form/Form";


function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <Form
      name="login"
      title="Рады видеть!"
      buttonText="Войти"
      text="Еще не зарегистрированы? "
      link="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
    >
      <span className="input-caption login__input-caption">Email</span>
      <input
        type="email"
        name="email"
        id="email"
        className="input login__input login__input_type_email"
        placeholder="E-mail"
        required
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="input-caption login__input-caption">Пароль</span>
      <input
        type="password"
        name="password"
        id="password"
        className="input login__input login__input_type_password"
        placeholder="Пароль"
        required
        value={values.password || ""}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Login;
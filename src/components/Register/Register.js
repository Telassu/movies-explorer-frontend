import React, { useState } from "react";

import Form from "../Form/Form";

function Register(props) {
  const [values, setValues] = useState({
    name: "",
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
    props.onRegister(values.name, values.email, values.password);
  }

  return (
    <Form
      name="auth"
      title="Добро пожаловать"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы? "
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
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
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="input-caption auth__input-caption">E-mail</span>
      <input
        type="email"
        name="email"
        id="email"
        className="input auth__input auth__input_type_email"
        placeholder="E-mail"
        required
        value={values.email || ""}
        onChange={handleChange}

      />
      <span className="input-caption auth__input-caption">Пароль</span>
      <input
        type="password"
        name="password"
        id="password"
        className="input auth__input auth__input_type_password"
        placeholder="Пароль"
        required
        value={values.password || ""}
        onChange={handleChange}

      />
    </Form>
  );
};

export default Register;
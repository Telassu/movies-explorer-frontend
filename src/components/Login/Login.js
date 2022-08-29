import React from "react";

import Form from "../Form/Form";
import useFormWithValidation from "../../utils/Validation"

function Login(props) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

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
      isValid={isValid}
      isDisabledButton={props.isDisabledButton}
      isErrorMessage={props.isErrorMessage}
    >
      <label className="input-caption login__input-caption">Email
        <input
          type="email"
          name="email"
          id="email"
          className="input login__input login__input_type_email"
          placeholder="E-mail"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
          required
          disabled={props.isDisabledInput}
          value={values.email || ""}
          onChange={handleChange}
        />
        <p className="input-error login__input-error name-input-error">{errors.email}</p>

      </label>
      <label className="input-caption login__input-caption">Пароль
        <input
          type="password"
          name="password"
          id="password"
          className="input login__input login__input_type_password"
          placeholder="Пароль"
          required
          disabled={props.isDisabledInput}
          value={values.password || ""}
          onChange={handleChange}
        />
      </label>
      <p className="input-error login__input-error name-input-error">{errors.password}</p>
    </Form>
  );
};

export default Login;
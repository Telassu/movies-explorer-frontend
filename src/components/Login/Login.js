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
      isErrorMessage={props.isErrorMessage}
    >
      <div>
        <label className="input-caption login__input-caption">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input login__input login__input_type_email"
          placeholder="E-mail"
          required
          disabled={props.isDisabledInput}
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="input-error login__input-error name-input-error">{errors.email}</span>
      </div>
      <div>
        <label className="input-caption login__input-caption">Пароль</label>
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
        <span className="input-error login__input-error name-input-error">{errors.password}</span>
      </div>
    </Form>
  );
};

export default Login;
import React from "react";

import Form from "../Form/Form";
import useFormWithValidation from "../../utils/Validation";

function Register(props) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

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
      isValid={isValid}
      isErrorMessage={props.isErrorMessage}
    >
      <div>
        <label className="input-caption auth__input-caption">Имя</label>
        <input
          type="name"
          name="name"
          id="name"
          className="input auth__input auth__input_type_name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          disabled={props.isDisabledInput}
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="input-error auth__input-error name-input-error">{errors.name}</span>
      </div>
      <div>
        <label className="input-caption auth__input-caption">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input auth__input auth__input_type_email"
          placeholder="E-mail"
          required
          disabled={props.isDisabledInput}
          value={values.email || ""}
          onChange={handleChange}

        />
        <span className="input-error auth__input-error email-input-error">{errors.email}</span>
      </div>
      <div>
        <label className="input-caption auth__input-caption">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input auth__input auth__input_type_password"
          placeholder="Пароль"
          required
          disabled={props.isDisabledInput}
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="input-error auth__input-error password-input-error">{errors.password}</span>
      </div>
    </Form>
  );
};

export default Register;
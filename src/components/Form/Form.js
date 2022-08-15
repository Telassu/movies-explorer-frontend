import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";

function Form(props) {

  return (
    <>
      <div className="form-container">
        <Link to="/">
          <img src={Logo} alt="Логотип" className="logo" />
        </Link>
        <h1 className={`form__title form__title_${props.name}`}>{props.title}</h1>
        <form
          className={`form form_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
        ><div>
            {props.children}
            <span className={`input-error ${props.name}-input-error`}></span>
          </div>
          <div className="form__buttons">
            <button
              className={`form__save-button form__save-button_${props.name}`}
              //         disabled={!props.isValid}
              type="submit"
              aria-label="сохранить изменения"
              onClick={props.onClick}
            >
              {props.buttonText}
            </button>
            <p className={`form__text form__text_${props.name}`}>{props.text}
              <Link className={`form__link form__link_${props.name}`} to={props.link}>{props.linkText}</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
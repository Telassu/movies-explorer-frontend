import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
};

export default Header;

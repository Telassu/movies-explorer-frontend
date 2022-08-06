import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

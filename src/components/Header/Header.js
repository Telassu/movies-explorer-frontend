import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="Логотип" className="logo" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;

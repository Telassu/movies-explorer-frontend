import React from "react";

function NavTab(props) {
  return (
    <ul className="nav__links">
      <li className="nav__link">
        <a href="#project" className="nav__button">О проекте</a>
      </li>
      <li className="nav__link">
        <a href="#techs" className="nav__button">Технологии</a>
      </li>
      <li className="nav__link">
        <a href="#student" className="nav__button">Студент</a>
      </li>
    </ul>
  );
};

export default NavTab;
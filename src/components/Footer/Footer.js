import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__author">&copy; 2022</p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/profile/web/" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/Telassu" className="footer__link" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://facebook.com/" className="footer__link" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
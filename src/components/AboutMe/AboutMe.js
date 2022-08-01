import React from "react";

function AboutMe() {
  return (
      <section className="section student" id="student">
        <h3 className="student__title">О проекте</h3>
        <article className="stundent__info">
          <h2 className="student__info-title">Надежда</h2>
          <p className="student__info-subtitle">Фронтенд-разработчик, 34 года</p>
          <p className="student__info-text">Бла-бла-бла</p>
          <div className="student__photo">photo</div>
        </article>
        <ul className="student__links">
          <li><a href="https://facebook.com/" className="studen__link" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://github.com/Telassu" className="studen__link" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </section>
  )
};

export default AboutMe;
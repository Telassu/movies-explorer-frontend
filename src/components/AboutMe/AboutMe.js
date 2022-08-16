import React from "react";

import Photo from "../../images/profilePhoto.jpg"

function AboutMe() {
  return (
    <section className="student" id="student">
      <h3 className="student__title">Студент</h3>
      <article className="student__info">
        <div className="student__info-text-container">
          <h2 className="student__info-title">Виталий</h2>
          <p className="student__info-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="student__info-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
            с постоянной работы.</p>
          <ul className="student__links">
            <li><a href="https://facebook.com/" className="studen__link" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://github.com/Telassu" className="studen__link" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="student__photo" src={Photo} alt="фотография" />
      </article>
    </section>
  )
};

export default AboutMe;
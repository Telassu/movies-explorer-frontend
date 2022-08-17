import React from "react";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__title">Технологии</h3>
      <article className="techs__info">
        <h2 className="techs__info-title">7 технологий</h2>
        <p className="techs__info-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </article>
      <ul className="techs__icons">
        <li className="techs__icon">HTML</li>
        <li className="techs__icon">CSS</li>
        <li className="techs__icon">JS</li>
        <li className="techs__icon">React</li>
        <li className="techs__icon">Git</li>
        <li className="techs__icon">Express js</li>
        <li className="techs__icon">MongoDB</li>
      </ul>
    </section>
  )
};

export default Techs;
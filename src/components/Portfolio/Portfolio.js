import React from "react";
import linkIcon from "../../images/portfolio.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a href="https://github.com/Telassu/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__name">Статичный сайт</p>
            <img className="portfolio__icon" alt="иконка для перехода на репозиторий" src={linkIcon}></img></a>
        </li>
        <li className="portfolio__element">
          <a href="https://telassu.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__name">Адаптивный сайт</p>
            <img className="portfolio__icon" alt="иконка для перехода на репозиторий" src={linkIcon}></img></a>
        </li>
        <li className="portfolio__element">
          <a href="http://chuhonina.students.nomoredomains.xyz/sign-in" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__name">Однстраничное приложение</p>
            <img className="portfolio__icon" alt="иконка для перехода на репозиторий" src={linkIcon}></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
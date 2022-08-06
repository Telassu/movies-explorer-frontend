import React from "react";
import linkIcon from "../../images/portfolio.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <p className="portfolio__name">Статичный сайт</p>
          <a href="https://github.com/Telassu/how-to-learn" target="_blank" rel="noreferrer"><img className="portfolio__link" alt="иконка для перехода на репозиторий" src={linkIcon}></img></a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__name">Адаптивный сайт</p>
          <a href="https://github.com/Telassu/russian-travel" target="_blank" rel="noreferrer"><img className="portfolio__link" alt="иконка для перехода на репозиторий" src={linkIcon}></img></a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__name">Однстраничное приложение</p>
          <a href="https://github.com/Telassu/react-mesto-api-full" target="_blank" rel="noreferrer"><img className="portfolio__link" alt="иконка для перехода на репозиторий" src={linkIcon}></img></a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
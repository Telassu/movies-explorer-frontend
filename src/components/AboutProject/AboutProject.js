import React from "react";

function AboutProject() {
  return (
    <section className="project" id="project">
      <h3 className="project__title">О проекте</h3>
      <div className="project__info-section">
        <article className="project__info">
          <div>
            <h4 className="project__info-title">Дипломный проект включал 5 этапов</h4>
            <p className="project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h4 className="project__info-title">На выполнение диплома ушло 5 недель</h4>
            <p className="project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </article>
        <div className="project__line">
          <div className="project__line_backend">1 неделя</div>
          <div className="project__line_frontend">4 недели</div>
        </div>
        <div className="project__caption">
          <div className="project__caption_backend">Back-end</div>
          <div className="project__caption_frontend">Front-end</div>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;
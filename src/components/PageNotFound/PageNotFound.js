import React from "react";
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Страница не найдена</h2>
      <button className="not-found__back" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
};

export default PageNotFound;
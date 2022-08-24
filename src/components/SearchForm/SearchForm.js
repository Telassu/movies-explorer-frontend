import React from "react";
import { useState } from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { filterMovies } from "../../utils/FilterMovies";

function SearchForm({ setIsLoading, movies, setMovies, setIsNotMovies, shownMovies }) {
  const [isSearch, setIsSearch] = useState('');
  const [isError, setIsError] = useState(false);

  const searchedMovies = filterMovies(movies, isSearch);

  const handleChange = (evt) => {
    setIsSearch(evt.target.value);
    setIsError(evt.target.validationMessage)
  }

  // действия по кнопке поиска: текст запроса, найденные фильмы, 
  // состояние переключателя короткометражок - в хранилище, результат - на экран

  const localSaveSearching = (title) => {
    localStorage.setItem("lastMoviesRequest", JSON.stringify(title));
    localStorage.setItem("searchMovies", JSON.stringify(searchedMovies));
    //    localStorage.setItem("shortMovies", JSON.stringify(isShortMovies));
  }

  //сабмит
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isSearch) {
      setIsError(true)
    } else {
      setIsLoading(true);
      localSaveSearching(isSearch);
      if (searchedMovies.length > 0) {
        setIsNotMovies(false)
        setMovies(searchedMovies);
      } else {
        setIsNotMovies(true)
      }
      setIsLoading(false)
    }
  }

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="search__line">
          <input
            className="search__input"
            placeholder="Фильм"
            type="text"
            required
            onChange={handleChange}
            value={isSearch || ''}
          />
          <span
            className="search__input-error"
            hidden={!isError}
          >
            Нужно ввести ключевое слово
          </span>
        </div>
        <button
          type="submit"
          className="search__button"
        ></button>
      </form>
      <FilterCheckbox
        setMovies={setMovies}
        movies={movies}
        shownMovies={shownMovies}
      />
    </section>
  )
}

export default SearchForm;
import React, { useEffect } from "react";
import { useState } from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { filterDuration, filterMovies } from "../../utils/FilterMovies";

function SearchForm({ setIsLoading, movies, setMovies, setIsNotMovies, pageSavedMovies, isChecked, setIsChecked, shownMovies }) {
  //поисковый запрос
  const [isSearch, setIsSearch] = useState('');
  //ошибка формы запроса
  const [isError, setIsError] = useState(false);
  //сохранение поисковых запросов
  const [isShortMovies, setIsShortMovies] = useState([])
  const [isSearchedMovies, setIsSearchedMovies] = useState([])

  useEffect(() => {
    const lastMovieRequest = JSON.parse(localStorage.getItem("lastMoviesRequest"));

    if (pageSavedMovies) {
      setIsSearch(' ');

    } else {
      setIsSearch(lastMovieRequest)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (evt) => {
    setIsSearch(evt.target.value);
    setIsError(evt.target.validationMessage)
  }

  const handleShortMovies = () => {
    const shortMovies = filterDuration(movies)
    setIsShortMovies(shortMovies)
  }

  const searchMovies = (title) => {

    if (isChecked) {
      const shortResult = filterMovies(isShortMovies, title)
      if (shortResult.length === 0) {
        setIsNotMovies(true)
        localStorage.setItem("shortMovies", JSON.stringify([]));
      } else {
        setMovies(shortResult)
        localStorage.setItem("shortMovies", JSON.stringify(shortResult));
      }
    } else {
      const allResult = filterMovies(movies, title)

      if (allResult.length === 0) {
        setIsNotMovies(true)
        localStorage.setItem("searchMovies", JSON.stringify([]));
      } else {
        setMovies(allResult)
        setIsSearchedMovies(allResult)
        localStorage.setItem("searchMovies", JSON.stringify(allResult));
      }
    }

    localStorage.setItem("lastMoviesRequest", JSON.stringify(title));
    localStorage.setItem("lastCheckboxState", JSON.stringify(isChecked));
  }

  useEffect(() => {
    if (!pageSavedMovies) {
      if (isChecked) {
        setMovies(filterDuration(shownMovies))
      } else {
        searchMovies(isSearch)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked])

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isSearch) {
      setIsError(true)
    } else {
      setIsLoading(true);
      setIsNotMovies(false);
      searchMovies(isSearch);
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
            value={isSearch || ""}
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
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        searchMovies={searchMovies}
        isSearch={isSearch}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setIsNotMovies={setIsNotMovies}
        handleFormSubmit={handleFormSubmit}
        pageSavedMovies={pageSavedMovies}
        handleShortMovies={handleShortMovies}
        isSearchedMovies={isSearchedMovies}
      />
    </section>
  )
}

export default SearchForm;
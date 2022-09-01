import React, { useEffect } from "react";
import { useState } from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { filterDuration, filterMovies } from "../../utils/FilterMovies";

function SearchForm({
  setIsLoading,
  movies,
  setMovies,
  setIsNotMovies,
  pageSavedMovies,
  isChecked,
  setIsChecked,
  shownMovies,
  onSearch
}) {
  //поисковый запрос
  const [isSearch, setIsSearch] = useState('');
  //ошибка формы запроса
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const lastMovieRequest = JSON.parse(localStorage.getItem("lastMoviesRequest"));

    if (pageSavedMovies) {
      setIsSearch('');

    } else {
      setIsSearch(lastMovieRequest)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (evt) => {
    setIsSearch(evt.target.value);
    setIsError(false)
  }

  const checkboxActive = (isChecked) => {
    setIsNotMovies(false)
    if (isChecked) {
      filterDuration(shownMovies).length === 0
        ? setIsNotMovies(true)
        : setMovies(filterDuration(shownMovies));
    } else {
      pageSavedMovies
        ? setMovies(movies)
        : filterMovies(movies, isSearch) === 0
          ? setIsNotMovies(true)
          : setMovies(filterMovies(movies, isSearch));
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isSearch) {
      setIsError(true)
    } else {
      setIsLoading(true);
      onSearch(isSearch)
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
        isSearch={isSearch}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setIsNotMovies={setIsNotMovies}
        handleFormSubmit={handleFormSubmit}
        pageSavedMovies={pageSavedMovies}
        checkboxActive={checkboxActive}
      />
    </section>
  )
}

export default SearchForm;
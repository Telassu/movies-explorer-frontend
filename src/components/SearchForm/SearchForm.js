import React, { useEffect } from "react";
import { useState } from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { filterDuration, filterMovies } from "../../utils/FilterMovies";

function SearchForm({ setIsLoading, movies, setMovies, setIsNotMovies }) {
  const [isSearch, setIsSearch] = useState('');
  const [isError, setIsError] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const lastMovieRequest = JSON.parse(localStorage.getItem("lastMoviesRequest"));
    const lastCheckboxState = localStorage.getItem('Checkbox')

    setIsSearch(lastMovieRequest)
    setChecked(lastCheckboxState)
  }, [])

  const handleChange = (evt) => {
    setIsSearch(evt.target.value);
    setIsError(evt.target.validationMessage)
  }

  const searchMovies = (title) => {
    const searchedMovies = filterMovies(movies, isSearch);
    const shortMovies = filterMovies(filterDuration(movies), isSearch)

    if (!checked) {
      if (searchedMovies.length > 0) {
        setIsNotMovies(false)
        setMovies(searchedMovies);
      } else {
        setIsNotMovies(true)
      }
    }
    else {
      if (shortMovies.length > 0) {
        setIsNotMovies(false)
        setMovies(shortMovies);
      } else {
        setIsNotMovies(true)
      }
    }

    localStorage.setItem("lastMoviesRequest", JSON.stringify(title));
    localStorage.setItem("searchMovies", JSON.stringify(searchedMovies));
    localStorage.setItem("shortMovies", JSON.stringify(shortMovies));
    localStorage.setItem("Checkbox", JSON.stringify(checked));
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isSearch) {
      setIsError(true)
    } else {
      setIsLoading(true);
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
        setMovies={setMovies}
        movies={movies}
        checked={checked}
        setChecked={setChecked}
      />
    </section>
  )
}

export default SearchForm;
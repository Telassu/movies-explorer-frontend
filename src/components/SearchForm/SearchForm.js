import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Фильмы" type="text" />
        <button type="submit" className="search__button"></button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;
import React from "react"
import { useState, useEffect } from "react";
import { filterDuration } from "../../utils/FilterMovies";

function FilterCheckbox({ movies, setMovies }) {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    if (checked) {
      setMovies(filterDuration(movies))
    }
    else {
      setMovies(movies)
    }
  }, [checked])

  //работает правильно только на всех фильмах
  const handleToggle = () => {
    setChecked(!checked)
  }

  return (
    <label className="checkbox__label">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        defaultChecked={checked}
        onChange={handleToggle}
      />
      <span className="visible-checkbox"></span>
      <span className="checkbox__label-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
import React from "react"

function FilterCheckbox({
  isChecked,
  setIsChecked,
  handleShortMovies,
  checkboxActive
}) {

  const handleToggle = () => {
    setIsChecked(!isChecked);
    handleShortMovies();
    checkboxActive(!isChecked)
  }
  console.log(isChecked)
  return (
    <label className="checkbox__label"
    >
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="visible-checkbox"></span>
      <span className="checkbox__label-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
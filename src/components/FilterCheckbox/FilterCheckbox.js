import React from "react"

function FilterCheckbox({ isChecked, setIsChecked }) {

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  console.log(isChecked)
  return (
    <label className="checkbox__label">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        value={localStorage.getItem("Checkbox")
          ? localStorage.getItem("Checkbox")
          : isChecked
        }
        defaultChecked={isChecked}
        onChange={handleToggle}
      />
      <span className="visible-checkbox"></span>
      <span className="checkbox__label-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
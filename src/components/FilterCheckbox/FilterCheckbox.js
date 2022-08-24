import React from "react"

function FilterCheckbox({ checked, setChecked }) {

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
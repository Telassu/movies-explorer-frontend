import React from "react"

function FilterCheckbox() {

  return (
    <label className="checkbox__label">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        defaultChecked={true}
      />
      <span className="visible-checkbox"></span>
      <span className="checkbox__label-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
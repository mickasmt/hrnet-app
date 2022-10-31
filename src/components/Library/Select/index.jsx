import React from "react";
import { useState } from "react";

function Select({ name, options, selected, placeholder, styles }) {
  const [value, setValue] = useState(selected || "");

  const handleChange = event => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <select name={name} className={styles} defaultValue={value} onChange={handleChange}>
      {!selected && (
        <option value="" disabled hidden>
          {placeholder ? placeholder : "Select an option"}
        </option>
      )}

      {options && options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Select;

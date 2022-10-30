import React from "react";
import { useState } from "react";

function Select({ options, selected, placeholder, styles }) {
  const [value, setValue] = useState(selected || "");

  const handleChange = event => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <select className={styles} value={value} onChange={handleChange}>
      {!selected && (
        <option value="" disabled selected hidden>
          {placeholder ? placeholder : "Select an option"}
        </option>
      )}

      {options && options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Select;

import React from "react";
import { useState } from "react";

function Select({ name, options, selected, placeholder, styles, onSelect }) {
  const [value, setValue] = useState(selected || "");

  const handleChange = (value) => {
    setValue(value);
    if (onSelect) onSelect(parseInt(value));
  };

  return (
    <select
      name={name}
      className={styles}
      defaultValue={value}
      onChange={(e) => handleChange(e.target.value)}
    >
      {!selected && (
        <option value="" disabled hidden>
          {placeholder ? placeholder : "Select an option"}
        </option>
      )}

      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
}

export default Select;

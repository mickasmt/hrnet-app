import React from "react";

function Label({ text, labelFor }) {
  return (
    <label
      htmlFor={labelFor}
      className="block text-sm font-medium text-gray-700"
    >
      {text}
    </label>
  );
}

export default Label;

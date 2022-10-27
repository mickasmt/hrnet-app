import React from "react";

function Input({ type, id, placeholder, name}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
    />
  );
}

export default Input;

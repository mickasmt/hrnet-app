import React from "react";
import PropTypes from "prop-types";

/**
 * Input Component
 * @param {string} type Type of the input
 * @param {string} name Name of  the input
 * @param {string} placeholder Placeholder of  the input
 * @param {string} id Id of the input 
 * @returns {React.ReactElement}
 */
function Input({ type, id, placeholder, name}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
    />
  );
}

Input.propTypes = {
  /** ID of the fieldset */
  id: PropTypes.string.isRequired,
  /** Name of the fieldset */
  name: PropTypes.string.isRequired,
  /** Type of the fieldset */
  type: PropTypes.string.isRequired,
  /** PLaceholder of the fieldset */
  placeholder: PropTypes.string.isRequired,
};

export default Input;

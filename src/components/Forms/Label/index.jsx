import React from "react";
import PropTypes from "prop-types";

/**
 * Label Component
 * @param {string} text Text of the label 
 * @param {string} labelFor Label of the input for link with input
 * @returns {React.ReactElement}
 */
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

Label.propTypes = {
  /** text of the label */
  text: PropTypes.string.isRequired,
  /** labelFor of the label */
  labelFor: PropTypes.string,
};

export default Label;

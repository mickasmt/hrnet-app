import React from "react";
import PropTypes from "prop-types";

/**
 * Tilte component.
 * @param {string} text Content of the title
 * @returns {React.ReactElement}
 */
function Title({ text }) {
  return <h1 className="title text-gray-900 text-2xl font-bold pb-10">{text}</h1>;
}

Title.propTypes = {
  /** title */
  text: PropTypes.string.isRequired,
};

export default Title;

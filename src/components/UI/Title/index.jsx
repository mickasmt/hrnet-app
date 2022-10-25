import React from "react";
import PropTypes from "prop-types";

/**
 * Tilte component.
 * @param {string} text Content of the title
 * @returns {React.ReactElement}
 */
function Title({ text }) {
  return (
    <div className="title">
      <h1>
        Welcome back
        <br />
        {text} !
      </h1>
    </div>
  );
}

Title.propTypes = {
  /** title */
  text: PropTypes.string.isRequired,
};

export default Title;

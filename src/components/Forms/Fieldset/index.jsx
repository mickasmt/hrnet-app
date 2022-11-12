import React from "react";
import PropTypes from "prop-types";

/**
 * Fieldset Component
 * @param {string} name Name of the fieldset
 * @param {string} classnames Styles for fieldset ui
 * @param {React.ReactNode} children 
 * @returns {React.ReactElement}
 */
function Fieldset({ name, classnames, children }) {
  return (
    <fieldset
      className={`border border-solid border-gray-300 p-3 rounded-md ${classnames}`}
    >
      <legend className="text-sm font-medium bg-white py-0.5 px-3 rounded-md border border-solid border-gray-300">
        {name}
      </legend>
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  /** Name of the fieldset */
  name: PropTypes.string.isRequired,
  /** Styles for fieldset ui */
  classnames: PropTypes.string,
  /** Childrens components */
  children: PropTypes.array,
};

export default Fieldset;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// icons
import {ReactComponent as Spinner} from "assets/icons/spinner.svg";
import {ReactComponent as HiArrowLongRight} from "assets/icons/arrow-long-right.svg";

/**
 * Submit Button Component
 * @param {string} name Name of the submit button
 * @param {boolean} loading Loading value form
 * @param {boolean} disabled Disabled value form
 * @returns {React.ReactElement}
 */
function SubmitButton({ loading = false, name, disabled }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className={classNames(
        "px-7 py-2.5 text-white ",
        "bg-lime-700 border border-lime-700",
        "inline-flex items-center rounded-md",
        "hover:bg-transparent hover:text-lime-700",
        "focus:outline-none focus:ring active:text-lime-500",
        "disabled:bg-lime-700/90 disabled:text-white"
      )}
    >
      {loading ? (
        <>
          <Spinner className="mr-3 w-6 h-6 motion-reduce:hidden animate-spin" />
          <span className="text-sm font-medium">Loading...</span>
        </>
      ) : (
        <>
          <span className="text-sm font-medium">{name}</span>
          <HiArrowLongRight className="ml-3 w-6 h-6" />
        </>
      )}
    </button>
  );
}

SubmitButton.propTypes = {
  /** Name of submit button */
  name: PropTypes.string.isRequired,
  /** Loading value */
  loading: PropTypes.bool,
  /** Disabled value */
  disabled: PropTypes.bool,
};

export default SubmitButton;

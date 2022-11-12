import React from "react";

/**
 * Error Message Component
 * @param {array} errors Array of yup errrors
 * @returns {React.ReactElement}
 */
function ErrorMessage(errors) {
  return (
    <p className="mt-0.5 ml-1 text-sm text-red-600">
      {errors.length > 1 ? errors.join(" ") : errors.errors}
    </p>
  );
}

export default ErrorMessage;

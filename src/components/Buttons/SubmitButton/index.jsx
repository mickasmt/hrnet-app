import React from "react";
import classNames from "classnames";

import {ReactComponent as Spinner} from "assets/icons/spinner.svg";
import {ReactComponent as HiArrowLongRight} from "assets/icons/arrow-long-right.svg";

function SubmitButton({ loading, name }) {
  return (
    <button
      type="submit"
      disabled={loading}
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

export default SubmitButton;

import React from "react";

function Fieldset({ name, classnames, children }) {
  return (
    <fieldset
      class={`border border-solid border-gray-300 p-3 rounded-md ${classnames}`}
    >
      <legend class="text-sm font-medium bg-white py-0.5 px-3 rounded-md border border-solid border-gray-300">
        {name}
      </legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;

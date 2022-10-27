import React from "react";

function Label({ text, labelFor}) {
  return (
    <label for={labelFor} class="block text-sm font-medium text-gray-700">
      {text}
    </label>
  );
}

export default Label;

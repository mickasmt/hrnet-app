import React from "react";
import logo from "assets/images/logo.png";

/**
 * Logo component.
 * @returns {React.ReactElement}
 */
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">WealthHealth</h1>
    </div>
  );
}

export default Logo;

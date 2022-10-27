import React from "react";
import logo from "assets/images/logo.png";

/**
 * Logo component.
 * @returns {React.ReactElement}
 */
function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img src={logo} className="w-11 h-11" alt="Argent Bank Logo" />
      <h1 className="sr-only">WealthHealth</h1>
      <span className="logo-font text-lg text-gray-900">Wealth Health</span>
    </div>
  );
}

export default Logo;

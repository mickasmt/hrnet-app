import React from "react";
import { Link } from "react-router-dom";
import Logo from "components/UI/Logo";

import "styles/components/header.scss";

/**
 * Header Component
 * @returns {React.ReactElement}
 */
function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <Logo />
      </Link>

      <div className="main-nav-links">
        <Link className="main-nav-item" to="/">
          Create Employee
        </Link>

        <Link className="main-nav-item" to="/employees">
          List Employees
        </Link>
      </div>
    </nav>
  );
}

export default Header;

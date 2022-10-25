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
    <nav>
      <Link to="/">
        <Logo />
      </Link>

      <div className="main-nav-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/employees/new">
          New Employee
        </Link>

        <Link to="/employees">
          List Employees
        </Link>
      </div>
    </nav>
  );
}

export default Header;

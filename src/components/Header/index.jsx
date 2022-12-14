import React from "react";
import { Link } from "react-router-dom";
import Logo from "components/UI/Logo";

/**
 * Header Component
 * @returns {React.ReactElement}
 */
function Header() {
  return (
    <nav
      className="f-container flex items-center justify-between p-4"
    >
      <Link
        to="/"
        className="inline-flex h-12 w-auto items-center justify-center bg-white"
      >
        <Logo />
      </Link>

      <ul className="flex items-center gap-2 text-base font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link className="rounded-lg px-3 py-2" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link className="rounded-lg px-3 py-2" to="/employees/new">
            {" "}
            New employee{" "}
          </Link>
        </li>

        <li>
          <Link
            className="inline-flex items-center rounded-lg px-3 py-2"
            to="/employees"
          >
            List employees
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

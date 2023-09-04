import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-3">
      <div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item text-center me-3">
              <NavLink to="/">Clubs</NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink to="/form">Add Team</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;

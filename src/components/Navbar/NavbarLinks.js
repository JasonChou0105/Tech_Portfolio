import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarLinks({ closeMobileMenu }) {
  return (
    <>
      <div className="navbar-section-link-container">
        <Link className="navbar-section-link" to="/" onClick={closeMobileMenu}>
          Home
        </Link>
      </div>

      <div className="navbar-section-link-container">
        <Link
          className="navbar-section-link"
          to="/project/dream-space"
          onClick={closeMobileMenu}
        >
          Dream Space
        </Link>
      </div>

      <div className="navbar-section-link-container">
        <Link
          className="navbar-section-link"
          to="/project/microbit"
          onClick={closeMobileMenu}
        >
          Microbit
        </Link>
      </div>

      <div className="navbar-section-link-container">
        <Link
          className="navbar-section-link"
          to="/circuit"
          onClick={closeMobileMenu}
        >
          Circuit
        </Link>
      </div>
    </>
  );
}

export default NavbarLinks;

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarLinks({ closeMobileMenu }) {
  return (
    <>
      <Link
        className="navbar-section-link"
        to="/project/dream-space"
        onClick={closeMobileMenu}
      >
        <div className="navbar-section-link-container">Dream Space</div>
      </Link>

      <Link
        className="navbar-section-link"
        to="/project/microbit"
        onClick={closeMobileMenu}
      >
        <div className="navbar-section-link-container">Microbit</div>
      </Link>
      <Link
        className="navbar-section-link"
        to="/project/circuit"
        onClick={closeMobileMenu}
      >
        <div className="navbar-section-link-container">Circuit</div>
      </Link>
      <Link
        className="navbar-section-link"
        to="/project/bottle-rocket"
        onClick={closeMobileMenu}
      >
        <div className="navbar-section-link-container">Bottle Rocket</div>
      </Link>
    </>
  );
}

export default NavbarLinks;

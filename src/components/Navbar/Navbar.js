import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  const [buttonShown, setButtonShown] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  function closeMobileMenu() {
    setMenuOpen(false);
  }

  function showElements() {
    if (window.innerWidth <= 1100) {
      setButtonShown(false);
    } else {
      setButtonShown(true);
    }
  }

  useEffect(() => {
    showElements();
  }, []);

  window.addEventListener("resize", showElements);

  return (
    <div className="navbar-root-container">
      <div className="navbar-container">
        <div className="desktop-container">
          <Link className="navbar-logo-link" to="/">
            J.C
          </Link>
          {buttonShown && (
            <div className="navbar-sections-links-container ">
              <NavbarLinks closeMobileMenu={closeMobileMenu} />
              <Link className="mobile-contact-me-button navbar-section-link">
                Contact Me
              </Link>
            </div>
          )}

          {buttonShown && (
            <Button buttonStyle="btn-primary" buttonSize="btn-meduim">
              Contact Me
            </Button>
          )}
          <div className="menu-icon" onClick={handleClick}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
        {menuOpen && <NavbarLinks closeMobileMenu={closeMobileMenu} />}
      </div>
    </div>
  );
}

export default Navbar;

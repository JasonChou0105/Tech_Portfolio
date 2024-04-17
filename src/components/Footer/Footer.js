import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="content icons-container">
        <Link
          className="icon-link"
          target="_blank"
          to="https://github.com/JasonChou0105"
        >
          <i className="fab fa-github icon"></i>
        </Link>
        <Link
          className="icon-link"
          target="_blank"
          to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmXxjnmwhQjBHnKGZkqDKCJWFnwRLtKZzQfrNKsMCmFnmNBQQdTWxrTNFWNHPmrsqgpNB"
        >
          <i className="fas fa-envelope icon"></i>
        </Link>
      </div>
      <div className="content copyright-container">
        <i className="fas fa-copyright"></i> 2024 Jason Chou. All Rights
        Reserved.
      </div>
      <div className="desc-text content">
        Made with{" "}
        <Link className="link-text" target="_blank" to="https://react.dev/">
          React.js
        </Link>
      </div>
    </div>
  );
}

export default Footer;

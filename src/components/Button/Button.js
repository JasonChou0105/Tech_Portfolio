import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn-fill", "btn-outline"];

const SIZES = ["btn-medium", "btn-large", "btn-max-width"];

function Button({
  children,
  type,
  onClick,
  location,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={location} target="_blank" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

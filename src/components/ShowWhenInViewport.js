import React, { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import "./ShowWhenInViewport.css";

function ShowWhenInViewport({ children, className }) {
  const myRef = useRef();
  const [visable, setVisable] = useState(false);
  const { inViewport } = useInViewport(myRef);

  if (inViewport && !visable) {
    setVisable(true);
  }
  return (
    <section
      ref={myRef}
      className={`show-in-viewport-container ${className} ${
        visable && "visable"
      }`}
    >
      {children}
    </section>
  );
}

export default ShowWhenInViewport;

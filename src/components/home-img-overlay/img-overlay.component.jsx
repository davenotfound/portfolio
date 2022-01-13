import React from "react";
import "./img-overlay.styles.scss";
import { useState, useEffect } from "react";

const ImageOverlay = ({ beginAnimation }) => {
  useEffect(() => {
    setTimeout(() => {
      let overlay = document.getElementById("overlay");
      overlay.style.display = "none";
    }, 3000);
  });

  return (
    <div className="image-container">
      <div
        id="overlay"
        className="overlay"
        style={
          beginAnimation
            ? { animation: "slide 1s forwards", opacity: 1 }
            : { animation: "", opacity: 0 }
        }
      ></div>
      <div
        className="img"
        style={
          beginAnimation
            ? { animation: "slide-perm 1s forwards", opacity: 1 }
            : { animation: "", opacity: 0 }
        }
      />
    </div>
  );
};

export default ImageOverlay;

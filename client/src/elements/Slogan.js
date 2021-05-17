import React from "react";
import "./Slogan.scss";

export default function Slogan() {
  return (
    <div className="slogan">
      <div className="slogan-tagline">
        <h2 className="slogan-tagline-title">Sydämen asialla</h2>
        <p className="slogan-title-text">
          Päivittäinen toimintamme perustuu arvoihimme. Tunnemme iloa ja
          ylpeyttä ja teemme työtämme pilke silmäkulmassa.
        </p>
      </div>
      <div className="slogan-image-wrapper">
        <img
          className="slogan-image"
          src="./assets/icons/home-logo-hand.png"
          alt=""
        />
      </div>
    </div>
  );
}

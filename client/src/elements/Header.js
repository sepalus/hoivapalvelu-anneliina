import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content-wrapper">
        <img
          className="header-image"
          src="./assets/logos/hoivapalvelu-anneliina.png"
          alt=""
        />
      </div>
    </div>
  );
}

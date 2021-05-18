import React from "react";
import "./Banner.scss";
import Button from "../components/Button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content-wrapper">
        <div className="banner-tagline">
          <h3>
            Meiltä saat kaikki kotona asumista tukevat palvelut vaivattomasti
            saman katon alta
          </h3>
          <Button text="Tutustu palveluihimme"></Button>
        </div>
      </div>
      <img
        className="banner-image"
        src="./assets/images/home-banner-wide.jpg"
        alt=""
      />
    </div>
  );
}

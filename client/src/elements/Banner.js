import React from "react";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-tagline">
        <h4>
          Meiltä saat kaikki kotona asumista tukevat palvelut vaivattomasti
          saman katon alta
        </h4>
        <button>Tutustu palveluihimme</button>
      </div>
      <img className="banner-image" src="./assets/home-banner.jpeg" alt="" />
    </div>
  );
}

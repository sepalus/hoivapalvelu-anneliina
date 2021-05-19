import React from "react";
import "./Banner.scss";
import Button from "../components/Button";

export default function Banner({ imageFileName, text, buttonText }) {
  return (
    <div className="banner">
      <div className="banner-content-wrapper">
        <div className="banner-tagline">
          <h3>{text}</h3>
          <Button text={buttonText}></Button>
        </div>
      </div>
      <div className="banner-image-wrapper">
        <img
          className="banner-image"
          src={`./assets/images/${imageFileName}`}
          alt=""
        />
      </div>
    </div>
  );
}

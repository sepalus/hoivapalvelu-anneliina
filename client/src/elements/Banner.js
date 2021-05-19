import React from "react";
import classNames from "classnames";
import "./Banner.scss";
import Button from "../components/Button";

export default function Banner({
  imageFileName,
  title,
  text,
  sloganText,
  buttonText,
  hasOverlay,
}) {
  return (
    <div className="banner">
      <div className="banner-content-wrapper">
        <div
          className={classNames("banner-tagline", {
            "banner-tagline-background-overlay": hasOverlay,
          })}
        >
          {title && <h1>{title}</h1>}
          {sloganText && <h3>{sloganText}</h3>}
          {text && <p>{text}</p>}
          {buttonText && <Button text={buttonText}></Button>}
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

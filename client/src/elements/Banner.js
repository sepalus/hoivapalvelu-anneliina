import React from "react";
import classNames from "classnames";
import "./Banner.scss";
import Button from "../components/Button";

export default function Banner({
  className,
  imageFileName,
  title,
  text,
  sloganText,
  buttonText,
  backgroundColor,
  overlay,
}) {
  const hasOverlay = !!overlay;
  const overlayColor = overlay && overlay.overlayColor;
  const overlayReverse = overlay && overlay.overlayReverse;

  return (
    <div className={classNames("banner", { [`${className}`]: className })}>
      <div className="banner-content-wrapper">
        <div
          className={classNames("banner-tagline", {
            "banner-tagline-background-overlay": hasOverlay,
            "banner-tagline-background-overlay-reverse": overlayReverse,
            [`background-${backgroundColor}`]: backgroundColor,
            "background-medium-transparent": !overlayColor,
            [`background-medium-${backgroundColor}`]: overlayColor,
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

import React from "react";
import classNames from "classnames";
import "./Banner.scss";
import LinkButton from "../components/LinkButton";

export default function Banner({
  className,
  imageFileName,
  title,
  text,
  sloganText,
  buttonText,
  backgroundColor,
  overlay,
  overlayWhite,
}) {
  const hasOverlay = !!overlay;
  const overlayColor = overlay && overlay.overlayColor;
  const overlayReverse = overlay && overlay.overlayReverse;
  const overlayWhiter = overlay && overlay.overlayWhiter;

  return (
    <div className={classNames("banner", { [`${className}`]: className })}>
      <div className="banner-image-wrapper">
        <img
          className="banner-image"
          src={`./assets/images/${imageFileName}`}
          alt=""
        />
      </div>
      <div className="banner-content-wrapper">
        <div
          className={classNames("banner-tagline", {
            "banner-tagline-background-overlay": hasOverlay,
            "banner-tagline-background-overlay-reverse": overlayReverse,
            "banner-tagline-background-overlay-whiter": overlayWhiter,
            [`background-${backgroundColor}`]: backgroundColor,
            "background-medium-transparent": !overlayColor,
            [`background-medium-${backgroundColor}`]: overlayColor,
          })}
        >
          <div className="banner-tagline-content-wrapper">
            {title && <h1>{title}</h1>}
            {sloganText && <h3 className="text-weight-light">{sloganText}</h3>}
            {text && <p>{text}</p>}
            {buttonText && (
              <LinkButton
                text={buttonText}
                className="action-button-wide"
                linkPath="/palvelut"
              ></LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

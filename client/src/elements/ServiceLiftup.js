import React from "react";
import classNames from "classnames";
import "./ServiceLiftup.scss";

export default function InfoCard({
  isReverse,
  title,
  description,
  textElement,
  imageFileName,
  backgroundColorMedium,
}) {
  return (
    <div
      className={classNames("service-liftup", {
        "service-liftup-reverse": isReverse,
      })}
    >
      <div className="service-liftup-content">
        <div className="service-liftup-content-upper">
          <div
            className={classNames("service-liftup-color", {
              [`background-${backgroundColorMedium}`]: backgroundColorMedium,
            })}
          ></div>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className="service-liftup-content-lower">{textElement}</div>
      </div>
      <div className="service-liftup-image-wrapper">
        <img
          className="service-liftup-image"
          src={`./assets/images/${imageFileName}`}
          alt=""
        />
      </div>
    </div>
  );
}

import React from "react";
import classNames from "classnames";
import "./ServiceHeaderBlock.scss";

export default function ServiceHeaderBlock({
  iconFileName,
  logoFileName,
  sloganText,
}) {
  return (
    <div className="service-header-block">
      <div className="service-header-block-content-wrapper">
        <img
          className="service-header-block-logo"
          src={`./assets/icons/${iconFileName}`}
          alt=""
        />
        <div className="service-header-block-title-wrapper">
          <img
            className="service-header-block-title-image"
            src={`./assets/logos/${logoFileName}`}
            alt=""
          />
          <p className="text-small service-header-block-title text-weight-medium">
            {sloganText}
          </p>
        </div>
      </div>
    </div>
  );
}

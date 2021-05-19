import React from "react";
import classNames from "classnames";
import "./InfoCard.scss";
import Button from "../components/Button";

export default function InfoCard({
  iconFileName,
  logoFileName,
  text,
  className,
}) {
  console.log("className ", className);
  return (
    <Button
      className={classNames("info-card", { [`${className}`]: className })}
    >
      <div className="info-card-icon-wrapper">
        <img
          className="info-card-icon"
          src={`./assets/icons/${iconFileName}`}
          alt=""
        />
      </div>
      {logoFileName ? (
        <img
          className="info-card-logo"
          src={`./assets/logos/${logoFileName}`}
          alt=""
        />
      ) : (
        <div className="info-card-text">
          <p className="text-small text-semibold">{text}</p>
        </div>
      )}
    </Button>
  );
}

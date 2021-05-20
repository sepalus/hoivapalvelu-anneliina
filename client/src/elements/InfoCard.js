import React from "react";
import classNames from "classnames";
import "./InfoCard.scss";
import "./InfoCardValue.scss";
import Button from "../components/Button";

export default function InfoCard({
  iconFileName,
  logoFileName,
  text,
  className,
  isCardActive,
  isCardDisactive,
  setCardToActive,
  id,
}) {
  return (
    <div id={id}>
      <Button
        className={classNames("info-card", {
          "info-card-active": isCardActive,
          "info-card-disactive": isCardDisactive,
          [`${className}`]: className,
        })}
        onClick={setCardToActive}
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
    </div>
  );
}

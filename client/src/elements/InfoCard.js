import React from "react";
import "./InfoCard.scss";
import Button from "../components/Button";

export default function InfoCard({ iconFileName, logoFileName }) {
  return (
    <Button className="info-card">
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
        <div className="info-card-text"></div>
      )}
    </Button>
  );
}

import React from "react";
import "./InfoCardContainer.scss";

export default function InfoCardContainer({ title, children }) {
  return (
    <div className="info-card-container">
      <h2>{title}</h2>
      <div className="info-card-wrapper">{children}</div>
    </div>
  );
}

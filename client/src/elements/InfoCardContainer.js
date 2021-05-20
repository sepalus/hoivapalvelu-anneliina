import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import Button from "../components/Button";

export default function InfoCardContainer({
  title,
  children,
  backgroundColor,
  className,
  expanderElement,
}) {
  return (
    <div
      className={classNames("info-card-container", {
        [`${className}`]: className,
        [`background-${backgroundColor}`]: backgroundColor,
      })}
    >
      <div className="info-card-container-content-wrapper">
        <h2>{title}</h2>
        <div className="info-card-container-card-wrapper">
          <Button className="info-card-container-button">
            <span class="material-icons-outlined">arrow_back_ios</span>
          </Button>
          <div className="info-card-container-cards">{children}</div>
          <Button className="info-card-container-button">
            <span class="material-icons-outlined">arrow_forward_ios</span>
          </Button>
        </div>
        {expanderElement && (
          <div className="info-card-container-expander">
            <h3>{expanderElement.expandedTitle}</h3>
            <p>{expanderElement.expandedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

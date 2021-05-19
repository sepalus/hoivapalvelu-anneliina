import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";

export default function InfoCardContainer({
  title,
  children,
  backgroundColor,
  className,
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
        <div className="info-card-wrapper">{children}</div>
      </div>
    </div>
  );
}

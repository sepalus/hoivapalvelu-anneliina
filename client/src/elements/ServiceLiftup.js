import React from "react";
import classNames from "classnames";
import "./ServiceLiftup.scss";

export default function InfoCard({
  isReverse,
  title,
  description,
  textElement,
  serviceListTitle,
  serviceList,
  imageFileName,
  color,
  backgroundColor,
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
              [`background-${backgroundColor}`]: backgroundColor,
            })}
          ></div>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className="service-liftup-content-lower">
          {textElement}
          <div
            className={classNames("service-liftup-service-list-container", {
              [`color-${color}`]: color,
            })}
          >
            <p className="text-medium text-weight-bold">{serviceListTitle}</p>
            {serviceList &&
              serviceList.map((serviceListItem, index) => (
                <span className="text-small">
                  {serviceListItem}
                  {index === serviceList.length - 2
                    ? " ja "
                    : index < serviceList.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
          </div>
        </div>
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

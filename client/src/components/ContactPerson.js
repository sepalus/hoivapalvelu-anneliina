import React from "react";
import "./ContactPerson.scss";
import classNames from "classnames";
export default function ContactPerson({
  className,
  imageFileName,
  name,
  jobTitle,
  phone,
  email,
}) {
  return (
    <div
      className={classNames("contact-card-item", {
        [`${className}`]: className,
      })}
    >
      {imageFileName && (
        <div className="contact-card-item-image-wrapper">
          <img
            className="contact-card-item-image"
            src={`./assets/images/${imageFileName}`}
            alt=""
          />
        </div>
      )}
      <div className="contact-card-item-information">
        <h4 className="contact-card-item-information-title text-weight-medium">
          {name}
        </h4>
        <div className="contact-card-item-information-items">
          <p>{jobTitle}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

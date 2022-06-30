import React from "react";
import "./ContactPerson.scss";
import classNames from "classnames";
export default function ContactPerson({
  className,
  imageFileName,
  name,
  jobTitle,
  jobTitleElement,
  phone,
  email,
  emailElement,
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
          {jobTitle ? (
            <p>{jobTitle}</p>
          ) : jobTitleElement ? (
            jobTitleElement
          ) : (
            <></>
          )}
          <p>{phone}</p>
          {email ? <p>{email}</p> : emailElement ? emailElement : <></>}
        </div>
      </div>
    </div>
  );
}

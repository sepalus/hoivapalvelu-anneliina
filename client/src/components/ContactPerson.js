import React from "react";
import "./ContactPerson.scss";
export default function ContactPerson({
  imageFileName,
  name,
  jobTitle,
  phone,
  email,
}) {
  return (
    <div className="contact-person">
      <div className="contact-person-image-wrapper">
        <img
          className="contact-person-image"
          src={`./assets/images/${imageFileName}`}
          alt=""
        />
      </div>
      <div className="contact-person-information">
        <h4 className="contact-person-information-title text-weight-medium">
          {name}
        </h4>
        <div className="contact-person-information-items">
          <p>{jobTitle}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

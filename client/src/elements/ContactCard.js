import React from "react";
import classNames from "classnames";
import "./ContactCard.scss";

export default function ContactCard({ iconName, title, children, className }) {
  return (
    <div
      className={classNames("contact-card", { [`${className}`]: className })}
    >
      <div className="contact-card-icon-wrapper">
        <span className="contact-card-icon material-icons-outlined">
          {iconName}
        </span>
      </div>
      <h3>{title}</h3>
      <div className="contact-card-additional-items-wrapper">{children}</div>
    </div>
  );
}

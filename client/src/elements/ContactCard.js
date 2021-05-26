import React from "react";
import classNames from "classnames";
import "./ContactCard.scss";

export default function ContactCard({ iconName, title, children, className }) {
  return (
    <div
      className={classNames("contact-card", { [`${className}`]: className })}
    >
      <div className="contact-header-wrapper">
        <span className="contact-card-icon material-icons-outlined">
          {iconName}
        </span>
        <h2 className="text-semibold">{title}</h2>
      </div>
      <div className="contact-card-content-wrapper">{children}</div>
    </div>
  );
}

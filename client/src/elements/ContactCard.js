import React from "react";
import classNames from "classnames";
import "./ContactCard.scss";

export default function ContactCard({ iconName, title, children, className }) {
  return (
    <div
      className={classNames("contact-card", { [`${className}`]: className })}
    >
      <div className="contact-header-wrapper">
        <h2 className="contact-header text-weight-medium">
          <span className="contact-card-header-icon material-icons-outlined">
            {iconName}
          </span>
          {title}
        </h2>
      </div>
      <div className="contact-card-content-wrapper">{children}</div>
    </div>
  );
}

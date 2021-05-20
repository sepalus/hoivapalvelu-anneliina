import React from "react";
import classNames from "classnames";
import "./Button.scss";

export default function Button({
  children,
  imageUrl,
  text,
  className,
  onClick,
  noHoverEffect,
}) {
  return (
    <>
      {children ? (
        <button
          className={classNames("action-button action-button-with-content", {
            [`${className}`]: className,
            "action-button-with-hover-effect": !noHoverEffect,
          })}
          onClick={onClick}
        >
          {children}
        </button>
      ) : imageUrl ? (
        <button
          className={classNames("action-button action-button-with-image", {
            [`${className}`]: className,
            "action-button-with-hover-effect": !noHoverEffect,
          })}
        >
          <img src={imageUrl} alt="" />
        </button>
      ) : (
        <button
          className={classNames("action-button", {
            [`${className}`]: className,
            "action-button-with-hover-effect": !noHoverEffect,
          })}
        >
          {text}
        </button>
      )}
    </>
  );
}

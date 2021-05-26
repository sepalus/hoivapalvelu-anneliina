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
  const hasChildren = !!(children && children[0]);
  return (
    <>
      {hasChildren && text ? (
        <button
          className={classNames(
            "action-button action-button-with-icon text-weight-semibold",
            {
              [`${className}`]: className,
              "action-button-with-hover-effect": !noHoverEffect,
            }
          )}
          onClick={onClick}
        >
          <p>{text}</p>
          {children}
        </button>
      ) : hasChildren ? (
        <button
          className={classNames(
            "action-button action-button-with-content text-weight-semibold",
            {
              [`${className}`]: className,
              "action-button-with-hover-effect": !noHoverEffect,
            }
          )}
          onClick={onClick}
        >
          {children}
        </button>
      ) : imageUrl ? (
        <button
          className={classNames(
            "action-button action-button-with-image text-weight-semibold",
            {
              [`${className}`]: className,
              "action-button-with-hover-effect": !noHoverEffect,
            }
          )}
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
          <p>{text}</p>
        </button>
      )}
    </>
  );
}

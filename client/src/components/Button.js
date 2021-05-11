import React from "react";
import "./Button.scss";

export default function Button({ children, imageUrl, text, className }) {
  return (
    <>
      {children ? (
        <button
          className={`action-button action-button-with-content ${className}`}
        >
          {children}
        </button>
      ) : imageUrl ? (
        <button
          className={`action-button action-button-with-image ${className}`}
        >
          <img src={imageUrl} alt="" />
        </button>
      ) : (
        <button className={`action-button ${className}`}>{text}</button>
      )}
    </>
  );
}

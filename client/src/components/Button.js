import React from "react";
import "./Button.scss";

export default function Button({ imageUrl, text, className }) {
  return (
    <>
      {imageUrl ? (
        <button className={`action-button action-button-image ${className}`}>
          <img src={imageUrl} alt="" />
        </button>
      ) : (
        <button className={`action-button ${className}`}>{text}</button>
      )}
    </>
  );
}

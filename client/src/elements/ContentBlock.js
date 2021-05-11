import React from "react";
import "./ContentBlock.scss";

export default function ContentBlock({
  imageFileName,
  title,
  text,
  buttonImage,
  buttonText,
}) {
  return (
    <div
      className={
        imageFileName
          ? "content-block content-block-with-image"
          : "content-block"
      }
    >
      {imageFileName && (
        <img
          className="content-block-image"
          src={`./assets/images/${imageFileName}`}
          alt=""
        />
      )}
      <div className="content-block-information">
        <h2 className="content-block-title">{title}</h2>
        <p className="content-block-text">{text}</p>
        {buttonImage ? (
          <img
            className="content-block-button content-block-image-button"
            src={`./assets/logos/${buttonImage}`}
            alt=""
          />
        ) : (
          <button className="content-block-button">{buttonText}</button>
        )}
      </div>
    </div>
  );
}

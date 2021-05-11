import React from "react";
import "./ContentBlock.scss";
import Button from "../components/Button";

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
          : "content-block content-block-without-image"
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
        <Button
          imageUrl={buttonImage ? `./assets/logos/${buttonImage}` : null}
          text={buttonText}
          className="content-block-button"
        ></Button>
      </div>
    </div>
  );
}

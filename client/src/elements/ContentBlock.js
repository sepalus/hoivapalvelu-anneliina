import React from "react";
import classNames from "classnames";
import "./ContentBlock.scss";
import Button from "../components/Button";

export default function ContentBlock({
  imageFileName,
  title,
  text,
  buttonImage,
  buttonText,
  backgroundColor,
  imagePosition,
}) {
  return (
    <div
      className={classNames("content-block", {
        "content-block-with-image": imageFileName,
        "content-block-without-image": !imageFileName,
        [`background-${backgroundColor}`]: true,
      })}
    >
      {imageFileName && (
        <div className="content-block-image-wrapper">
          <img
            className="content-block-image"
            src={`./assets/images/${imageFileName}`}
            alt=""
            style={{ objectPosition: imagePosition }}
          />
        </div>
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

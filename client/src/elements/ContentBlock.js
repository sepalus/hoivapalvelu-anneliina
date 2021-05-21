import React from "react";
import classNames from "classnames";
import "./ContentBlock.scss";
import Button from "../components/Button";
import Expander from "../components/Expander";

export default function ContentBlock(props) {
  const {
    isReverse,
    imageFileName,
    title,
    keywords,
    text,
    buttonIcon,
    buttonImage,
    buttonText,
    backgroundColor,
    backgroundColorMedium,
    imagePosition,
    expanderElement,
    expanderIsOpen,
    expanderButtonText,
    setExpanderIsOpen,
    expanderClassName,
  } = props;

  return (
    <div
      className={classNames("content-block", {
        "content-block-with-image": imageFileName,
        "content-block-without-image": !imageFileName,
        "content-block-reverse": isReverse,
        [`background-${backgroundColor}`]: backgroundColor,
        [`background-medium-${backgroundColorMedium}`]: backgroundColorMedium,
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
        {keywords && (
          <p className="content-block-keywords text-small text-bold">
            {keywords}
          </p>
        )}
        <p className="content-block-text">{text}</p>
        {(buttonIcon || buttonImage || buttonText) && (
          <Button
            imageUrl={buttonImage ? `./assets/logos/${buttonImage}` : null}
            text={buttonText}
            className="content-block-button"
          >
            {buttonIcon && <span className="material-icons">{buttonIcon}</span>}
          </Button>
        )}
        {expanderElement && (
          <>
            <Button
              text={expanderButtonText}
              className="content-block-button"
              onClick={() => setExpanderIsOpen(!expanderIsOpen)}
            >
              <span className="material-icons">
                {expanderIsOpen ? "expand_less" : "expand_more"}
              </span>
            </Button>
            <Expander
              list={expanderElement.list}
              isOpen={expanderIsOpen}
              classNames={expanderClassName}
            ></Expander>
          </>
        )}
      </div>
    </div>
  );
}

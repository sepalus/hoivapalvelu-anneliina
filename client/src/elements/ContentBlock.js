import React from "react";
import classNames from "classnames";
import "./ContentBlock.scss";
import LinkButton from "../components/LinkButton";

export default function ContentBlock(props) {
  const {
    className,
    isReverse,
    imageFileName,
    title,
    keywords,
    text,
    textElement,
    linkPath,
    externalLinkPath,
    buttonIcon,
    buttonFrontIcon,
    buttonImage,
    buttonText,
    buttonClassName,
    buttonOnClick,
    buttonNoHoverEffect,
    backgroundColor,
    backgroundColorMedium,
    backgroundColorSecondaryMedium,
    imagePosition,
    children,
    outsideChildren,
  } = props;

  return (
    <>
      <div
        className={classNames("content-block", {
          [`${className}`]: className,
          "content-block-with-image": imageFileName,
          "content-block-without-image": !imageFileName,
          "content-block-direction-default": !isReverse,
          "content-block-direction-reverse": isReverse,
          [`background-${backgroundColor}`]: backgroundColor,
          [`background-medium-${backgroundColorMedium}`]: backgroundColorMedium,
        })}
      >
        <div className="content-block-main-content">
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
            <div className="content-block-information-header">
              <h2 className="content-block-title">{title}</h2>
              {keywords && (
                <p className="content-block-keywords text-small text-bold">
                  {keywords}
                </p>
              )}
            </div>
            <div
              className={classNames("content-block-information-content", {
                [`background-medium-${backgroundColorSecondaryMedium}`]:
                  backgroundColorSecondaryMedium,
              })}
            >
              {text ? (
                <p className="content-block-text">{text}</p>
              ) : textElement ? (
                <div className="content-block-text content-block-text-container">
                  {textElement}
                </div>
              ) : (
                <></>
              )}
              {(buttonIcon || buttonImage || buttonText) && (
                <LinkButton
                  imageUrl={
                    buttonImage ? `./assets/logos/${buttonImage}` : null
                  }
                  text={buttonText}
                  className={classNames("content-block-button", {
                    [`${buttonClassName}`]: buttonClassName,
                  })}
                  onClick={buttonOnClick}
                  linkPath={linkPath}
                  externalLinkPath={externalLinkPath}
                  noHoverEffect={buttonNoHoverEffect}
                >
                  {buttonIcon && (
                    <span className="material-icons-outlined">
                      {buttonIcon}
                    </span>
                  )}
                  {buttonFrontIcon && (
                    <span className="material-icons">{buttonFrontIcon}</span>
                  )}
                </LinkButton>
              )}
            </div>
          </div>
        </div>
        {children && (
          <div
            className={classNames("content-block-additional-content", {
              [`background-medium-${backgroundColorSecondaryMedium}`]:
                backgroundColorSecondaryMedium,
            })}
          >
            {children}
          </div>
        )}
      </div>
      {outsideChildren}
    </>
  );
}

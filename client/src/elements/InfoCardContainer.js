import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import Button from "../components/Button";

export default function InfoCardContainer({
  title,
  children,
  backgroundColor,
  className,
  expanderElement,
}) {
  const [previousScrollXOffset, setPreviousScrollXOffset] = useState(0);
  const [showBackButton, setShowBackButton] = useState(true);
  const [showForwardButton, setShowForwardButton] = useState(true);
  const errorMargin = 10;
  let infoCardContainerCardsElement;

  useEffect(() => {
    infoCardContainerCardsElement = document.getElementById(
      "info-card-container-cards"
    );
    const firstInfoCardElement = document.getElementById("info-card-0");
    const lastInfoCardElement = document.getElementById("info-card-4");
    if (
      !infoCardContainerCardsElement ||
      !firstInfoCardElement ||
      !lastInfoCardElement
    )
      return;

    const {
      left: wrapperLeft,
      width: wrapperWidth,
    } = infoCardContainerCardsElement.getBoundingClientRect();
    const {
      left: lastCardLeft,
      width: lastCardWidth,
    } = lastInfoCardElement.getBoundingClientRect();
    const {
      left: firstCardLeft,
      width: firstCardWidth,
    } = firstInfoCardElement.getBoundingClientRect();

    const lastCardIsVisible =
      lastCardLeft + lastCardWidth < wrapperLeft + wrapperWidth + errorMargin;
    const firstCardIsVisible = firstCardLeft > wrapperLeft - errorMargin;

    const updateButtonVisibility = () => {
      const currentScrollXOffset = infoCardContainerCardsElement.scrollLeft;
      setShowBackButton(!firstCardIsVisible);
      setShowForwardButton(!lastCardIsVisible);
      setPreviousScrollXOffset(currentScrollXOffset);
    };

    infoCardContainerCardsElement.addEventListener(
      "scroll",
      updateButtonVisibility
    );
    return () =>
      infoCardContainerCardsElement.removeEventListener(
        "scroll",
        updateButtonVisibility
      );
  }, [previousScrollXOffset]);

  const scrollInDirection = (direction) => {
    infoCardContainerCardsElement.scrollLeft += direction * 95;
  };

  return (
    <div
      className={classNames("info-card-container", {
        [`${className}`]: className,
        [`background-${backgroundColor}`]: backgroundColor,
      })}
    >
      <div className="info-card-container-content-wrapper">
        <h2>{title}</h2>
        <div className="info-card-container-card-wrapper">
          <Button
            className={classNames("info-card-container-button", {
              "hide-element": !showBackButton,
            })}
            onClick={() => scrollInDirection(-1)}
          >
            <span class="material-icons-outlined">arrow_back_ios</span>
          </Button>
          <div
            id="info-card-container-cards"
            className="info-card-container-cards"
          >
            {children}
          </div>
          <Button
            className={classNames("info-card-container-button", {
              "hide-element": !showForwardButton,
            })}
            onClick={() => scrollInDirection(1)}
          >
            <span class="material-icons-outlined">arrow_forward_ios</span>
          </Button>
        </div>
        {expanderElement && (
          <div className="info-card-container-expander">
            <h3>{expanderElement.expandedTitle}</h3>
            <p>{expanderElement.expandedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

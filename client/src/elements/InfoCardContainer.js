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
  infoCardContainerCardsRef,
  infoCardFirstRef,
  infoCardLastRef,
}) {
  const [previousScrollXOffset, setPreviousScrollXOffset] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showForwardButton, setShowForwardButton] = useState(false);
  const errorMargin = 10;

  useEffect(() => {
    if (!infoCardContainerCardsRef || !infoCardFirstRef || !infoCardLastRef)
      return;

    const {
      left: wrapperLeft,
      width: wrapperWidth,
    } = infoCardContainerCardsRef.current.getBoundingClientRect();
    const {
      left: lastCardLeft,
      width: lastCardWidth,
    } = infoCardLastRef.current.getBoundingClientRect();
    const {
      left: firstCardLeft,
    } = infoCardFirstRef.current.getBoundingClientRect();

    const lastCardIsVisible =
      lastCardLeft + lastCardWidth < wrapperLeft + wrapperWidth + errorMargin;
    const firstCardIsVisible = firstCardLeft > wrapperLeft - errorMargin;

    const updateButtonVisibility = () => {
      const currentScrollXOffset = infoCardContainerCardsRef.current.scrollLeft;
      setShowBackButton(!firstCardIsVisible);
      setShowForwardButton(!lastCardIsVisible);
      setPreviousScrollXOffset(currentScrollXOffset);
    };

    infoCardContainerCardsRef.current.addEventListener(
      "scroll",
      updateButtonVisibility
    );
    return () => {
      if (!infoCardContainerCardsRef.current) return;
      return infoCardContainerCardsRef.current.removeEventListener(
        "scroll",
        updateButtonVisibility
      );
    };
  }, [
    previousScrollXOffset,
    infoCardFirstRef,
    infoCardLastRef,
    infoCardContainerCardsRef,
  ]);

  const scrollInDirection = (direction) => {
    infoCardContainerCardsRef.current.scrollLeft += direction * 95;
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
            noHoverEffect
          >
            <span className="material-icons-outlined">arrow_back_ios</span>
          </Button>
          <div
            ref={infoCardContainerCardsRef}
            className="info-card-container-cards"
          >
            {children}
          </div>
          <Button
            className={classNames("info-card-container-button", {
              "hide-element": !showForwardButton,
            })}
            onClick={() => scrollInDirection(1)}
            noHoverEffect
          >
            <span className="material-icons-outlined">arrow_forward_ios</span>
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

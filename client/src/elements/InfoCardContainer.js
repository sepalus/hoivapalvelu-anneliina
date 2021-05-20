import React, { useState, useEffect, useRef } from "react";
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
  const infoCardContainerCardsRef = useRef();
  const [previousScrollXOffset, setPreviousScrollXOffset] = useState(0);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    if (!infoCardContainerCardsRef.current) return;
    const updateButtonVisibility = () => {
      const currentScrollXOffset = infoCardContainerCardsRef.current.scrollLeft;
      setShowBackButton(currentScrollXOffset > 10);
      setPreviousScrollXOffset(currentScrollXOffset);
    };

    infoCardContainerCardsRef.current.addEventListener(
      "scroll",
      updateButtonVisibility
    );
    return () =>
      infoCardContainerCardsRef.current.removeEventListener(
        "scroll",
        updateButtonVisibility
      );
  }, [previousScrollXOffset, infoCardContainerCardsRef]);

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
          >
            <span class="material-icons-outlined">arrow_back_ios</span>
          </Button>
          <div
            ref={infoCardContainerCardsRef}
            className="info-card-container-cards"
          >
            {children}
          </div>
          <Button className="info-card-container-button">
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

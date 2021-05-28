import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Button from "../components/Button";

export default function InfoCardScrollContainer({
  children,
  infoCardContainerCardsRef,
  infoCardFirstRef,
  infoCardLastRef,
}) {
  const [previousScrollXOffset, setPreviousScrollXOffset] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showForwardButton, setShowForwardButton] = useState(false);
  const errorMargin = 10;

  const scrollInDirection = (direction) => {
    infoCardContainerCardsRef.current.scrollLeft += direction * 95;
  };

  useEffect(() => {
    if (!infoCardContainerCardsRef || !infoCardFirstRef || !infoCardLastRef)
      return;

    const { left: wrapperLeft, width: wrapperWidth } =
      infoCardContainerCardsRef.current.getBoundingClientRect();
    const { left: lastCardLeft, width: lastCardWidth } =
      infoCardLastRef.current.getBoundingClientRect();
    const { left: firstCardLeft } =
      infoCardFirstRef.current.getBoundingClientRect();

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

  return (
    <div className="info-card-container-card-wrapper info-card-scroll-container-card-wrapper">
      <Button
        className={classNames("info-card-container-button", {
          "hide-element": !showBackButton,
        })}
        onClick={() => scrollInDirection(-1)}
        noHoverEffect
      >
        <span className="material-icons-outlined">arrow_back_ios</span>
      </Button>
      {children}
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
  );
}

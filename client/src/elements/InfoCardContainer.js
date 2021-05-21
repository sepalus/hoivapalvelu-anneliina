import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import InfoCardScrollContainer from "./InfoCardScrollContainer";

export default function InfoCardContainer({
  title,
  text,
  children,
  backgroundColor,
  className,
  expanderElement,
  hasScrollableInfoCards,
  infoCardContainerCardsRef,
  infoCardFirstRef,
  infoCardLastRef,
}) {
  return (
    <div
      className={classNames("info-card-container", {
        [`${className}`]: className,
        [`background-${backgroundColor}`]: backgroundColor,
      })}
    >
      <div className="info-card-container-content-wrapper">
        <div className="info-card-text-wrapper">
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        {hasScrollableInfoCards ? (
          <InfoCardScrollContainer
            infoCardContainerCardsRef={infoCardContainerCardsRef}
            infoCardFirstRef={infoCardFirstRef}
            infoCardLastRef={infoCardLastRef}
          >
            <div
              ref={infoCardContainerCardsRef}
              className="info-card-container-cards"
            >
              {children}
            </div>
          </InfoCardScrollContainer>
        ) : (
          <div
            ref={infoCardContainerCardsRef}
            className="info-card-container-cards"
          >
            {children}
          </div>
        )}
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

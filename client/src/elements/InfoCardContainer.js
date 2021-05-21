import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import InfoCardScrollContainer from "./InfoCardScrollContainer";
import Expander from "../components/Expander";

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
          <Expander
            title={expanderElement.expandedTitle}
            text={expanderElement.expandedText}
            isOpen={true}
          ></Expander>
        )}
      </div>
    </div>
  );
}

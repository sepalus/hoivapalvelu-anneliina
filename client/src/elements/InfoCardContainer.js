import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import InfoCardScrollContainer from "./InfoCardScrollContainer";
import Expander from "../components/Expander";

export default function InfoCardContainer({
  title,
  text,
  lowerLevelTitle,
  children,
  backgroundColor,
  className,
  expanderElement,
  expanderClassName,
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
          {lowerLevelTitle ? <h3>{title}</h3> : <h2>{title}</h2>}
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
            listTitle={expanderElement.expandedListTitle}
            listTitleIcon={expanderElement.expandedListTitleIcon}
            list={expanderElement.expandedList}
            isOpen={true}
            className={expanderClassName}
          ></Expander>
        )}
      </div>
    </div>
  );
}

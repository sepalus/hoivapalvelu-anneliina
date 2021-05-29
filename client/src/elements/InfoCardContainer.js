import React from "react";
import classNames from "classnames";
import "./InfoCardContainer.scss";
import InfoCardScrollContainer from "./InfoCardScrollContainer";
import Expander from "../components/Expander";

export default function InfoCardContainer({
  id,
  className,
  titleElement,
  text,
  postTextElement,
  children,
  backgroundColor,
  expanderElement,
  expanderClassName,
  expanderCloseButtonElement,
  hasScrollableInfoCards,
  infoCardContainerCardsRef,
  infoCardFirstRef,
  infoCardLastRef,
}) {
  return (
    <div
      id={id}
      className={classNames("info-card-container", {
        [`${className}`]: className,
        [`background-${backgroundColor}`]: backgroundColor,
      })}
    >
      <div className="info-card-container-content-wrapper">
        <div className="info-card-text-wrapper">
          {titleElement}
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
        {postTextElement && (
          <div className="info-card-post-text-wrapper">{postTextElement}</div>
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
            closeButtonElement={expanderCloseButtonElement}
          ></Expander>
        )}
      </div>
    </div>
  );
}

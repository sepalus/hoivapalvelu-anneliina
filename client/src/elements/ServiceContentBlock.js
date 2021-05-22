import React, { useState } from "react";
import classNames from "classnames";
//import "./ServiceContentBlock.scss";
import ContentBlock from "./ContentBlock";
import Button from "../components/Button";
import Expander from "../components/Expander";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";

export default function ServiceContentBlock(props) {
  const {
    expanderElement,
    expanderButtonText,
    expanderClassName,
    infoCardList,
    infoCardServiceContainerCardsRef,
    infoCardServiceFirstRef,
    infoCardServiceLastRef,
    activeInfoCardServiceIndex,
    setActiveInfoCardServiceIndex,
  } = props;

  const [expanderIsOpen, setExpanderIsOpen] = useState(false);

  return (
    <ContentBlock
      {...props}
      expanderIsOpen={expanderIsOpen}
      setExpanderIsOpen={setExpanderIsOpen}
      expanderClassName="expander-service-more-information"
    >
      {expanderElement && (
        <>
          <Button
            text={expanderButtonText}
            className={classNames(
              "content-block-button content-block-expander-button",
              {
                "content-block-expander-button-open text-bold": expanderIsOpen,
              }
            )}
            onClick={() => setExpanderIsOpen(!expanderIsOpen)}
            noHoverEffect={expanderIsOpen}
          >
            <span className="material-icons">
              {expanderIsOpen ? "expand_less" : "expand_more"}
            </span>
            {expanderIsOpen && (
              <span class="material-icons-outlined expander-button-open-extra-icon">
                favorite_border
              </span>
            )}
          </Button>
          <Expander
            list={expanderElement.list}
            isOpen={expanderIsOpen}
            className={expanderClassName}
          ></Expander>
        </>
      )}
      {infoCardList && (
        <InfoCardContainer
          title="Kotiavun palvelut"
          backgroundColor="white"
          lowerLevelTitle={true}
          className="info-card-container-value info-card-container-service"
          hasScrollableInfoCards={true}
          expanderElement={infoCardList[activeInfoCardServiceIndex]}
          infoCardContainerCardsRef={infoCardServiceContainerCardsRef}
          infoCardFirstRef={infoCardServiceFirstRef}
          infoCardLastRef={infoCardServiceLastRef}
        >
          {infoCardList.map((infoCard, index) => (
            <InfoCard
              iconFileName={infoCard.iconFileName}
              text={infoCard.text}
              className={infoCard.className}
              isCardActive={activeInfoCardServiceIndex === index}
              isCardDisactive={
                activeInfoCardServiceIndex !== index &&
                activeInfoCardServiceIndex !== -1
              }
              infoCardRef={
                index === 0
                  ? infoCardServiceFirstRef
                  : index === infoCardList.length - 1
                  ? infoCardServiceLastRef
                  : null
              }
              setCardToActive={() => setActiveInfoCardServiceIndex(index)}
              key={`info-card-service-${index}`}
            />
          ))}
        </InfoCardContainer>
      )}
    </ContentBlock>
  );
}

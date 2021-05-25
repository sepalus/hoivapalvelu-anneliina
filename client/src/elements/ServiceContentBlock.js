import React, { useState } from "react";
import classNames from "classnames";
import "./ServiceContentBlock.scss";
import ContentBlock from "./ContentBlock";
import Button from "../components/Button";
import Expander from "../components/Expander";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";

export default function ServiceContentBlock(props) {
  const {
    expanderElement,
    expanderButtonText,
    backgroundExpanderColorMedium,
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
      className="service-content-block"
      buttonIcon={expanderIsOpen ? "expand_less" : "expand_more"}
      buttonFrontIcon={
        expanderIsOpen && (
          <span class="material-icons-outlined expander-button-open-extra-icon">
            favorite_border
          </span>
        )
      }
      buttonText={expanderButtonText}
      buttonClassName={classNames(
        "content-block-button content-block-expander-button",
        {
          "content-block-expander-button-open text-bold": expanderIsOpen,
        }
      )}
      buttonOnClick={() => setExpanderIsOpen(!expanderIsOpen)}
      buttonNoHoverEffect={expanderIsOpen}
    >
      {expanderElement && (
        <>
          <Expander
            list={expanderElement.list}
            isOpen={expanderIsOpen}
            className={classNames(
              "expander-service-more-information background-ultralightgray",
              {
                [`background-medium-${backgroundExpanderColorMedium}`]:
                  backgroundExpanderColorMedium,
              }
            )}
          ></Expander>
        </>
      )}
      {infoCardList && (
        <InfoCardContainer
          title="Kotiavun palvelut"
          backgroundColor="white"
          lowerLevelTitle={true}
          className={classNames(
            "info-card-container-value info-card-container-service",
            {
              "info-card-container-service-expander-open":
                activeInfoCardServiceIndex !== -1,
            }
          )}
          hasScrollableInfoCards={true}
          expanderElement={infoCardList[activeInfoCardServiceIndex]}
          expanderClassName="expander-service-more-information expander-service-info-card-more-information background-medium-white"
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

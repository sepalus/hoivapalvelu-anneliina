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
    noButton,
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
      buttonIcon={
        noButton ? null : expanderIsOpen ? "expand_less" : "expand_more"
      }
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
      outsideChildren={
        expanderElement && (
          <>
            <Expander
              title={expanderElement.expandedTitle}
              text={expanderElement.expandedText}
              listTitle={expanderElement.expandedListTitle}
              listTitleIcon={expanderElement.expandedListTitleIcon}
              list={expanderElement.expandedList}
              isOpen={expanderIsOpen}
              className={classNames(
                "expander-service-more-information background-ultralightgray",
                {
                  [`background-medium-${backgroundExpanderColorMedium}`]:
                    backgroundExpanderColorMedium,
                  "expander-service-info-card-more-information": infoCardList,
                }
              )}
            ></Expander>
          </>
        )
      }
    >
      {infoCardList && (
        <InfoCardContainer
          titleElement={<h3>Kotiavun palvelut</h3>}
          backgroundColor="white"
          className={classNames(
            "info-card-container-value info-card-container-service",
            {
              "info-card-container-service-expander-open":
                activeInfoCardServiceIndex !== -1,
            }
          )}
          hasScrollableInfoCards={true}
          infoCardContainerCardsRef={infoCardServiceContainerCardsRef}
          infoCardFirstRef={infoCardServiceFirstRef}
          infoCardLastRef={infoCardServiceLastRef}
        >
          {infoCardList.map((infoCard, index) => {
            const isCardActive = activeInfoCardServiceIndex === index;
            return (
              <InfoCard
                iconFileName={infoCard.iconFileName}
                textHtml={infoCard.textHtml}
                className={infoCard.className}
                isCardActive={isCardActive}
                isCardDisactive={
                  !isCardActive && activeInfoCardServiceIndex !== -1
                }
                infoCardRef={
                  index === 0
                    ? infoCardServiceFirstRef
                    : index === infoCardList.length - 1
                    ? infoCardServiceLastRef
                    : null
                }
                onClick={() => {
                  setExpanderIsOpen(!isCardActive);
                  setActiveInfoCardServiceIndex(isCardActive ? -1 : index);
                }}
                key={`info-card-service-${index}`}
              />
            );
          })}
        </InfoCardContainer>
      )}
    </ContentBlock>
  );
}

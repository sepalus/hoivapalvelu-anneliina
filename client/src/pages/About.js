import React from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";

import ScrollArea from "../components/ScrollArea";

export default function About() {
  return (
    <div className="about">
      <ScrollArea>
        <Banner
          imageFileName="about-us.jpeg"
          title="Tietoa Meistä"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          hasOverlay={true}
        />
        <InfoCardContainer
          title="Anneliinan arvot"
          backgroundColor="beige"
          className="info-card-container-about"
        >
          <InfoCard
            iconFileName="value-1.png"
            text="Ykislöllisyys"
            className="info-card-about"
          />
          <InfoCard
            iconFileName="value-2.png"
            text="Inhimillisyys"
            className="info-card-about"
          />
          <InfoCard
            iconFileName="value-3.png"
            text="Luotettavuus"
            className="info-card-about"
          />
          <InfoCard
            iconFileName="value-1.png"
            text="Arvostus"
            className="info-card-about"
          />
          <InfoCard
            iconFileName="value-2.png"
            text="Ammattitaito"
            className="info-card-about"
          />
          <InfoCard className="info-card-about invisible" />
        </InfoCardContainer>
        <ContentBlockContainer>
          <ContentBlock />
        </ContentBlockContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

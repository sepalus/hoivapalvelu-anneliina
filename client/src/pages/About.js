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
        <Banner />
        <InfoCardContainer title="Lorem ipsum dolor sit amet">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </InfoCardContainer>
        <ContentBlockContainer>
          <ContentBlock />
        </ContentBlockContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

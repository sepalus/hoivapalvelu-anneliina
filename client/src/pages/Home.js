import React from "react";
import Header from "../elements/Header";
import Banner from "../elements/Banner";
import Slogan from "../elements/Slogan";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
/**import ContentArea from "./elements/ContentArea";
import ContentBlock from "./elements/ContentBlock";**/

export default function Home() {
  return (
    <div>
      <div className="full-height">
        <Header />
        <Banner />
      </div>
      <Slogan />
      <InfoCardContainer title="Yksilöllistä hoivapalvelua kaikille sitä tarvitseville">
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-kotisairaanhoito.png"
        />
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-koti.png"
        />{" "}
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-paivatoiminta.png"
        />
      </InfoCardContainer>
    </div>
  );
}

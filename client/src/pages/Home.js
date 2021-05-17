import React from "react";
import Banner from "../elements/Banner";
import Slogan from "../elements/Slogan";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Slogan />
      <InfoCardContainer title="Yksilöllistä hoivapalvelua kaikille sitä tarvitseville">
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-kotisairaanhoito.png"
        />
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-koti.png"
        />
        <InfoCard
          iconFileName="anneliinan-kotisairaanhoito.png"
          logoFileName="anneliinan-paivatoiminta.png"
        />
      </InfoCardContainer>
      <ContentBlockContainer>
        <ContentBlock
          imageFileName="about-us.jpeg"
          title="Jokainen meistä on yksilö"
          text="Jokainen meistä on yksilö. Meillä on kaikilla oma tarinamme, omat kokemuksemme, omat ilomme ja surumme ja ennen kaikkea oma tapa elää. Me Anneliinahoivassa pidämme ihmisiä ihmisinä, emme ikänä tai sairautena. Yksilöllinen sydämestä lähtevä hoivamme tarkoittaa sitä, että asiakasta kohdellaan ainutlaatuisena ihmisenä, jolla on paljon annettavaa ja oikeus hyvään elämään."
          buttonText="Lue lisää yrityksemme arvoista"
          backgroundColor="beige"
        />
        <ContentBlock
          title="Voisitko sinä tai läheisesi hyötyä palvelustamme?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttonText="Jätä yhteydenottopyyntö"
          backgroundColor="lightblue"
        />
        <ContentBlock
          imageFileName="home-trust.jpeg"
          title="Olemme luotettava kumppanisi"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttonImage="luotettava-kumppani.png"
          backgroundColor="pink"
        />
        <ContentBlock
          title="Oletko sinä seuraava Anneliinalainen?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          buttonText="Ota yhteyttä"
          backgroundColor="beige"
        />
      </ContentBlockContainer>
    </div>
  );
}

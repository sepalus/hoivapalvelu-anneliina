import React from "react";
import Banner from "../elements/Banner";
import Slogan from "../elements/Slogan";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";
import SnapScrollArea from "../components/SnapScrollArea";
import ScrollArea from "../components/ScrollArea";

export default function Home({ setServicesSnapScrollEnabled }) {
  const scrollAreaId = "scroll-area-home";
  const snapScrollAreaId = "snap-scroll-area-home";

  return (
    <div className="home">
      <SnapScrollArea id={snapScrollAreaId}>
        <Banner
          className="banner-home"
          imageFileName="home-banner-wide.jpg"
          backgroundColor="ultralightbeige"
          sloganText="Meiltä saat kaikki kotona asumista tukevat palvelut vaivattomasti
        saman katon alta"
          buttonText="Tutustu palveluihimme"
        />
        <ScrollArea
          scrollAreaId={scrollAreaId}
          snapScrollAreaId={snapScrollAreaId}
        >
          <Slogan />
          <InfoCardContainer
            titleElement={
              <h2>Yksilöllistä hoivapalvelua kaikille sitä tarvitseville</h2>
            }
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            backgroundColor="lightblue"
          >
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-kotisairaanhoito.png"
              linkPath="/palvelut#kotisairaanhoito"
              onClick={() => setServicesSnapScrollEnabled(false)}
            />
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-koti.png"
              linkPath="/palvelut#kotihoito"
              onClick={() => setServicesSnapScrollEnabled(false)}
            />
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-paivatoiminta.png"
              linkPath="/palvelut#paivatoiminta"
              onClick={() => setServicesSnapScrollEnabled(false)}
            />
          </InfoCardContainer>
          <ContentBlockContainer backgroundColor="lightbeige">
            <ContentBlock
              isReverse={true}
              imageFileName="about-us.jpeg"
              title="Jokainen meistä on yksilö"
              text="Jokainen meistä on yksilö. Meillä on kaikilla oma tarinamme, omat kokemuksemme, omat ilomme ja surumme ja ennen kaikkea oma tapa elää. Me Anneliinahoivassa pidämme ihmisiä ihmisinä, emme ikänä tai sairautena. Yksilöllinen sydämestä lähtevä hoivamme tarkoittaa sitä, että asiakasta kohdellaan ainutlaatuisena ihmisenä, jolla on paljon annettavaa ja oikeus hyvään elämään."
              linkPath="/meista#arvot"
              buttonText="Lue lisää arvoistamme"
              backgroundColor="white"
              backgroundColorMedium="lightbeige"
              imagePosition="100% 0"
            />
            <ContentBlock
              title="Voisitko sinä tai läheisesi hyötyä palvelustamme?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              linkPath="/yhteystiedot"
              buttonText="Jätä yhteydenottopyyntö"
              backgroundColorMedium="ultralightblue"
            />
            <ContentBlock
              imageFileName="home-trust.jpeg"
              title="Olemme luotettava kumppanisi"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              buttonImage="luotettava-kumppani.png"
              backgroundColor="white"
              backgroundColorMedium="lightbeige"
            />
            <ContentBlock
              title="Oletko sinä seuraava Anneliinalainen?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              linkPath="/yhteystiedot"
              buttonText="Ota yhteyttä"
              backgroundColorMedium="ultralightblue"
            />
          </ContentBlockContainer>
          <Footer />
        </ScrollArea>
      </SnapScrollArea>
    </div>
  );
}

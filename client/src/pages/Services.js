import React, { useState, useRef } from "react";
import Banner from "../elements/Banner";
import ServiceHeaderBlock from "../elements/ServiceHeaderBlock";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ServiceContentBlock from "../elements/ServiceContentBlock";
import Footer from "../elements/Footer";
import SnapScrollArea from "../components/SnapScrollArea";
import ScrollArea from "../components/ScrollArea";

const homeCareTaskList = {
  expandedList: [
    "tarkkailee yleistä terveydentilaasi",
    "neuvoo terveyteesi liittyvissä asioissa",
    "jakaa ja antaa lääkkeesi",
    "poistaa hakaset ja ompeleet",
    "mittaa verenpaineesi, verensokerisi, hemoglobiinisi ja saturaatiosi",
    "huuhtelee korviasi",
    "laittaa silmätippasi tai -voiteesi",
    "antaa injektiosi",
    "hoitaa haavasi",
    "katetroi",
    "ottaa verinäytteesi ja toimittaa sen laboratorioon",
    "tekee toimintakyvyn arvioinnit",
  ],
};

const dayActivityTaskList = {
  expandedList: [
    "quis aute iure",
    "reprehenderit in voluptate",
    "velit esse",
    "cillum dolore",
    "eu fugiat nulla",
    "pariatur",
  ],
};

const homeServiceCards = [
  {
    iconFileName: "anneliinan-kotisairaanhoito.png",
    textHtml: "Kotihoiva",
    className: "info-card-value info-card-service",
    expandedTitle: "Kotihoivaa ja apua kotona asumiseen",
    expandedText:
      "Kotihoivapalvelu on ikäihmiselle tarkoitettu palvelukokonaisuus, jonka tavoitteena on asiakkaan kotona selviytymisen tukeminen laadukkaan hoivatyön kautta, asiakkaan voimavaroja vahvistaen. Kotihoivan sisältö suunnitellaan yhdessä asiakkaan ja mahdollisesti hänen läheistensä kanssa. Jokaisen asiakkaan kanssa tehdään palvelusopimus, johon määritellään asiakkaan haluama palvelukokonaisuus.",
    expandedListTitle: "Hoitajamme auttavat sinua",
    expandedListTitleIcon: "favorite_border",
    expandedList: [
      "arkitoimissa",
      " ravitsemukseen liittyvissä asioissa",
      "pyykkien pesussa ja silittämisessä",
      "kodin siisteyden huolehtimisessa",
      "kauppa,- apteekki,- ja muussa asioinnissa",
      "henkilökohtaisen hygienia huolehtimisessa",
      "lääkkeenjaossa",
    ],
  },
  {
    iconFileName: "anneliinan-kotisairaanhoito.png",
    textHtml: "Kotiapu",
    className: "info-card-value info-card-service",
    expandedTitle: "Albucius patrioque et ius",
    expandedText:
      "Kaikkea ei tarvitse tehdä itse. Hoidamme puolestasi kotisi, lapsesi, lemmikit ja kasvit. Meiltä saat halutessasi apua arkeen ja näin sinulle jää enemmän aikaa itsellesi, perheellesi ja ystävillesi.",
    expandedListTitle: "Autamme mielellämme",
    expandedListTitleIcon: "favorite_border",
    expandedList: [
      "pyykkien pesussa ja silittämisessä",
      "siivouksessa ja ikkunanpesussa",
      "kauppa- apteekki- ja muussa asioinnissa",
      "ruoanlaitossa",
      "lasten hoidossa",
      "lemmikkien ulkoiluttamisessa",
      "kukkien kastelemisessa",
    ],
  },
  {
    iconFileName: "anneliinan-kotisairaanhoito.png",
    textHtml: "Henkilö&#173;kohtainen apu",
    className: "info-card-value info-card-service",
    expandedTitle: "Lorem ipsum dolor sit amet",
    expandedText:
      "Henkilökohtainen apu on välttämätöntä toisen ihmisen antamaa apua tavanomaiseen elämään liittyvissä toimissa, jotka henkilö tekisi itse, mutta joista hän vamman tai sairauden vuoksi ei selviä yksin. Kyseessä on itsenäisen elämän mahdollistaja vaikeavammaiselle henkilölle.",
    expandedListTitle: "Voimme avustaa sinua",
    expandedListTitleIcon: "favorite_border",
    expandedList: [
      "päivittäisissä toimissa",
      "työssä ja opiskelussa",
      "harrastuksissa",
      "sosiaalisen elämän ylläpitämisessä",
      "henkilökohtaisen avustajan palkkaamisessa kun palkkaat avustajan itse",
      "palkkaamasi avustajan lomituksissa",
    ],
  },
  {
    iconFileName: "anneliinan-kotisairaanhoito.png",
    textHtml: "Omais&#173;hoitajan vapaa",
    className: "info-card-value info-card-service",
    expandedTitle: "Omaishoitajalle voimia ja energiaa vapaista",
    expandedText:
      "Omaishoitaja on henkilö, joka pitää huolta sairaasta, vammaisesta tai ikääntyvästä läheisestään. Omaishoitotilanne voi syntyä vähitellen ja omaishoidon tarve kasvaa esim. läheisen ikääntymisen mukanaan tuomien sairauksien vuoksi tai äkillisesti sairauden tai vammautumisen seurauksena.",
    expandedListTitle: "Voimme avustaa sinua",
    expandedListTitleIcon: "favorite_border",
    expandedList: [
      "arkitoimissa",
      "ravitsemukseen liittyvissä asioissa",
      "pyykkien pesussa ja silittämisessä",
      "kodin siisteyden huolehtimisessa",
      "kauppa- ja muussa asioinnissa",
      "henkilökohtaisen hygienian huolehtimisessaa",
      "lääkkeenjaossa",
    ],
  },
];

export default function Services({ servicesSnapScrollEnabled }) {
  const [activeInfoCardServiceIndex, setActiveInfoCardServiceIndex] =
    useState(-1);
  const infoCardServiceContainerCardsRef = useRef();
  const infoCardServiceFirstRef = useRef();
  const infoCardServiceLastRef = useRef();
  const scrollAreaId = "scroll-area-services";
  const snapScrollAreaId = "snap-scroll-area-services";

  return (
    <div className="services">
      <SnapScrollArea
        id={snapScrollAreaId}
        snapScrollDisabledMobile={true}
        snapScrollDisabled={!servicesSnapScrollEnabled}
      >
        <Banner
          className="banner-services"
          imageFileName="services.jpeg"
          backgroundColor="lightbeige"
          title="Palvelut"
          text="Tarjoamme yksilöllistä ja luotettavaa hoivapalvelua kaikille sitä tarvitseville. Meiltä saat sairaanhoitoa kotiin kuljetettuna, apua kotona asumiseen, henkilökohtaista apua ja voimia vapaista. Kaikkea ei tarvitse tehdä itse. Nyt saat myös halutessasi apua arkeen kuten ruoan valmistukseen, asiointiin tai siivoukseen. Huolehdimme tarvittaessa myös lemmikistäsi ja kasveistasi."
          overlay={{
            overlayColor: "lightbeige",
            overlayReverse: true,
          }}
        />
        <ScrollArea
          scrollAreaId={scrollAreaId}
          snapScrollAreaId={snapScrollAreaId}
        >
          <InfoCardContainer
            className="info-card-container-service-units"
            titleElement={<h2>Palvelukokonaisuudet</h2>}
            text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation."
            backgroundColor="lightbeige"
          >
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-kotisairaanhoito.png"
              linkPath="/palvelut#kotisairaanhoito"
            />
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-koti.png"
              linkPath="/palvelut#kotihoito"
            />
            <InfoCard
              iconFileName="anneliinan-kotisairaanhoito.png"
              logoFileName="anneliinan-paivatoiminta.png"
              linkPath="/palvelut#paivatoiminta"
            />
          </InfoCardContainer>
          <ServiceHeaderBlock
            id="kotisairaanhoito"
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-kotisairaanhoito.png"
            sloganText="Sairaanhoito kotiinkuljetettuna"
          ></ServiceHeaderBlock>
          <ContentBlockContainer
            backgroundColor="lightblue"
            className="service-content-block-container"
          >
            <ServiceContentBlock
              isReverse={true}
              imageFileName="service-1.jpeg"
              title="Kotisairaanhoito on asiakkaan omaan kotiin vietyä sairaanhoitoa"
              keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
              text="Kotisairaanhoidon tarkoituksena on helpottaa sairaalasta kotiutumista, sairaan henkilön kotona selviytymistä ja tukea omaisia sairaan henkilön kotihoidossa. Sairaanhoitopalvelut ovat erilaisia lääkärin määräämiä sairaanhoidon toimenpiteitä kuten näytteiden ottamista, lääkityksen valvomista ja asiakkaan voinnin seuraamista."
              backgroundColor="white"
              backgroundColorMedium="lightblue"
              backgroundColorSecondaryMedium="white"
              backgroundExpanderColorMedium="hyperlightblue"
              expanderButtonText="Hoitajamme auttavat"
              expanderElement={homeCareTaskList}
            />
          </ContentBlockContainer>
          <ServiceHeaderBlock
            id="kotihoito"
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-koti.png"
            sloganText="Kotona asumista tukevat palvelut"
          ></ServiceHeaderBlock>
          <ContentBlockContainer
            backgroundColor="lightbeige"
            className="service-content-block-container"
          >
            <ServiceContentBlock
              imageFileName="placeholder.jpeg"
              title="Kotiapu sisältää kaikki kotona asumista tukevat palvelut"
              keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
              text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation."
              backgroundColor="white"
              backgroundColorMedium="lightbeige"
              backgroundColorSecondaryMedium="white"
              backgroundExpanderColorMedium="hyperlightbeige"
              noButton={true}
              infoCardList={homeServiceCards}
              infoCardServiceContainerCardsRef={
                infoCardServiceContainerCardsRef
              }
              infoCardServiceFirstRef={infoCardServiceFirstRef}
              infoCardServiceLastRef={infoCardServiceLastRef}
              activeInfoCardServiceIndex={activeInfoCardServiceIndex}
              setActiveInfoCardServiceIndex={setActiveInfoCardServiceIndex}
              expanderElement={homeServiceCards[activeInfoCardServiceIndex]}
            />
          </ContentBlockContainer>
          <ServiceHeaderBlock
            id="paivatoiminta"
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-paivatoiminta.png"
            sloganText="Sosiaalista toimintaa"
          ></ServiceHeaderBlock>
          <ContentBlockContainer
            backgroundColor="lightpink"
            className="service-content-block-container"
          >
            <ServiceContentBlock
              isReverse={true}
              imageFileName="placeholder.jpeg"
              title="Päivätoiminta ylläpitää sosiaaliset suhteet"
              keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
              text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his."
              backgroundColor="white"
              backgroundColorMedium="lightbeige"
              backgroundColorSecondaryMedium="white"
              backgroundExpanderColorMedium="hyperlightbeige"
              expanderButtonText="Päivätoiminnassa"
              expanderElement={dayActivityTaskList}
            />
          </ContentBlockContainer>
          <Footer />
        </ScrollArea>
      </SnapScrollArea>
    </div>
  );
}

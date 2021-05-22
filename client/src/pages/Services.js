import React from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ServiceContentBlock from "../elements/ServiceContentBlock";
import Footer from "../elements/Footer";
import ScrollArea from "../components/ScrollArea";

const homeCareTaskList = [
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
];

const dayActivityTaskList = [
  "quis aute iure",
  "reprehenderit in voluptate",
  "velit esse",
  "cillum dolore",
  "eu fugiat nulla",
  "pariatur",
];

export default function Services() {
  return (
    <div className="services">
      <ScrollArea>
        <Banner
          className="banner-services"
          imageFileName="services.jpeg"
          backgroundColor="lightblue"
          title="Palvelut"
          text="Tarjoamme yksilöllistä ja luotettavaa hoivapalvelua kaikille sitä tarvitseville. Meiltä saat sairaanhoitoa kotiin kuljetettuna, apua kotona asumiseen, henkilökohtaista apua ja voimia vapaista. Kaikkea ei tarvitse tehdä itse. Nyt saat myös halutessasi apua arkeen kuten ruoan valmistukseen, asiointiin tai siivoukseen. Huolehdimme tarvittaessa myös lemmikistäsi ja kasveistasi. Huomioimme aina sinun arkesi ja tottumuksesi. Toimimme laadukkaasti ja luotettavasti, emmekä tunne sanaa kiire. Räätälöimme palvelut juuri sinulle sopiviksi. Yhdessä varmistamme, että palvelusta tulee juuri sellainen kuin olet toivonutkin. Tavoitteemme on aina toimia asiakkaan ehdoilla ja yllättää sinut positiivisesti."
          overlay={{
            overlayColor: "beige",
            overlayReverse: true,
          }}
        />
        <InfoCardContainer
          title="Palvelukokonaisuudet"
          text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation."
          backgroundColor="beige"
        >
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
        <ContentBlockContainer backgroundColor="lightblue">
          <ServiceContentBlock
            imageFileName="service-1.jpeg"
            title="Kotisairaanhoito on asiakkaan omaan kotiin vietyä sairaanhoitoa"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            text="Kotisairaanhoidon tarkoituksena on helpottaa sairaalasta kotiutumista, sairaan henkilön kotona selviytymistä ja tukea omaisia sairaan henkilön kotihoidossa. Sairaanhoitopalvelut ovat erilaisia lääkärin määräämiä sairaanhoidon toimenpiteitä kuten näytteiden ottamista, lääkityksen valvomista ja asiakkaan voinnin seuraamista."
            backgroundColor="white"
            backgroundColorMedium="lightblue"
            expanderButtonText="Hoitajamme auttavat"
            expanderElement={{ list: homeCareTaskList }}
          />
        </ContentBlockContainer>
        <ContentBlockContainer backgroundColor="beige">
          <ServiceContentBlock
            imageFileName="placeholder.jpeg"
            title="Kotiapu sisältää kaikki kotona asumista tukevat palvelut"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his."
            backgroundColor="white"
            backgroundColorMedium="beige"
            infoCardElement={true}
          />
        </ContentBlockContainer>
        <ContentBlockContainer backgroundColor="pink">
          <ServiceContentBlock
            imageFileName="placeholder.jpeg"
            title="Päivätoiminta ylläpitää sosiaaliset suhteet"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            text="Lorem ipsum dolor sit amet, albucius patrioque et ius, ex his duis iisque. Altera scriptorem pri in, putent intellegam mel in. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his. Ut pro sumo tation. Quo in consul scripta detraxit, mollis verterem ea his."
            backgroundColor="white"
            backgroundColorMedium="beige"
            expanderButtonText="Päivätoiminnassa"
            expanderElement={{ list: dayActivityTaskList }}
          />
        </ContentBlockContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

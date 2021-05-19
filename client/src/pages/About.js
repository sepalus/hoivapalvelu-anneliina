import React, { useState } from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";
import ScrollArea from "../components/ScrollArea";

const infoCards = [
  {
    iconFileName: "value-1.png",
    text: "Ykislöllisyys",
    className: "info-card-value",
    expandedTitle: "Hoito on yksilöllistä",
    expandedText:
      "Yksilöllinen sydämestä lähtevä palvelu tarkoittaa sitä, että asiakasta kohdellaan ainutlaatuisena ihmisenä. Meille asiakas on aina yksilö ja oman elämänsä asiantuntija ja kunnioitamme hänen itsemääräämisoikeuttaan. Uskomme ihmisen ainutlaatuisuuteen.",
  },
  {
    iconFileName: "value-2.png",
    text: "Inhimillisyys",
    className: "info-card-value",
    expandedTitle: "Kohtaaminen on ystävällistä ja inhimillistä",
    expandedText:
      "Emme tunne sanaa kiire. Hoitajamme tarjoavat aikaa ja läsnäoloa ja kohtelu on lämmintä ja ystävällistä.",
  },
  {
    iconFileName: "value-3.png",
    text: "Luotettavuus",
    className: "info-card-value",
    expandedTitle: "Olemme luotettavia",
    expandedText:
      "Panostamme palveluidemme luotettavuuteen ja turvallisuuteen. Palvelemme sovitusti ja täsmällisesti, laadusta tinkimättä. Annettu palvelu perustuu hoito ja –palvelusuunnitelmaan. Kaikessa toiminnassamme edellytämme rehellisyyttä itseä ja toisia kohtaan ja sitä kautta rakennamme vahvan luottamuksen ilmapiirin.",
  },
  {
    iconFileName: "value-1.png",
    text: "Arvostus",
    className: "info-card-value",
    expandedTitle: "Arvostamme toinen toisiamme",
    expandedText:
      "Arvostamme ja kunnioitamme asiakkaitamme, yhteistyökumppaneitamme sekä toinen toisiamme. On tärkeätä toimia itse tavalla, mitä myös muilta edellyttää. Toimintamme edellyttää joustavaa ja tavoitteellista toimintatapaa jolloin avoimuuden ja yhteistyön merkitykset korostuvat. Joukkuepelissä meillä kaikilla on oma tärkeä roolimme.",
  },
  {
    iconFileName: "value-2.png",
    text: "Ammattitaito",
    className: "info-card-value",
    expandedTitle: "Tiimimme on ammattitaitoinen",
    expandedText:
      "Kannustamme työntekijöidemme kasvua ammattilaisina ja ihmisinä. Palveluksessamme on koulutettua terveydenhuoltoalan henkilökuntaa ja panostamme systemaattisesti heidän ammattitaitonsa ylläpitämiseen ja kehittämiseen. Meille työn ja muun elämän tasapaino on tärkeätä.",
  },
];

export default function About() {
  const [activeInfoCardIndex, setActiveInfoCardIndex] = useState(-1);
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
          backgroundColor="pink"
          className="info-card-container-value"
          expanderElement={infoCards[activeInfoCardIndex]}
        >
          {infoCards.map((infoCard, index) => (
            <InfoCard
              iconFileName={infoCard.iconFileName}
              text={infoCard.text}
              className={infoCard.className}
              isCardActive={activeInfoCardIndex === index}
              isCardDisactive={
                activeInfoCardIndex !== index && activeInfoCardIndex !== -1
              }
              setCardToActive={() => setActiveInfoCardIndex(index)}
            />
          ))}
        </InfoCardContainer>
        <ContentBlockContainer>
          <ContentBlock
            imageFileName="placeholder.jpeg"
            title="Tarinamme"
            text="Hoivapalvelu Anneliina Oy on aloittanut toimintansa vuonna 2007 yhden naisen yrityksenä. Vuosien myötä toiminta on laajentunut ja henkilöstömäärä lisääntynyt. Yrityksen perustamisen syynä oli Annen halu luoda asiakkaillensa parempi arki antamalla heille aikaa, välittämistä ja apua kotona asumiseen. Tuntui, että niin paljon oli tehtävää, jotta asiakkaat voisivat asua kotona turvallisin mielin. Suomalaisen perheyrityksen Anneliinahoivan uudet tuulet jatkavat Annen viitoittamaa tietä."
            backgroundColor="white"
            backgroundColorMedium="beige"
          />
        </ContentBlockContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

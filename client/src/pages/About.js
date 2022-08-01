import React, { useState, useRef } from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Button from "../components/Button";
import Footer from "../elements/Footer";

const infoCards = [
  {
    iconFileName: "value-individuality.png",
    text: "Ykislöllisyys",
    className: "info-card-value",
    expandedTitle: "Hoito on yksilöllistä",
    expandedText:
      "Yksilöllinen sydämestä lähtevä palvelu tarkoittaa sitä, että asiakasta kohdellaan ainutlaatuisena ihmisenä. Meille asiakas on aina yksilö ja oman elämänsä asiantuntija ja kunnioitamme hänen itsemääräämisoikeuttaan. Uskomme ihmisen ainutlaatuisuuteen.",
  },
  {
    iconFileName: "value-humanity.png",
    text: "Inhimillisyys",
    className: "info-card-value",
    expandedTitle: "Kohtaaminen on ystävällistä ja inhimillistä",
    expandedText:
      "Emme tunne sanaa kiire. Hoitajamme tarjoavat aikaa ja läsnäoloa ja kohtelu on lämmintä ja ystävällistä.",
  },
  {
    iconFileName: "value-trust.png",
    text: "Luotettavuus",
    className: "info-card-value",
    expandedTitle: "Olemme luotettavia",
    expandedText:
      "Panostamme palveluidemme luotettavuuteen ja turvallisuuteen. Palvelemme sovitusti ja täsmällisesti, laadusta tinkimättä. Annettu palvelu perustuu hoito ja –palvelusuunnitelmaan. Kaikessa toiminnassamme edellytämme rehellisyyttä itseä ja toisia kohtaan ja sitä kautta rakennamme vahvan luottamuksen ilmapiirin.",
  },
  {
    iconFileName: "value-respect.png",
    text: "Arvostus",
    className: "info-card-value",
    expandedTitle: "Arvostamme toinen toisiamme",
    expandedText:
      "Arvostamme ja kunnioitamme asiakkaitamme, yhteistyökumppaneitamme sekä toinen toisiamme. On tärkeätä toimia itse tavalla, mitä myös muilta edellyttää. Toimintamme edellyttää joustavaa ja tavoitteellista toimintatapaa jolloin avoimuuden ja yhteistyön merkitykset korostuvat. Joukkuepelissä meillä kaikilla on oma tärkeä roolimme.",
  },
  {
    iconFileName: "value-professionalism.png",
    text: "Ammattitaito",
    className: "info-card-value",
    expandedTitle: "Tiimimme on ammattitaitoinen",
    expandedText:
      "Kannustamme työntekijöidemme kasvua ammattilaisina ja ihmisinä. Palveluksessamme on koulutettua terveydenhuoltoalan henkilökuntaa ja panostamme systemaattisesti heidän ammattitaitonsa ylläpitämiseen ja kehittämiseen. Meille työn ja muun elämän tasapaino on tärkeää.",
  },
];

export default function About() {
  const [activeInfoCardIndex, setActiveInfoCardIndex] = useState(-1);
  const infoCardValueContainerCardsRef = useRef();
  const infoCardValueFirstRef = useRef();
  const infoCardValueLastRef = useRef();

  return (
    <div className="about">
      <Banner
        className="banner-about"
        imageFileName="about-hero.jpg"
        title="Tietoa Meistä"
        backgroundColor="lightpink"
        text="Hoivapalvelu Anneliina tukee ihmisen kotona asumista tarjoamalla luotettavaa, laadukasta ja asiakaslähtöistä sairaanhoito- ja huolenpitopalvelua. Autamme ihmisiä päivittäisessä elämässä tarjoamalla heille henkilökohtaista apua kotona-asumiseen ja arkeen. Teemme saumatonta ja tavoitteellista yhteistyötä muiden yhteistyökumppaneiden ja omaisten kanssa. Haluamme, että Anneliina tunnetaan hoiva-alalla luotettavana kotihoidon palvelun tarjoajana, jossa ammattitaito ja ihmisläheisyys kohtaavat. Haluamme tarjota toimialueemme parasta kotihoitopalvelua."
        overlay={{ overlayColor: "lightbeige" }}
      />
      <InfoCardContainer
        id="arvot"
        titleElement={<h2>Anneliinan arvot</h2>}
        textElement={
          <p>
            Kaiken toimintamme lähtökohtana ovat asiakkaidemme toiveet ja
            tarpeet. Asiakastyötämme ohjaavia arvoja ovat yksilöllisyys,
            ammatillisuus, inhimillisyys, luotettavuus ja arvostus.
            Asiakkaitamme hoidamme vastuuhoitajaperiaatteen mukaisesti ja
            samalla turvaamme hoidon yksilöllisyyden, jatkuvuuden ja
            luotettavuuden.
          </p>
        }
        backgroundColor="lightpink"
        className="info-card-container-value"
        hasScrollableInfoCards={true}
        expanderElement={infoCards[activeInfoCardIndex]}
        expanderCloseButtonElement={
          <Button
            className="expander-close-button no-background-button"
            onClick={() => setActiveInfoCardIndex(-1)}
          >
            <span class="material-icons-outlined">close</span>
          </Button>
        }
        expanderClassName="background-white"
        infoCardContainerCardsRef={infoCardValueContainerCardsRef}
        infoCardFirstRef={infoCardValueFirstRef}
        infoCardLastRef={infoCardValueLastRef}
      >
        {infoCards.map((infoCard, index) => {
          const isCardActive = activeInfoCardIndex === index;
          return (
            <InfoCard
              iconFileName={infoCard.iconFileName}
              text={infoCard.text}
              className={infoCard.className}
              isCardActive={isCardActive}
              isCardDisactive={!isCardActive && activeInfoCardIndex !== -1}
              infoCardRef={
                index === 0
                  ? infoCardValueFirstRef
                  : index === infoCards.length - 1
                  ? infoCardValueLastRef
                  : null
              }
              onClick={() => setActiveInfoCardIndex(isCardActive ? -1 : index)}
              key={`info-card-value-${index}`}
            />
          );
        })}
      </InfoCardContainer>
      <ContentBlockContainer backgroundColor="lightbeige">
        <ContentBlock
          imageFileName="about-story.jpg"
          title="Tarinamme"
          text="Hoivapalvelu Anneliina Oy on aloittanut toimintansa vuonna 2007 yhden naisen yrityksenä. Vuosien myötä toiminta on laajentunut ja henkilöstömäärä lisääntynyt. Yrityksen perustamisen syynä oli halu luoda kotona asuville ikäihmisille hyvä arki antamalla heille aikaa, välittämistä ja apua kotona asumiseen. Suomalaisen perheyrityksen hoivapalvelu Anneliinan tuulet jatkavat perustajansa viitoittamaa tietä."
          backgroundColor="white"
          backgroundColorMedium="lightbeige"
        />
      </ContentBlockContainer>
      <Footer />
    </div>
  );
}

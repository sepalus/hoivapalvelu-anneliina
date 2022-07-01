import React from "react";
import Banner from "../elements/Banner";
import Slogan from "../elements/Slogan";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";

export default function Home() {
  return (
    <div className="home">
      <Banner
        className="banner-home"
        imageFileName="home-banner-wide.jpg"
        backgroundColor="ultralightbeige"
        sloganText="Meiltä saat kaikki kotona asumista tukevat palvelut vaivattomasti saman katon alta"
        buttonText="Tutustu palveluihimme"
      />
      <Slogan />
      <InfoCardContainer
        className="info-card-container-service-units"
        titleElement={<h2>Yksilöllistä palvelua kotona asumisen tueksi</h2>}
        textElement={
          <p>
            Huomioimme aina sinun arkesi ja tottumuksesi. Toimintamme on
            ammattimaista, laadukasta ja luotettavaa, emmekä tunne sanaa kiire.
            Räätälöimme palvelut juuri sinulle sopiviksi. Yhdessä varmistamme,
            että palvelusta tulee juuri sellainen kuin olet toivonutkin.
          </p>
        }
        backgroundColor="lightblue"
      >
        <InfoCard
          className="info-card-service"
          iconFileName="service_homecare.png"
          textElement={
            <>
              <h4 className="color-mediumblue">Anneliinan </h4>
              <h4>Kotihoito ja sairaanhoito</h4>
            </>
          }
          linkPath="/palvelut#kotisairaanhoito"
        />
        <InfoCard
          className="info-card-service"
          iconFileName="service_homehelp.png"
          textElement={
            <>
              <h4 className="color-mediumblue">Anneliinan </h4>
              <h4>Kotiapu</h4>
            </>
          }
          linkPath="/palvelut#kotihoito"
        />
        <InfoCard
          className="info-card-service"
          iconFileName="service_daycare.png"
          textElement={
            <>
              <h4 className="color-mediumblue">Anneliinan </h4>
              <h4>Päivätoiminta</h4>
            </>
          }
          linkPath="/palvelut#paivatoiminta"
        />
      </InfoCardContainer>
      <ContentBlockContainer backgroundColor="lightbeige">
        <ContentBlock
          isReverse={true}
          imageFileName="about-us.jpeg"
          title="Jokainen meistä on yksilö"
          text="Jokainen meistä on yksilö. Meillä on kaikilla oma tarinamme, omat kokemuksemme, omat ilomme ja surumme ja ennen kaikkea oma tapa elää. Yksilöllinen sydämestä lähtevä hoivamme tarkoittaa sitä, että asiakasta kohdellaan ainutlaatuisena ihmisenä, jolla on paljon annettavaa ja oikeus hyvään elämään."
          linkPath="/meista#arvot"
          buttonText="Lue lisää arvoistamme"
          backgroundColor="white"
          backgroundColorMedium="lightbeige"
          imagePosition="100% 0"
        />
        <ContentBlock
          title="Voisitko sinä tai läheisesi hyötyä palvelustamme?"
          text="Haluamme palvella sinua. Meiltä saat kaikki kotona asumista tukevat palvelut laadukkaasti ja kiireettömästi kotiisi. Tuomme mielellämme juuri sinulle tai läheisellesi räätälöidyn palvelumme kotiisi. Ota yhteyttä jo tänään ja pyydä meiltä ilmainen palvelutarpeen kartoituskäynti kotiisi."
          linkPath="/yhteystiedot"
          buttonText="Ota yhteyttä"
          backgroundColorMedium="ultralightblue"
        />
        <ContentBlock
          imageFileName="home-trust.jpeg"
          title="Olemme luotettava kumppanisi"
          text="Panostamme palveluidemme luotettavuuteen ja turvallisuuteen. Suomalaisena perheyrityksenä vahva arvopohja ja vastuullinen toimintatapa tekee meistä luotettavan kumppanin. Olemme osa Luotettava Kumppani -verkostoa."
          buttonImage="luotettava-kumppani.png"
          externalLinkPath="https://www.tilaajavastuu.fi/?yt=2262512-4"
          backgroundColor="white"
          backgroundColorMedium="lightbeige"
        />
        <ContentBlock
          title="Oletko sinä seuraava Anneliinalainen?"
          text="Hoivapalvelu Anneliina tunnetaan hyvästä tiimistä ja ihanista asiakkaista. Yhteisöllisyys näkyy. Autamme asiakkaitamme päivittäisessä elämässä tarjoamalla heille kiireetöntä kotihoitoa tai henkilökohtaista apua kotona-asumiseen ja arkeen. Etsimme aina iloiseen joukkoomme sitoutuneita, sydämellisiä ja ammattitaitoisia lähihoitajia. Tarjoamme kilpailukykyisen palkan, joten jos olet työtä pelkäämätön, asenteeltasi positiivinen lähihoitaja, jolla on vahva halu palvella muita ihmisiä, tule toteuttamaan ja kehittämään itseäsi ja toimintaamme kanssamme."
          linkPath="/yhteystiedot"
          buttonText="Ota yhteyttä"
          backgroundColorMedium="ultralightblue"
        />
      </ContentBlockContainer>
      <Footer />
    </div>
  );
}

import React, { useState, useRef } from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import ServiceLiftup from "../elements/ServiceLiftup";
import Footer from "../elements/Footer";

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

const homeHelpTaskList = [
  "pyykkien pesussa ja silittämisessä",
  "siivouksessa ja ikkunanpesussa",
  "kauppa- apteekki- ja muussa asioinnissa",
  "ruoanlaitossa",
  "lasten hoidossa",
  "lemmikkien ulkoiluttamisessa",
  "kukkien kastelemisessa",
];

const dayActivityTaskList = [
  "luetaan lehtiä",
  "keskustellaan ajankohtaisista asioista",
  "harrastetaan kevyttä liikuntaa",
  "ulkoillaan",
  "pelataan pelejä",
  "harjoitetaan kädentaitoja",
  "muistellaan menneitä",
];

export const ServiceInfoCards = (
  <>
    <InfoCard
      className="info-card-service"
      iconFileName="service_homecare.png"
      textElement={
        <>
          <h4 className="color-mediumblue text-weight-bold">Anneliinan </h4>
          <h4 className="text-weight-semibold">Kotihoito ja Sairaanhoito</h4>
        </>
      }
      linkPath="/palvelut#kotihoito"
    />
    <InfoCard
      className="info-card-service"
      iconFileName="service_homehelp.png"
      textElement={
        <>
          <h4 className="color-mediumblue text-weight-bold">Anneliinan </h4>
          <h4 className="text-weight-semibold">Kotiapu</h4>
        </>
      }
      linkPath="/palvelut#kotiapu"
    />
    <InfoCard
      className="info-card-service"
      iconFileName="service_daycare.png"
      textElement={
        <>
          <h4 className="color-mediumblue text-weight-bold">Anneliinan </h4>
          <h4 className="text-weight-semibold">Päivätoiminta</h4>
        </>
      }
      linkPath="/palvelut#paivatoiminta"
    />
  </>
);

export default function Services() {
  return (
    <div className="services">
      <Banner
        className="banner-services"
        imageFileName="services.jpeg"
        backgroundColor="lightbeige"
        title="Palvelut"
        text="Tarjoamme yksilöllistä ja luotettavaa sairaanhoito- ja huolenpitopalvelua kaikille sitä tarvitseville. Oma koti on turvallinen paikka, jossa ihmisellä on hyvä olla. Haluamme varmistaa että ihmiset voivat asua omassa kodissaan aivan niin kauan kuin he itse haluavat. Autamme ihmisiä päivittäisessä elämässä, tarjoamalla heille henkilökohtaista apua kotona asumiseen ja arkeen. Huomioimme aina sinun arkesi ja tottumuksesi. Toimimme laadukkaasti ja luotettavasti, emmekä tunne sanaa kiire. Räätälöimme palvelut juuri sinulle sopiviksi. Yhdessä varmistamme, että palvelusta tulee juuri sellainen kuin olet toivonutkin."
        overlay={{
          overlayColor: "lightbeige",
          overlayReverse: true,
          overlayWhiter: true,
        }}
      />
      <InfoCardContainer
        className="info-card-container-service-units"
        titleElement={<h2>Palvelukokonaisuudet</h2>}
        textElement={
          <p>
            Meiltä saat kaikki asumista tukevat palvelut saman katon alta.
            <span className="text-weight-semibold">
              {" "}
              Kotihoito- ja sairaanhoitopalvelun{" "}
            </span>{" "}
            myötä tarjoamme yksilöllistä ja luotettavaa kotihoitoa
            pääsääntöisesti ikääntyneille henkilöille, jotka tarvitsevat hoivaa,
            huolenpitoa ja sairaanhoidollista apua kotona selviytymisen tueksi.
            Kaikkea ei tarvitse tehdä itse.{" "}
            <span className="text-weight-semibold">Kotiapupalveluna</span> voit
            saada halutessasi apua arkeen ja näin sinulle jää enemmän aikaa
            itsellesi, perheellesi ja ystävillesi.{" "}
            <span className="text-weight-semibold">Päivätoiminta</span> tarjoaa
            virikkeellistä toimintaa ja kuntoutusta kotona asuville
            ikääntyneille, jotka taritsevat tukea kotona selviytymiseen tai
            seuraa yksinäisiin päiviin.
          </p>
        }
        backgroundColor="lightbeige"
      >
        {ServiceInfoCards}
      </InfoCardContainer>
      <div className="services-content-blocks-container">
        <ContentBlockContainer>
          <ServiceLiftup
            id="kotihoito"
            imageFileName="service-1.jpeg"
            title="Anneliinan Kotihoito ja Sairaanhoito"
            description="Hoivaa, huolenpitoa ja sairaanhoidollista apua kotona selviytymisen tueksi"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            textElement={
              <>
                <p>
                  Kotisairaanhoito on asiakkaan omaan kotiin vietyä
                  sairaanhoitoa. Tavoitteena on asiakkaan terveyden edistäminen
                  sekä sairauksien hoito. Sen tarkoituksena on helpottaa
                  sairaalasta kotiutumista, sairaan henkilön kotona
                  selviytymistä ja tukea omaisia sairaan henkilön kotihoidossa.
                </p>
                <p>
                  Kotihoito on ikäihmiselle tarkoitettu palvelu, jonka tavoite
                  on asiakkaan kotona selviytymisen tukeminen ja avustaminen
                  henkilökohtaisissa päivittäistoiminnoissa. Palvelu tapahtuu
                  laadukkaan hoivatyön kautta, asiakkaan voimavaroja vahvistaen.
                </p>
              </>
            }
            color="blue"
            backgroundColor="lightblue"
            serviceListTitle="Hoitajamme"
            serviceList={homeCareTaskList}
          />
          <ServiceLiftup
            id="kotiapu"
            isReverse={true}
            imageFileName="placeholder.jpeg"
            title="Anneliinan Kotiapu"
            description="Kotiapupalveluna voita saada erilaisia kotona asumista helpottavia palveluita"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            textElement={
              <>
                <p>
                  Oma koti on turvallinen paikka, jossa ihmisellä on hyvä olla.
                  Useimmat ihmiset voivat paremmin, kun he saavat asua omassa
                  kodissaan. Aivan niin kauan kuin he itse haluavat. Tämä on
                  mahdollista, jos he saavat kotona asumiseen tarvitsemansa tuen
                  ja avun. Avun joltakin, joka osaa asiansa ja välittää.
                </p>
                <p>
                  Omien voimien vähentyessä kotiin saatavien palveluiden
                  merkitys kasvaa. Ammattitaitoinen ja luotettava
                  henkilökuntamme helpottaa arkeasi ja hyvinvointiasi.
                  Kotiapupalveluna voita saada erilaisia kotona asumista
                  helpottavia palveluita.
                </p>
              </>
            }
            color="beige"
            backgroundColor="lightbeige"
            serviceListTitle="Hoitajamme auttavat sinua"
            serviceList={homeHelpTaskList}
          />
          <ContentBlock
            title="Palveluihimme kuuluu myös"
            textElement={
              <>
                <div>
                  <h3>Henkilökohtainen apu</h3>
                  <p>
                    Henkilökohtainen apu on välttämätöntä toisen ihmisen antamaa
                    apua tavanomaiseen elämään liittyvissä toimissa, jotka
                    henkilö tekisi itse, mutta joista hän vamman tai sairauden
                    vuoksi ei selviä yksin. Kyseessä on itsenäisen elämän
                    mahdollistaja vaikeavammaiselle henkilölle.
                  </p>
                </div>
                <div>
                  <h3>Omaishoitajan vapaa</h3>
                  <p>
                    Omaishoitaja on henkilö, joka pitää huolta sairaasta,
                    vammaisesta tai ikääntyvästä läheisestään. Omaishoitotilanne
                    voi syntyä vähitellen ja omaishoidon tarve kasvaa esim.
                    läheisen ikääntymisen mukanaan tuomien sairauksien vuoksi
                    tai äkillisesti sairauden tai vammautumisen seurauksena.
                    Säännöllinen vapaa auttaa omaishoitajaa jaksamaan ja lisää
                    voimavaroja omaishoitotilanteissa.
                  </p>
                  <p>
                    Anneliinasta saat ammattitaitoista ja turvallista
                    huolenpitoa omaisellesi vapaapäivinäsi. Toimimme
                    omaishoitajan sijaisena kotonasi.
                  </p>
                </div>
              </>
            }
            backgroundColorMedium="lightbeige"
          />

          <ServiceLiftup
            id="paivatoiminta"
            imageFileName="placeholder.jpeg"
            title="Anneliinan Päivätoiminta"
            description="Päivätoiminta tarjoaa virikkeellistä toimintaa ja kuntoutusta kotona asuville ikääntyneille"
            keywords="Lorem ipsum, dolor sit amet, albucius, patrioque, duisiisque"
            textElement={
              <>
                <p>
                  Anneliinan päivätoiminta tarjoaa iloista toimintaa ja
                  kuntoutusta kotona asuville ikääntyneille, jotka tarvitsevat
                  tukea kotona selviytymiseen tai seuraa yksinäisiin päiviin.
                  Anneliinassa tavataan muita ihmisiä ja päiväohjelma
                  rakennetaan yhdessä ryhmän toiveiden ja toimintakykyjen
                  mukaisesti. Ryhmät pyritään kokoamaan siten, että kaikille
                  löytyy seuraa ja mieluisaa tekemistä. Yhteen ryhmään mahtuu
                  6–8 asiakasta kerrallaan.
                </p>
                <p>
                  Päivän aikana nautitaan kevyt aamupala, maukas lounas sekä
                  päiväkahvit. Järjestämme asiakkaillemme tarpeen mukaan myös
                  ryhmäkuljetuksen päivätoimintaan ja takaisin kotiin.
                </p>
              </>
            }
            color="pink"
            backgroundColor="lightpink"
            serviceListTitle="Päivätoiminnassa"
            serviceList={dayActivityTaskList}
          />
        </ContentBlockContainer>
      </div>
      <Footer />
    </div>
  );
}

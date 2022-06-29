import React, { useState, useRef } from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import ServiceLiftup from "../elements/ServiceLiftup";
import Footer from "../elements/Footer";

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

const homeHelpTaskList = {
  expandedList: [
    "quis aute iure",
    "reprehenderit in voluptate",
    "velit esse",
    "cillum dolore",
    "eu fugiat nulla",
    "pariatur",
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
    expandedTitle:
      "Ammattitaitoista ja turvallista huolenpitoa omaisellesi vapaapäivinäsi.",
    expandedText:
      "Omaishoitaja on henkilö, joka pitää huolta sairaasta, vammaisesta tai ikääntyvästä läheisestään. Omaishoitotilanne voi syntyä vähitellen ja omaishoidon tarve kasvaa esim. läheisen ikääntymisen mukanaan tuomien sairauksien vuoksi tai äkillisesti sairauden tai vammautumisen seurauksena. Säännöllinen vapaa auttaa omaishoitajaa jaksamaan ja lisää voimavaroja omaishoitotilanteissa.",
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

export default function Services() {
  const [activeInfoCardServiceIndex, setActiveInfoCardServiceIndex] =
    useState(-1);
  const infoCardServiceContainerCardsRef = useRef();
  const infoCardServiceFirstRef = useRef();
  const infoCardServiceLastRef = useRef();

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
      <div className="services-content-blocks-container">
        <ContentBlockContainer>
          <ServiceLiftup
            imageFileName="service-1.jpeg"
            title="Anneliina Kotihoito ja sairaanhoito"
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
            backgroundColor="white"
            backgroundColorMedium="lightblue"
            backgroundColorSecondaryMedium="white"
            backgroundExpanderColorMedium="hyperlightblue"
            expanderButtonText="Hoitajamme auttavat"
            expanderElement={homeCareTaskList}
          />
          <ServiceLiftup
            isReverse={true}
            imageFileName="placeholder.jpeg"
            title="Anneliina Kotiapu"
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
            backgroundColor="white"
            backgroundColorMedium="lightbeige"
            backgroundColorSecondaryMedium="white"
            backgroundExpanderColorMedium="hyperlightbeige"
            expanderButtonText="Kotiapuhoitajamme"
            expanderElement={homeHelpTaskList}
          />

          <ServiceLiftup
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
                  Päivätoimintapäivän pituus on kuusi tuntia klo 8–16.30
                  välisenä aikana. Aloitus- ja päättymisajat vaihtelevat
                  asiakkaiden tarpeista ja kuljetusaikatauluista riippuen.
                  Päivän aikana nautitaan kevyt aamupala, maukas lounas sekä
                  päiväkahvit. Järjestämme asiakkaillemme tarpeen mukaan myös
                  ryhmäkuljetuksen päivätoimintaan ja takaisin kotiin.
                </p>
              </>
            }
            backgroundColor="white"
            backgroundColorMedium="lightpink"
            backgroundColorSecondaryMedium="white"
            backgroundExpanderColorMedium="hyperlightbeige"
            expanderButtonText="Päivätoiminnassa"
            expanderElement={dayActivityTaskList}
          />
        </ContentBlockContainer>
      </div>
      <Footer />
    </div>
  );
}

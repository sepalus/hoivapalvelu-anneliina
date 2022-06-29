import React from "react";
import InfoCardContainer from "../elements/InfoCardContainer";
import ContactCard from "../elements/ContactCard";
import PricingTable from "../components/PricingTable";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";

const hourPricing = [
  [
    ["Arki", "klo 06-18", "40€"],
    ["", "klo 18-21", "50€"],
  ],
  [
    ["Lauantai", "klo 06-18", "60€"],
    ["", "klo 18-21", "70€"],
  ],
  [
    ["Pyhä", "klo 06-18", "80€"],
    ["", "klo 18-21", "90€"],
  ],
];

const visitPricing = [
  [
    ["Arki", "klo 06-18", "25€"],
    ["", "klo 18-21", "30€"],
  ],
  [
    ["Lauantai", "klo 06-18", "35€"],
    ["", "klo 18-21", "40€"],
  ],
  [
    ["Pyhä", "klo 06-18", "45€"],
    ["", "klo 18-21", "50€"],
  ],
];

export default function Pricing() {
  return (
    <div className="pricing">
      <InfoCardContainer
        titleElement={<h1>Hinnasto</h1>}
        postTextElement={
          <>
            <h4>Kaikki palvelumme ovat arvolisäverottomia.</h4>
            <h4>Emme veloita matkakuluja eikä muita lisäkuluja.</h4>
          </>
        }
        backgroundColor="lightblue"
        className="info-card-container-pricing"
      >
        <ContactCard
          title="Tuntihinnat"
          subtitle="Sisältää kaikki palvelut"
          className="contact-card-pricing"
        >
          <PricingTable tableContent={hourPricing} />
        </ContactCard>
        <ContactCard
          title="Käyntihinnat"
          subtitle="Yksittäinen käynti (alle 30 min)"
          className="contact-card-pricing"
        >
          <PricingTable tableContent={visitPricing} />
        </ContactCard>
      </InfoCardContainer>
      <ContentBlockContainer backgroundColor="lightbeige">
        <ContentBlock
          isReverse={true}
          imageFileName="placeholder.jpeg"
          title="​Kotitalousvähennys"
          text="Voit saada kotitalousvähennyksen, jos teetät kotitalous- tai tavanomaista hoiva-tai hoitotyötä. Vähennys on jopa 40% maksamasi palvelun hinnasta ja se hyvitetään sinulle henkilökohtaisessa verotuksessa. Voimme autta sinua verovähennyksen hakemisessa."
          backgroundColor="white"
          backgroundColorMedium="lightbeige"
          buttonText="Lue lisää vero.fi sivuilta"
          externalLinkPath="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/"
        />
      </ContentBlockContainer>
      <Footer />
    </div>
  );
}

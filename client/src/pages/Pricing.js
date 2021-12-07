import React from "react";
import InfoCardContainer from "../elements/InfoCardContainer";
import ContactCard from "../elements/ContactCard";
import PricingTable from "../components/PricingTable";
import ContentBlockContainer from "../elements/ContentBlockContainer";
import ContentBlock from "../elements/ContentBlock";
import Footer from "../elements/Footer";

const hourPricing = [
  [
    ["Arki", "klo 6-18", "45€"],
    ["", "klo 18-21", "48€"],
  ],
  [
    ["Lauantai", "klo 6-18", "52€"],
    ["", "klo 18-20", "55€"],
  ],
  [
    ["Pyhä", "klo 6-18", "72€"],
    ["", "klo 18-21", "80€"],
  ],
];

const visitPricing = [
  [
    ["Arki", "klo 6-18", "26€"],
    ["", "klo 18-21", "30€"],
  ],
  [
    ["Lauantai", "klo 6-18", "31€"],
    ["", "klo 18-21", "35€"],
  ],
  [
    ["Pyhä", "klo 6-18", "38€"],
    ["", "klo 18-21", "40€"],
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
        <ContactCard
          title="Soittoapu"
          className="contact-card-pricing contact-card-pricing-call"
        >
          <>
            <p className="text-weight-medium">
              Palvelemme myös puhelimitse arkena klo 6.00-21.30.
            </p>
            <p className="text-weight-medium">Hinta 7€ / kerta.</p>
          </>
        </ContactCard>
      </InfoCardContainer>
      <ContentBlockContainer backgroundColor="lightbeige">
        <ContentBlock
          title="​Kotitalousvähennys"
          text="Voit saada kotitalousvähennyksen, jos teetät kotitalous- tai tavanomaista hoiva-tai hoitotyötä. Vähennys on jopa 60% maksamasi palvelun hinnasta ja se hyvitetään sinulle henkilökohtaisessa verotuksessa. Voimme autta sinua verovähennyksen hakemisessa."
          backgroundColorMedium="lightbeige"
          buttonText="Lue lisää vero.fi-sivuilta"
          externalLinkPath="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/"
        />
      </ContentBlockContainer>
      <Footer />
    </div>
  );
}

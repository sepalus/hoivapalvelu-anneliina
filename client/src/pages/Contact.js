import React from "react";
import InfoCardContainer from "../elements/InfoCardContainer";
import ContactCard from "../elements/ContactCard";
import ContactPerson from "../components/ContactPerson";
import ScrollArea from "../components/ScrollArea";
import Footer from "../elements/Footer";

export default function Contact() {
  return (
    <div className="contact">
      <ScrollArea>
        <InfoCardContainer
          title="Yhteystiedot"
          backgroundColor="lightblue"
          className="info-card-container-contact"
        >
          <ContactCard
            iconName="place"
            title="Sijaintimme"
            className="contact-card-location"
          >
            <h4 className="text-weight-medium">
              Tupalantie 12, 04400 Järvenpää
            </h4>
            <div className="contact-card-location-map-wrapper"></div>
          </ContactCard>
          <ContactCard
            iconName="person_outline"
            title="Yhteyshenkilöt"
            className="contact-card-persons"
          >
            <ContactPerson
              name="Tove Seppelin-Högnabba"
              jobTitle="Toimitusjohtaja"
              phone="+358 503683286"
              email="tove@anneliina.fi"
              imageFileName="placeholder.jpeg"
            ></ContactPerson>
            <ContactPerson
              name="Asiakaspalvelu"
              phone="+358 503683286"
              email="tove@anneliina.fi"
              imageFileName="placeholder.jpeg"
            ></ContactPerson>
          </ContactCard>
        </InfoCardContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

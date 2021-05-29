import React from "react";
import InfoCardContainer from "../elements/InfoCardContainer";
import ContactCard from "../elements/ContactCard";
import ContactPerson from "../components/ContactPerson";
import ScrollArea from "../components/ScrollArea";
import Footer from "../elements/Footer";

export default function Contact() {
  const scrollAreaId = "scroll-area-contact";

  return (
    <div className="contact">
      <ScrollArea scrollAreaId={scrollAreaId}>
        <InfoCardContainer
          titleElement={<h1>Yhteystiedot</h1>}
          backgroundColor="lightbeige"
          className="info-card-container-contact"
        >
          <ContactCard
            iconName="place"
            title="Sijainti"
            className="contact-card-contact contact-card-location"
          >
            <ContactPerson
              name="Käyntiosoite"
              jobTitle="Tupalantie 12, 04400 Järvenpää"
            ></ContactPerson>
            <div className="contact-card-location-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.3691025944286!2d25.081341616096378!3d60.47213562591104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e00638dfde0ab%3A0x28fe0c4bbf2ddbac!2zVHVwYWxhbnRpZSAxMiwgMDQ0MDAgSsOkcnZlbnDDpMOk!5e0!3m2!1sfi!2sfi!4v1622029133131!5m2!1sfi!2sfi"
                allowfullscreen=""
              ></iframe>
            </div>
          </ContactCard>
          <ContactCard
            iconName="person_outline"
            title="Yhteyshenkilöt"
            className="contact-card-contact contact-card-persons"
          >
            <ContactPerson
              className="contact-card-item-person"
              name="Tove Seppelin-Högnabba"
              jobTitle="Toimitusjohtaja"
              phone="+358 503683286"
              email="tove@anneliina.fi"
              imageFileName="tove.jpeg"
            ></ContactPerson>
            <ContactPerson
              className="contact-card-item-person"
              jobTitle=""
              name="Asiakaspalvelu"
              phone="+358 400877966"
              email="hoiva@anneliina.fi"
              imageFileName="placeholder.jpeg"
            ></ContactPerson>
          </ContactCard>
        </InfoCardContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}

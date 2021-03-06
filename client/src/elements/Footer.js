import React from "react";
import "./Footer.scss";
import LinkButton from "../components/LinkButton";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-slogan">
          <div className="footer-slogan-content">
            <img
              className="footer-image"
              src="./assets/logos/hoivapalvelu-anneliina-darkblue.png"
              alt=""
            />
            <p className="footer-slogan-text p-16 text-medium-weight">
              Luotettavaa ja ammattitaitoista hoitopalvelua Etelä-Suomen
              alueella.
            </p>
          </div>
          <LinkButton
            text="Ota yhteyttä"
            className="footer-slogan-button"
            linkPath="/yhteystiedot#"
          />
        </div>
        <div className="footer-information">
          <div className="footer-information-services">
            <h3 className="text-medium-weight">Palvelut</h3>
            <div className="footer-information-content-items">
              <p className="text-small">Anneliinan Kotihoito ja Sairaanhoito</p>
              <p className="text-small">Anneliinan Kotiapu</p>
              <p className="text-small">Anneliinan Päivätoiminta</p>
            </div>
          </div>
          <div className="footer-information-contact">
            <h3 className="text-medium-weight">Yhteystiedot</h3>
            <div className="footer-information-content-items no-wrap">
              <p className="text-small">Hoivapalvelu Anneliina Oy</p>
              <p className="text-extrasmall">
                <span className="material-icons-outlined footer-information-contact-icon">
                  location_on
                </span>
                Tupalantie 12, 04400 Järvenpää
              </p>
              <p className="text-extrasmall">
                <span className="material-icons-outlined footer-information-contact-icon">
                  phone
                </span>
                040 087 7966
              </p>
              <p className="text-extrasmall">
                <span className="material-icons-outlined footer-information-contact-icon">
                  email
                </span>
                hoiva@anneliina.net
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.scss";

export default function Header() {
  return (
    <div className="footer">
      <div className="footer-slogan">
        <h2 className="bold-text">Hoivapalvelu Anneliina</h2>
        <h4>
          Luotettavaa ja ammattitaitoista hoitopalvelua Etelä-Suomen alueella.
        </h4>
        <button className="footer-slogan-button">Ota yhteyttä</button>
      </div>
      <div className="footer-information">
        <div className="footer-information-services">
          <h3 className="bold-text">Palvelut</h3>
          <div className="footer-information-content-items">
            <p>Anneliinan Kotisairaanhoito</p>
            <p>Anneliinan Kotiapu</p>
            <p>Anneliinan Päivätoiminta</p>
          </div>
        </div>
        <div className="footer-information-contact">
          <h3 className="bold-text">Yhteystiedot</h3>
          <div className="footer-information-content-items">
            <p>Hoivapalvelu Anneliina Oy</p>
            <p className="text-small">
              <span className="material-icons-outlined footer-information-contact-icon">
                location_on
              </span>
              Tupalantie 12, 04400 Järvenpää
            </p>
            <p className="text-small">
              <span className="material-icons-outlined footer-information-contact-icon">
                phone
              </span>
              0400 877 966
            </p>
            <p className="text-small">
              <span className="material-icons-outlined footer-information-contact-icon">
                email
              </span>
              hoiva@anneliina.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import classNames from "classnames";
import ContentBlock from "./ContentBlock";
import "./InfoCardContainer.scss";

export default function InfoCardContainer({
  title,
  children,
  backgroundColor,
  className,
}) {
  return (
    <div
      className={classNames("info-card-container", {
        [`${className}`]: className,
        [`background-${backgroundColor}`]: backgroundColor,
      })}
    >
      <div className="info-card-container-content-wrapper">
        <h2>{title}</h2>
        <div className="info-card-wrapper">{children}</div>
        <div className="info-card-container-expander">
          <h3>Hoito on yksilöllistä</h3>
          <p>
            Yksilöllinen sydämestä lähtevä palvelu tarkoittaa sitä, että
            asiakasta kohdellaan ainutlaatuisena ihmisenä. Meille asiakas on
            aina yksilö ja oman elämänsä asiantuntija ja kunnioitamme hänen
            itsemääräämisoikeuttaan. Uskomme ihmisen ainutlaatuisuuteen.
          </p>
        </div>
      </div>
    </div>
  );
}

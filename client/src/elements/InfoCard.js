import React from "react";
import classNames from "classnames";
import "./InfoCard.scss";
import "./InfoCardValue.scss";
import "./InfoCardService.scss";
import LinkButton from "../components/LinkButton";

export default function InfoCard({
  linkPath,
  iconFileName,
  logoFileName,
  text,
  textElement,
  textHtml,
  className,
  isCardActive,
  isCardDisactive,
  onClick,
  infoCardRef,
}) {
  return (
    <div ref={infoCardRef} className="info-card-ref">
      <LinkButton
        className={classNames("info-card", {
          "info-card-active": isCardActive,
          "info-card-disactive": isCardDisactive,
          [`${className}`]: className,
        })}
        onClick={onClick}
        linkPath={linkPath}
      >
        <div className="info-card-icon-wrapper">
          <img
            className="info-card-icon"
            src={`./assets/icons/${iconFileName}`}
            alt=""
          />
        </div>
        {logoFileName ? (
          <img
            className="info-card-logo"
            src={`./assets/logos/${logoFileName}`}
            alt=""
          />
        ) : (
          <div className="info-card-text">
            {text && <p className="text-small text-weight-semibold">{text}</p>}
            {textElement}
            {textHtml && (
              <p
                className="text-small text-weight-semibold"
                dangerouslySetInnerHTML={{ __html: textHtml }}
              />
            )}
          </div>
        )}
      </LinkButton>
    </div>
  );
}

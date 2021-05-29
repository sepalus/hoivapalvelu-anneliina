import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header({ setServicesSnapScrollEnabled }) {
  const rootPath = "/hoivapalvelu-anneliina";

  return (
    <div className="header">
      <div className="header-content-wrapper">
        <nav className="header-navigation">
          <ul className="header-navigation-list">
            <li>
              <Link to={rootPath + "/"}>
                <img
                  className="header-image"
                  src="./assets/logos/hoivapalvelu-anneliina.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link
                to={rootPath + "/palvelut"}
                onClick={() => setServicesSnapScrollEnabled(true)}
              >
                <p>Palvelut</p>
              </Link>
            </li>
            <li>
              <Link to={rootPath + "/hinnasto"}>
                <p>Hinnasto</p>
              </Link>
            </li>
            <li>
              <Link to={rootPath + "/meista"}>
                <p>Meistä</p>
              </Link>
            </li>
            <li>
              <Link to={rootPath + "/yhteystiedot"}>
                <p>Yhteystiedot</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

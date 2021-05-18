import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content-wrapper">
        <nav className="header-navigation">
          <ul className="header-navigation-list">
            <li>
              <Link to="/">
                <img
                  className="header-image"
                  src="./assets/logos/hoivapalvelu-anneliina.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/palvelut">
                <p>Palvelut</p>
              </Link>
            </li>
            <li>
              <Link to="/hinnasto">
                <p>Hinnasto</p>
              </Link>
            </li>
            <li>
              <Link to="/meista">
                <p>Meistä</p>
              </Link>
            </li>
            <li>
              <Link to="/yhteystiedot">
                <p>Yhteystiedot</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header({ setServicesSnapScrollEnabled }) {
  const rootPath = "/hoivapalvelu-anneliina";

  return (
    <div className="header">
      <div className="header-content-wrapper">
        <nav className="header-navigation">
          <div className="header-navigation-list">
            <NavLink
              to={rootPath + "/"}
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <img
                className="header-image"
                src="./assets/logos/hoivapalvelu-anneliina.png"
                alt=""
              />
            </NavLink>
            <NavLink
              to={rootPath + "/palvelut"}
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
              onClick={() => setServicesSnapScrollEnabled(true)}
            >
              <p className="text-weight-medium p-17">Palvelut</p>
            </NavLink>
            <NavLink
              to={rootPath + "/hinnasto"}
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <p className="text-weight-medium p-17">Hinnasto</p>
            </NavLink>
            <NavLink
              to={rootPath + "/meista"}
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <p className="text-weight-medium p-17">Meistä</p>
            </NavLink>
            <NavLink
              to={rootPath + "/yhteystiedot"}
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <p className="text-weight-medium p-17">Yhteystiedot</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

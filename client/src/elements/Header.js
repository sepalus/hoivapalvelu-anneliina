import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Button from "../components/Button";
import "./Header.scss";
import "./HeaderOverlay.scss";

export default function Header({
  setServicesSnapScrollEnabled,
  showMenuOverlay,
  setShowMenuOverlay,
}) {
  return (
    <div
      className={classNames("header", {
        "header-overlay": showMenuOverlay,
      })}
    >
      <div className="header-content-wrapper">
        <nav className="header-navigation">
          <NavLink
            to="/"
            className="header-navigation-item header-navigation-item-logo"
            activeClassName="header-navigation-item-active"
          >
            <img
              className="header-image"
              src="./assets/logos/hoivapalvelu-anneliina.png"
              alt=""
            />
          </NavLink>
          <Button
            className="header-navigation-button no-background-button"
            onClick={() => setShowMenuOverlay(!showMenuOverlay)}
          >
            <span class="material-icons-outlined">menu</span>
          </Button>
          <div className="header-navigation-list">
            <NavLink
              to="/palvelut"
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
              onClick={() => setServicesSnapScrollEnabled(true)}
            >
              <p className="text-weight-medium p-17">Palvelut</p>
            </NavLink>
            <NavLink
              to="/hinnasto"
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <p className="text-weight-medium p-17">Hinnasto</p>
            </NavLink>
            <NavLink
              to="/meista"
              className="header-navigation-item"
              activeClassName="header-navigation-item-active"
            >
              <p className="text-weight-medium p-17">Meistä</p>
            </NavLink>
            <NavLink
              to="/yhteystiedot"
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

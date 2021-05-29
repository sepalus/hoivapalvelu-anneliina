import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [servicesSnapScrollEnabled, setServicesSnapScrollEnabled] =
    useState(true);

  const rootPath = "/hoivapalvelu-anneliina";

  return (
    <>
      <Router>
        <Header setServicesSnapScrollEnabled={setServicesSnapScrollEnabled} />
        <div>
          <Switch>
            <Route path={rootPath + "/palvelut"}>
              <Services servicesSnapScrollEnabled={servicesSnapScrollEnabled} />
            </Route>
            <Route path={rootPath + "/hinnasto"}>
              <Pricing />
            </Route>
            <Route path={rootPath + "/meista"}>
              <About />
            </Route>
            <Route path={rootPath + "/yhteystiedot"}>
              <Contact />
            </Route>
            <Route path={rootPath + "/"}>
              <Home
                setServicesSnapScrollEnabled={setServicesSnapScrollEnabled}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

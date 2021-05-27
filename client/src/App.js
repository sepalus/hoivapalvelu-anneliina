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

  return (
    <>
      <Router>
        <Header setServicesSnapScrollEnabled={setServicesSnapScrollEnabled} />
        <div>
          <Switch>
            <Route path="/palvelut">
              <Services servicesSnapScrollEnabled={servicesSnapScrollEnabled} />
            </Route>
            <Route path="/hinnasto">
              <Pricing />
            </Route>
            <Route path="/meista">
              <About />
            </Route>
            <Route path="/yhteystiedot">
              <Contact />
            </Route>
            <Route path="/">
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

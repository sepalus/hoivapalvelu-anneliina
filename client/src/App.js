import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

const ScrollToTop = (props) => {
  const { pathname, hash, key, location } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/palvelut">
              <Services />
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
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

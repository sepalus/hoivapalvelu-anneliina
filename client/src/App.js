import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Kotiin</Link>
              </li>
              <li>
                <Link to="/palvelut">Palvelut</Link>
              </li>
              <li>
                <Link to="/hinnasto">Hinnasto</Link>
              </li>
              <li>
                <Link to="/meista">Meistä</Link>
              </li>
              <li>
                <Link to="/yhteystiedot">Yhteystiedot</Link>
              </li>
            </ul>
          </nav>
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
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import "./scss/index.scss";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Contact from "./components/Search";

export const apiUrl = "http://localhost:3001";

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/menu`)
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <>
          <Navigation items={menu} />
          <Switch>
            <Route exact path="/:language?" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </>
      </Router>
    </I18nextProvider>
  );
};
export default App;

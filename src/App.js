import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import "./scss/index.scss";
import "./scss/list.scss";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Attractions from "./components/Attractions";
export const apiUrl = "http://localhost:3001";

const App = () => {
  const [position, setPosition] = useState({ lon: 17.926126, lat: 50.671062 });

  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Router>
          <>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Home setPosition={setPosition} />}
              />
              <Route
                path="/attractions"
                component={() => <Attractions positions={position} />}
              />
            </Switch>
          </>
        </Router>
      </>
    </I18nextProvider>
  );
};

export default App;

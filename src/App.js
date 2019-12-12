import React, { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import "./scss/index.scss";
import "./scss/list.scss";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Attractions from "./components/Attractions";
import { NavLink } from "react-router-dom";
import Languages from "./components/Buttons/Buttons";
export const apiUrl = "http://localhost:3001";

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/menu`)
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  const activeStyle = {
    border: `solid 1px green`
  };

  const Navigation = ({ name, age }) => (
    <ul className="liStyle">
      <li>
        <Languages />
      </li>
      <li>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/attractions" activeStyle={activeStyle}>
          Atrakcje
        </NavLink>
      </li>
    </ul>
  );
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <>
          <Navigation items={menu} />
          <Switch>
            <Route exact path="/:language?" component={Home} />
            <Route path="/attractions" component={Attractions} />
          </Switch>
        </>
      </Router>
    </I18nextProvider>
  );
};
export default App;

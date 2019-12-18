import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import "./scss/index.scss";
import "./scss/list.scss";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Attractions from "./components/Attractions";
// import Languages from "./components/Buttons/Buttons";
// import Clock from "./components/Home/Clock";
// import Form from "./components/Home/Form";
// import Result from "./components/Home/Result";
// import AppMap from "./components/Home/AppMap";
export const apiUrl = "http://localhost:3001";

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/menu`)
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  // class App extends Component {
  //   state = {
  //     name: "",
  //     city: "",
  //     sunrise: "",
  //     sunset: "",
  //     temp: "",
  //     pressure: "",
  //     wind: "",
  //     clouds: "",
  //     icon: "",
  //     weather: [],
  //     error: false,
  //     lat: "",
  //     lon: ""
  //   };

  //   handleOnChange = e => {
  //     e.preventDefault();
  //     this.setState({
  //       name: e.target.value
  //     });
  //   };

  //   handleOnSubmit = e => {
  //     e.preventDefault();
  //     const ApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&APPID=15e71e5e4e20b1661976298855fb6d84`;
  //     fetch(ApiURL)
  //       .then(response => {
  //         if (response.ok) {
  //           return response;
  //         }
  //         throw Error("wystąpił błąd");
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           lat: data.coord.lat,
  //           lon: data.coord.lon
  //         });
  //       })
  //       .catch(error => console.log(error));
  //   };
  //   get positions() {
  //     const { lat, lon } = this.state;
  //     return {
  //       lat,
  //       lon
  //     };
  // }

  // render() {
  // console.log(this.state.lon);
  // console.log(this.state.lat);
  // const styleA = {
  //   textDecoration: "none",
  //   backgroundColor: "#8c5656",
  //   margin: "15px",
  //   marginTop: "20px",
  //   padding: "10px",
  //   borderRadius: "10%",
  //   fontWeight: "bold"
  // };
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/attractions" component={() => <Attractions />} />
            </Switch>
          </>
        </Router>
      </>
    </I18nextProvider>
  );
};
// }
export default App;

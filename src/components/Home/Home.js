import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "../../scss/index.scss";
import Clock from "./Clock";
import Languages from "../Buttons/Buttons";
import AppMap from "./AppMap";


class Home extends Component {
  state = {
    name: ''
  };
  handleOnChange = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const ApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&APPID=15e71e5e4e20b1661976298855fb6d84`;

    fetch(ApiURL)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("wystąpił błąd");
      })
      .then(response => response.json())
      .then(data => {
        this.props.setPosition({
          lat: data.coord.lat,
          lon: data.coord.lon,
          error: false,
          city: this.state.name,
          weather: data.weather[0].main,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          clouds: data.clouds.all,
          icon: data.weather[0].icon,
        });
      })
      .catch(error => console.log(error));
    this.props.setPosition({
      city: this.state.name
    });
  };
  render() {
    const { lat, lon } = this.props;
    const positions = {
      lat,
      lon
    };

    return (
      <>
        <header>
          <Languages />
          <div>Weather App</div>
        </header>
        <Clock />
        <Form
          name={this.state.name}
          onChange={this.handleOnChange}
          submit={this.handleOnSubmit}
        />
        <div>
          <Result wheather={this.props} />
          <AppMap positions={positions} />
        </div>
      </>
    );
  }
}
export default Home;

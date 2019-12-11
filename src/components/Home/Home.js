import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "../../scss/index.scss";
import Clock from "./Clock";
import Languages from "../Buttons/Buttons";
import AppMap from "./AppMap";



class Home extends Component {
  state = {
    name: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    clouds: "",
    icon: "",
    weather: [],
    error: false,
    lat: "",
    lon: "",
  };
  handleOnChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  get positions() {
    const { lat, lon } = this.state;
    return {
      lat,
      lon,
    };
  }
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
        this.setState({
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
          lat: data.coord.lat,
          lon: data.coord.lon,
        });
      })
      .catch(error => console.log(error));
    this.setState({
      error: true,
      city: this.state.name,
    });
  
  };
  render() {
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
        <div >
        <Result wheather={this.state}  ></Result>
        <AppMap positions={this.positions} ></AppMap>
        </div>
      </>
    );
  }
}
export default Home;

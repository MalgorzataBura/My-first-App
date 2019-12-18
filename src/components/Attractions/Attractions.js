import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/attractions.scss";

class Attractions extends Component {
  state = {
    lon: "vvvvvv",
    lat: "",
    restaurant: [],
    cafe: [],
    establishment: [],
    placeId: [],
    address: []
  };

  componentDidMount() {
    const ApiKey = "AIzaSyDYKDvuOIR_IX9fjr-91wljaFSHLFWg0k8";
    const lon = 17.926126;
    const lat = 50.671062;
    const radius = 40000;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const ApiURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=restaurant&keyword=cruise&key=${ApiKey}`;
    const ApiURLCafe = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=cafe&keyword=cruise&key=${ApiKey}`;
    const ApiURLEstablishment = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=establishment&keyword=cruise&key=${ApiKey}`;
    fetch(proxyurl + ApiURL)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("wystąpił błąd");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          restaurant: data.results
        });
        console.log(this.state.results);
        console.log(this.state.address);
      })
      .catch(error => console.log(error));
    this.setState({
      lon: this.props.lon,
      lat: this.props.lat
    });
    fetch(proxyurl + ApiURLCafe)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("wystąpił błąd");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cafe: data.results
        });
        console.log(this.state.results);
        console.log(this.state.address);
      })
      .catch(error => console.log(error));
    this.setState({
      lon: this.props.lon,
      lat: this.props.lat
    });
    fetch(proxyurl + ApiURLEstablishment)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("wystąpił błąd");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          establishment: data.results
        });
        console.log(this.state.results);
        console.log(this.state.address);
      })
      .catch(error => console.log(error));
    this.setState({
      lon: this.props.lon,
      lat: this.props.lat
    });
  }

  render() {
    return (
      <>
        <div className="linkStyle">
          <Link to="/">home</Link>
        </div>
        <div>{this.state.placeId}</div>
        <div>lon:{this.state.lon}</div>
        <div>lat:{this.state.lat}</div>
        <div className="table_container">
          <table>
            {this.state.restaurant.map((el, i) => (
              <>
                <tbody>
                  <tr className="tdStyle">
                    <td className="tdStyle">
                      <img src={el.icon}></img>
                    </td>
                    <td className="tdStyle">{el.name}</td>
                    <td className="tdStyle">{el.vicinity}</td>
                    <td className="tdStyle">ocena:{el.rating}</td>
                  </tr>
                </tbody>
              </>
            ))}
            {this.state.cafe.map((el, i) => (
              <>
                <tbody>
                  <tr className="tdStyle">
                    <td className="tdStyle">
                      <img src={el.icon}></img>
                    </td>
                    <td className="tdStyle">{el.name}</td>
                    <td className="tdStyle">{el.vicinity}</td>
                    <td className="tdStyle">ocena:{el.rating}</td>
                  </tr>
                </tbody>
              </>
            ))}
            {this.state.establishment.map((el, i) => (
              <>
                <tbody>
                  <tr className="tdStyle">
                    <td className="tdStyle">
                      <img src={el.icon}></img>
                    </td>
                    <td className="tdStyle">{el.name}</td>
                    <td className="tdStyle">{el.vicinity}</td>
                    <td className="tdStyle">ocena:{el.rating}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </>
    );
  }
}

export default Attractions;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/attractions.scss";

class Attractions extends Component {
  state = {
    lon: "",
    lat: "",
    restaurant: [],
    cafe: [],
    establishment: [],
    placeId: [],
    address: []
  };

  componentDidMount() {
    const ApiKey = "AIzaSyDYKDvuOIR_IX9fjr-91wljaFSHLFWg0k8";
    const radius = 40000;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const ApiURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.positions.lat},${this.props.positions.lon}&radius=${radius}&type=restaurant&keyword=cruise&key=${ApiKey}`;
    const ApiURLCafe = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.positions.lat},${this.props.positions.lon}&radius=${radius}&type=cafe&keyword=cruise&key=${ApiKey}`;
    const ApiURLEstablishment = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.positions.lat},${this.props.positions.lon}&radius=${radius}&type=establishment&keyword=cruise&key=${ApiKey}`;
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
      })
      .catch(error => console.log(error));

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
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <>
        <div >
          <Link to="/" className="btn btn-secondary link">home</Link>
        </div>
        <div className="table_container ">
          <table className="attTable">
            {this.state.restaurant.map((el, i) => (
              <>
                <tbody>
                  <tr key={i} className="tdStyle">
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
                  <tr key={i} className="tdStyle">
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
                  <tr key={i} className="tdStyle">
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

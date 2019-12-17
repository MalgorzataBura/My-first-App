import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/attractions.scss";

class Attractions extends Component {
  state = {
    lon: "vvvvvv",
    lat: "",
    results: [],
    placeId: [],
    address: []
  };

  componentDidMount() {
    const ApiKey = "AIzaSyDYKDvuOIR_IX9fjr-91wljaFSHLFWg0k8";
    const lon = 17.926126;
    const lat = 50.671062;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const ApiURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=45000&type=restaurant&keyword=cruise&key=${ApiKey}`;
    const IdUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJR3UAjFYmEEcR6wcHnQ1NviI&key=${ApiKey}`;
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
          results: data.results,
          placeId: data.results.place_id,
          address: data.results.types
        });
        console.log(data.results);
      })
      .catch(error => console.log(error));
    this.setState({
      lon: this.props.lon,
      lat: this.props.lat
    });
    // fetch(proxyurl + IdUrl)
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     }
    //     throw Error("wystąpił błąd");
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       results: data.results,
    //       placeId: data.results.place_id
    //     });
    //     console.log(data.results[0].place_id);
    //   })
    //   .catch(error => console.log(error));
    // this.setState({
    //   lon: this.props.lon,
    //   lat: this.props.lat
    // });
  }

  render() {
    return (
      <>
        <div className="linkStyle">
          <Link to="/">home</Link>
        </div>
        <div>{this.state.placeId}</div>
        <table>
          {this.state.results.map((el, i) => (
            <>
              <tbody>
                <tr className="tdStyle">
                  <td className="tdStyle">{el.name}</td>
                  <td className="tdStyle">{el.vicinity}</td>
                  <td className="tdStyle">
                    <img src={el.icon}></img>
                  </td>
                  {/* <td style={tdStyle}>{el.opening_hours.open_now}</td> */}
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </>
    );
  }
}

export default Attractions;

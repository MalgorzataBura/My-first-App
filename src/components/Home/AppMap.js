import Map from './Map';
import React, {Component} from 'react';
// import Home from "./Home";

class AppMap extends Component {
  state = {
    markersData: [{latLng: {lat: '', lng: ''}, title: 1}],
    zoom: 4,
  };

  componentDidUpdate (prevProps) {
    if (prevProps.positions.lat !== this.props.positions.lat) {
      this.setState ({
        markersData: [
          {
            latLng: {
              lat: this.props.positions.lat || 0,
              lng: this.props.positions.lon || 0,
            },
          },
        ],
        zoom: 16,
      });
    }
  }

  render () {
    const {markersData, zoom} = this.state;
    // const wea = this.props;
    return (
      <div>
        <Map markersData={markersData} zoom={zoom} />
      </div>
    );
  }
}
export default AppMap;

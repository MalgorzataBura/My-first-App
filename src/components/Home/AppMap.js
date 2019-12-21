import Map from './Map';
import React, {Component} from 'react';
import '../../scss/map.scss';

class AppMap extends Component {

  render () {
    const markersData = [
      {
        latLng: {
          lat: this.props.positions.lat || 0,
          lng: this.props.positions.lon || 0,
        },
      },
    ]
    const zoom = this.props.positions.lat !==0 ? 14 : 4
    return (
      <div>
        <Map markersData={markersData} zoom={zoom} />
      </div>
    );
  }
}
export default AppMap;

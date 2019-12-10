import React from 'react';
import L from 'leaflet';
import Result from './Result';
const style = {
  width: '100%',
  height: '800px',
};

class Map extends React.Component {
  componentDidMount () {
    this.map = L.map ('map', {
      center: [49.8419, 24.0315],
      zoom: this.props.zoom,
      layers: [
        L.tileLayer ('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    this.layer = L.layerGroup ().addTo (this.map);
    this.updateMarkers (this.props.markersData);
  }
  componentDidUpdate({markersData}) {
    if (this.props.markersData !== markersData) {
      this.updateMarkers (this.props.markersData, this.props.zoom);
    }
  }
  updateMarkers (markersData = [], zoom) {
    this.map.setView (markersData[0].latLng, zoom);
    this.layer.clearLayers ();
    markersData.forEach (marker => {
      L.marker (marker.latLng, {title: marker.title}).addTo (this.layer);
    });
  }

  render () {
    const wea = this.props;
    return (
      <div id="map" style={style}>
        {/* <Result wheather={wea} className="div" /> */}
      </div>
    );
  }
}

export default Map;

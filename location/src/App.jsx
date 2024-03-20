import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  // markers
  const markers = [
    {
      geocode: [6.6194, 3.5105],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [6.5244, 3.3792],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [7.3775, 3.9470],
      popUp: "Hello, I am pop up 3"
    }
  ];


  const createCustomClusterIcon = (cluster) => {
    return divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
    });
  };

  return (
    <>
      <MapContainer center={[6.6194, 3.5105]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.geocode.toString()}
              position={marker.geocode}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

export default App;
import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import { Icon, divIcon } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  // markers
  const markers = [
    {
      geocode: [9.0820, 8.6753],
      popUp: "Hello, i am pop up 1"
    },
    {
      geocode: [9.0815, 8.6750],
      popUp: "Hello, i am pop up 2"
    },
    {
      geocode: [9.0810, 8.6745],
      popUp: "Hello, i am pop up 3"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./assets/location.png"),
    iconSize:[38, 38] // size of the icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true) 
    })
  }


  return (
    <>
  <MapContainer center={[9.0820,8.6753]} zoom={13}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    <MarkerClusterGroup
    chunkedLoading
    iconCreateFunction={createCustomClusterIcon}
    >
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
        ))}
    </MarkerClusterGroup>
  </MapContainer> 
    </>
   );
} 
export default App

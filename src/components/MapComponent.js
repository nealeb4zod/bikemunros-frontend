import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/map.css";

const MapComponent = ({ munroList }) => {
  return (
    <MapContainer center={[56.799, -4.298]} zoom={7}>
      {munroList.map((munro) => {
        return (
          <Marker key={munro.id} position={[munro.latitude, munro.longitude]}>
            <Popup>
              <div>
                <h2>{munro.name}</h2>
                <h4>County: {munro.county}</h4>
              </div>
            </Popup>
          </Marker>
        );
      })}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;

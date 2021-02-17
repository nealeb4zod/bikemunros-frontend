import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link as ReactLink } from "react-router-dom";
import "../styles/map.css";
import SearchBar from "./SearchBar";
import { Link } from "@chakra-ui/react";

const MapComponent = ({ filteredMunroList, input, onChange }) => {
  return (
    <>
      <SearchBar p="2" input={input} onChange={onChange} />
      <MapContainer center={[56.799, -4.298]} zoom={7}>
        {filteredMunroList.map((munro) => {
          return (
            <Marker key={munro.id} position={[munro.latitude, munro.longitude]}>
              <Popup>
                <div>
                  <h2>{munro.name}</h2>
                  <h4>County: {munro.county}</h4>
                  <Link as={ReactLink} to={`/munro/${munro.id}`}>
                    Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        />
      </MapContainer>
    </>
  );
};

export default MapComponent;

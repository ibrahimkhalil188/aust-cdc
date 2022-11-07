import 'leaflet/dist/leaflet.css';
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../../Style/icon.style.css";

const Map = () => {
 
  return (
    <div className="h-[80vh] w-full mt-16">
        <hr />
      <MapContainer
        center={{ lat: 23.7639, lng:  90.4066}}
        zoom={16}
        style={{ height: "50vh", width: "50%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
    </div>
  );
};

export default Map;

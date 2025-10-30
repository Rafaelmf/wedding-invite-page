import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import styles from "./Party.module.css";
import { useEffect, useRef } from "react";

const Map = () => {
  var marker = L.icon({
    iconUrl: "marker.png",
    iconSize: [38, 38], // size of the icon
  });

  const leafletRef = useRef<any>(null);
  useEffect(() => {
    if (!leafletRef || !leafletRef.current) return;
    leafletRef.current.openPopup();
  }, []);

  return (
    <div
      onClick={() => {
        if (window === null) return;
        window
          .open(
            "https://www.google.com/maps/place/Armazem+de+Maria/@-22.0174671,-47.8582099,17z/data=!3m1!4b1!4m5!3m4!1s0x94b8769665c9da1b:0x1e70e60b33f58043!8m2!3d-22.01747!4d-47.8560005",
            "_blank"
          )
          ?.focus();
      }}
      className={styles.map}
    >
      <MapContainer
        center={[-22.0173669, -47.8567228]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          ref={leafletRef}
          icon={marker}
          position={[-22.0173669, -47.8567228]}
        >
          <Popup>
            <strong>Espaço Armazém de Maria</strong>
            <p>
              Rua Vereador, R. José Pereira Pinheiro Filho, 113 - Jardim
              Tangara, São Carlos - SP, 13568-100
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

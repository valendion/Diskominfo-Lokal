import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PolygonArea } from "~/components/Map/PolygonArea.client";
import {
  coordinateLineMap,
  coordinatePolygonMap,
} from "~/utils/const/CoordinateMap";

import { LineArea } from "./LineArea.client";

export const MapBody = () => {
  return (
    <div className="w-full  h-[500px] mt-4">
      <MapContainer
        center={[-3.3, 121]}
        zoom={9}
        className="w-full h-[500px]"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {coordinatePolygonMap.map((polygon, index) => (
          <PolygonArea key={polygon.name} polygonData={polygon} index={index} />
        ))}

        {coordinateLineMap.map((line, index) => (
          <LineArea key={line.name} index={index} line={line} />
        ))}
      </MapContainer>
    </div>
  );
};

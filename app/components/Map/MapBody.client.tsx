import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PolygonArea from "~/components/Map/PolygonArea.client";
import {
  coordinateLineMap,
  coordinatePolygonMap,
} from "~/utils/const/CoordinateMap";

import LineArea from "./LineArea.client";
import { useState } from "react";

export const MapBody = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="w-full  h-[500px] md:h-[800px] mt-4">
      <MapContainer
        center={[-3.3, 121]}
        zoom={10}
        className="w-full h-[500px] md:h-[800px] !bg- "
        scrollWheelZoom={false} // Menonaktifkan zoom dengan scroll mouse
        dragging={false} // Menonaktifkan drag
        zoomControl={false} // Menghilangkan tombol zoom
        doubleClickZoom={false}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        /> */}

        {coordinatePolygonMap.map((polygon, index) => (
          <PolygonArea
            key={polygon.name}
            polygonData={polygon}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            order={polygon.order}
          />
        ))}

        {coordinateLineMap.map((line, index) => (
          <LineArea
            key={line.name}
            index={index}
            line={line}
            hoveredLineIndex={hoveredIndex}
            setHoveredLineIndex={setHoveredIndex}
            order={line.order}
          />
        ))}
      </MapContainer>
    </div>
  );
};

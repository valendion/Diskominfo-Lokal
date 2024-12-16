import { Polygon, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { colorMapPolygon } from "~/utils/color/ColorMap";

export const PolygonArea = ({
  polygonData,
  index,
}: {
  polygonData: {
    name: string;
    coordinates: number[][][];
  };
  index: number;
}) => {
  const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);

  useEffect(() => {
    // Add null/undefined check
    if (
      !polygonData ||
      !polygonData.coordinates ||
      !polygonData.coordinates[0]
    ) {
      console.error("Invalid polygon data:", polygonData);
      return;
    }

    try {
      const formattedCoords: LatLngExpression[] =
        polygonData.coordinates[0].map((coord) => {
          if (!Array.isArray(coord) || coord.length < 2) {
            console.error("Invalid coordinate:", coord);
            return [0, 0]; // Fallback coordinate
          }
          return [coord[1], coord[0]]; // Membalik koordinat menjadi [latitude, longitude]
        });
      setCoordinates(formattedCoords);
    } catch (error) {
      console.error("Error processing coordinates:", error);
    }
  }, [polygonData]);

  // Prevent rendering if no coordinates
  if (coordinates.length === 0) {
    return null;
  }

  const polygonOptions = {
    color: colorMapPolygon[index] || "#000", // Fallback color if index is out of bounds
    fillColor: colorMapPolygon[index] || "#000",
    fillOpacity: 0.3,
    weight: 1,
  };

  return (
    <Polygon positions={coordinates} pathOptions={polygonOptions}>
      <Popup>{polygonData.name}</Popup>
    </Polygon>
  );
};

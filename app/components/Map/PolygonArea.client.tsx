import { Polygon, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { colorMapPolygon } from "~/utils/color/ColorMap";

export const PolygonArea = ({
  polygonData,
  index,
  hoveredIndex,
  setHoveredIndex,
  order,
}: {
  polygonData: {
    name: string;
    coordinates: number[][][];
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  order: number;
}) => {
  const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);

  useEffect(() => {
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
            return [0, 0];
          }
          return [coord[1], coord[0]];
        });
      setCoordinates(formattedCoords);
    } catch (error) {
      console.error("Error processing coordinates:", error);
    }
  }, [polygonData]);

  if (coordinates.length === 0) {
    return null;
  }

  const isHovered = hoveredIndex === order;
  const shouldBeDimmed = hoveredIndex !== null && !isHovered;

  const polygonOptions = {
    color: colorMapPolygon[index] || "#000",
    fillColor: colorMapPolygon[index] || "#000",
    fillOpacity: shouldBeDimmed ? 0.1 : 0.3, // Hanya mengubah opacity saat dimmed
    weight: 1,
  };

  const handleMouseOver = (e: any) => {
    setHoveredIndex(order);
    e.target.bringToFront();
    e.target.openPopup(); // Show popup on hover
  };

  const handleMouseOut = (e: any) => {
    setHoveredIndex(null);
    e.target.closePopup(); // Close popup on mouse out
  };

  return (
    <Polygon
      positions={coordinates}
      pathOptions={polygonOptions}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
      }}
    >
      <Popup>{polygonData.name}</Popup>
    </Polygon>
  );
};

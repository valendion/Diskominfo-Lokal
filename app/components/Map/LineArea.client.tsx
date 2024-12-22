import { Polygon, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { colorMapLine } from "~/utils/color/ColorMap";

const LineArea = ({
  line,
  index,
  hoveredLineIndex,
  setHoveredLineIndex,
  order,
}: {
  line: {
    name: string;
    type: string;
    lines: {
      coordinates: number[][];
    }[];
  };
  index: number;
  hoveredLineIndex: number | null;
  setHoveredLineIndex: (index: number | null) => void;
  order: number;
}) => {
  const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);

  useEffect(() => {
    if (line && line.lines && line.lines.length > 0) {
      const allCoordinates = line.lines.flatMap(
        (lineSegment) => lineSegment.coordinates
      );

      const closedPolygon = [...allCoordinates];
      const formattedCoords: LatLngExpression[] = closedPolygon.map((coord) => [
        coord[1],
        coord[0],
      ]);
      setCoordinates(formattedCoords);
    }
  }, [line]);

  const isHovered = hoveredLineIndex === order;
  const shouldBeDimmed = hoveredLineIndex !== null && !isHovered;

  const lineOptions = {
    color: colorMapLine[index] || "#000",
    fillColor: colorMapLine[index] || "#000",
    fillOpacity: shouldBeDimmed ? 0.1 : 0.3, // Meredup saat yang lain di-hover
    weight: 1,
  };

  const handleMouseOver = (e: any) => {
    setHoveredLineIndex(order);
    e.target.bringToFront();
    e.target.openPopup(); // Show popup on hover
  };

  const handleMouseOut = (e: any) => {
    setHoveredLineIndex(null);
    e.target.closePopup(); // Close popup on mouse out
  };

  return (
    <Polygon
      positions={coordinates}
      pathOptions={lineOptions}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
      }}
    >
      <Popup>{line.name}</Popup>
    </Polygon>
  );
};

export default LineArea;

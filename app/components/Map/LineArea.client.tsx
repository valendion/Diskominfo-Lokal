import { Polygon, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { colorMapLine } from "~/utils/color/ColorMap";

export const LineArea = ({
  line,
  index,
}: {
  line: {
    name: string;
    type: string;
    lines: {
      coordinates: number[][];
    }[];
  };
  index: number;
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

  const lineOptions = {
    color: colorMapLine[index] || "#000",
    // Remove fillColor and fillOpacity for LineArea
    fillColor: colorMapLine[index] || "#000",
    fillOpacity: 0.3,
    weight: 1,
  };

  return (
    <Polygon key={index} positions={coordinates} pathOptions={lineOptions}>
      <Popup>{line.name}</Popup>
    </Polygon>
  );
};

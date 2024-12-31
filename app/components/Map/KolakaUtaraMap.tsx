import { useState } from "react";
import { Map } from "lucide-react";
import { geoJsonKolakaUtara } from "~/utils/const/CoordinateMap";

const colorMapPolygon = [
  "#1D267D",
  "#0A2647",
  "#4335A7",
  "#432E54",
  "#9EADC8",
  "#B9E28C",
  "#D6D84F",
  "#525B44",
  "#2A3335",
  "#0A97B0",
  "#D91656",
  "#EB5B00",
  "#3B1C32",
  "#EB3678",
  "#005B41",
];

const KolakaUtaraMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [name, setName] = useState({
    content: "",
  });

  // Extract regions from geoJSON data
  const regions = geoJsonKolakaUtara[0].features
    .map((feature) => ({
      name: feature.properties.name,
      order: feature.properties.order,
    }))
    .sort((a, b) => a.order - b.order);

  // Calculate SVG viewBox based on coordinate bounds
  const coordinates = geoJsonKolakaUtara[0].features.flatMap(
    (feature) => feature.geometry.coordinates[0]
  );

  const bounds = coordinates.reduce(
    (acc, coord) => ({
      minX: Math.min(acc.minX, coord[0]),
      maxX: Math.max(acc.maxX, coord[0]),
      minY: Math.min(acc.minY, coord[1]),
      maxY: Math.max(acc.maxY, coord[1]),
    }),
    { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
  );

  // Scale and transform coordinates to fit SVG
  const scale = 1000;
  const padding = 50;

  const transformCoordinates = (coords) => {
    return coords.map((coord) => [
      ((coord[0] - bounds.minX) / (bounds.maxX - bounds.minX)) * scale +
        padding,
      // Flip the Y-axis to correct the inverted map
      scale +
        padding -
        ((coord[1] - bounds.minY) / (bounds.maxY - bounds.minY)) * scale,
    ]);
  };

  const handleMouseMove = (e, name) => {
    setName({
      content: name,
    });
    setHoveredRegion(name);
  };

  const handleMouseLeave = () => {
    setName({ content: "" });
    setHoveredRegion(null);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="h-6 w-6" />
            <h2 className="text-xl font-bold">Peta Kolaka Utara</h2>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="gap-4">
          <div className="relative">
            <svg
              viewBox={`0 0 ${scale + padding * 2} ${scale + padding * 2}`}
              className="w-full h-full border rounded-lg"
            >
              {geoJsonKolakaUtara[0].features.map((feature) => {
                const transformedCoords = transformCoordinates(
                  feature.geometry.coordinates[0]
                );
                const pathData = `M ${transformedCoords
                  .map((coord) => coord.join(","))
                  .join(" L ")} Z`;

                const color = colorMapPolygon[feature.properties.order - 1];

                return (
                  <path
                    d={pathData}
                    fill={color}
                    key={feature.properties.name}
                    stroke="#1e40af"
                    strokeWidth="1"
                    className="transition-all duration-200"
                    onMouseMove={(e) =>
                      handleMouseMove(e, feature.properties.name)
                    }
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolakaUtaraMap;

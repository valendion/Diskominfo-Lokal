import { useState } from "react";
import { Map } from "lucide-react";
import { geoJsonKolakaUtara } from "~/utils/const/CoordinateMap";
import PopOver from "../base/PopOver";

const colorMapPolygon = [
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
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    content: "",
    x: 0,
    y: 0,
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
      ((coord[1] - bounds.minY) / (bounds.maxY - bounds.minY)) * scale +
        padding,
    ]);
  };

  const handleMouseMove = (e, name) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltip({
      show: true,
      content: name,
      x: x,
      y: y,
    });
    setHoveredRegion(name);
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: "", x: 0, y: 0 });
    setHoveredRegion(null);
  };

  return (
    <div className="w-full  bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="h-6 w-6" />
            <h2 className="text-xl font-bold">Peta Kolaka Utara</h2>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
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
                const isSelected = selectedRegion === feature.properties.name;
                const isHovered = hoveredRegion === feature.properties.name;
                const color = colorMapPolygon[feature.properties.order - 1];

                return (
                  <path
                    key={feature.properties.name}
                    d={pathData}
                    fill={color}
                    stroke="#1e40af"
                    strokeWidth="1"
                    opacity={hoveredRegion === null || isHovered ? 1 : 0.3}
                    className="transition-all duration-200 cursor-pointer hover:opacity-100"
                    onClick={() => setSelectedRegion(feature.properties.name)}
                    onMouseMove={(e) =>
                      handleMouseMove(e, feature.properties.name)
                    }
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </svg>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Daftar Kecamatan:</h3>
            <div className="space-y-1">
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className={`p-2 rounded-lg cursor-pointer transition-all duration-200`}
                  style={{
                    backgroundColor: colorMapPolygon[index],
                    opacity:
                      hoveredRegion === null || hoveredRegion === region.name
                        ? 1
                        : 0.3,
                    color: "white",
                  }}
                  onClick={() => setSelectedRegion(region.name)}
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {region.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolakaUtaraMap;

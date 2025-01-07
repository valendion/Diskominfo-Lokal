import { useState } from "react";
import { Map } from "lucide-react";
import { geoJsonKolakaUtara } from "~/utils/const/CoordinateMap";

const colorMapPolygon = [
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
  "#979797",
];

const KolakaUtaraMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [name, setName] = useState({ content: "" });

  const regions = geoJsonKolakaUtara[0].features
    .map((feature) => ({
      name: feature.properties.name,
      order: feature.properties.order,
    }))
    .sort((a, b) => a.order - b.order);

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

  const scale = 30; // Perbesar peta
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  const padding = 10; // Kurangi padding agar lebih rapat

  const transformCoordinates = (coords) => {
    return coords.map((coord) => [
      ((coord[0] - bounds.minX) / width) * scale + padding / 2,
      scale - ((coord[1] - bounds.minY) / height) * scale + padding / 2,
    ]);
  };

  const handleMouseMove = (e, name) => {
    setName({ content: name });
    setHoveredRegion(name);
  };

  const handleMouseLeave = () => {
    setName({ content: "" });
    setHoveredRegion(null);
  };

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map className="h-6 w-6" />
          <h2 className="text-xl font-bold">Peta Kolaka Utara</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" aspect-square sm:h-[50vh]  md:h-[70vh] lg:h-[80vh] w-screen  ">
          <svg
            viewBox={`0 0 ${scale + padding} ${scale + padding}`}
            className="w-full h-full rounded-lg"
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
                  stroke="grey"
                  strokeWidth="0.1"
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
  );
};

export default KolakaUtaraMap;

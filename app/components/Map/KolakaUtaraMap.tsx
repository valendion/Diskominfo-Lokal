import { useState } from "react";
import { Map } from "lucide-react";
import { geoJsonKolakaUtara } from "~/utils/const/CoordinateMap";
import PingCircle from "../base/PingCircle";
import { Tooltip } from "flowbite-react";

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
      <div className="flex justify-center ">
        <div className="   h-[700px]  max-w-[600px] relative  overflow-x-auto ">
          {/* <div className="absolute bottom-[15%] left-[45.40625%]">
            <Tooltip content="Wawo" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[19.5%] left-[44.40625%]">
            <Tooltip content="Lambai" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[20.5%] left-[38.40625%]">
            <Tooltip content="Ranteangin" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[26%] left-[34.40625%]">
            <Tooltip content="Lasusua" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[34%] left-[32.40625%]">
            <Tooltip content="Katoi" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[32%] left-[43.40625%]">
            <Tooltip content="Kodeoha" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[39%] left-[39.40625%]">
            <Tooltip content="Tiwu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[41%] left-[44.40625%]">
            <Tooltip content="Ngapa" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[45%] left-[36.40625%]">
            <Tooltip content="Wotunohu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[46.5%] left-[44.40625%]">
            <Tooltip content="Pakue" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[50.5%] left-[55.40625%]">
            <Tooltip content="Pakue Tengah" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[44.5%] left-[55.40625%]">
            <Tooltip content="Pakue Utara" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[38.5%] left-[55.40625%]">
            <Tooltip content="Batu Putih" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[28.5%] left-[60%]">
            <Tooltip content="Porehu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[20.5%] left-[45.40625%]">
            <Tooltip content="Tolala" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div> */}

          <div className="absolute bottom-[160px] left-[310px]">
            <Tooltip content="Wawo" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[173px] left-[260px]">
            <Tooltip content="Lambai" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[175px] left-[175px]">
            <Tooltip content="Ranteangin" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[210px] left-[145px]">
            <Tooltip content="Lasusua" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[240px] left-[175px]">
            <Tooltip content="Katoi" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[282px] left-[150px]">
            <Tooltip content="Kodeoha" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[290px] left-[200px]">
            <Tooltip content="Tiwu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[300px] left-[260px]">
            <Tooltip content="Ngapa" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[329px] left-[165px]">
            <Tooltip content="Wotunohu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute bottom-[340px] left-[260px]">
            <Tooltip content="Pakue" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[335px] left-[340px]">
            <Tooltip content="Pakue Tengah" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[295px] left-[320px]">
            <Tooltip content="Pakue Utara" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[265px] left-[340px]">
            <Tooltip content="Batu Putih" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[200px] left-[360px]">
            <Tooltip content="Porehu" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>

          <div className="absolute top-[160px] left-[280px]">
            <Tooltip content="Tolala" style="light" className="">
              <PingCircle />
            </Tooltip>
          </div>
          <svg
            viewBox={`0 0 ${scale + padding} ${scale + padding}`}
            className=" h-[700px]  max-w-[600px] rounded-lg"
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

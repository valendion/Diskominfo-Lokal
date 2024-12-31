"use client";

import { Tooltip } from "flowbite-react";
import KolakaUtaraMap from "./KolakaUtaraMap";
import PingCircle from "../base/PingCircle";

const MapWithPing = () => {
  return (
    <div className="relative">
      <KolakaUtaraMap />

      <div className="absolute bottom-[10%] left-[45.40625%]">
        <Tooltip content="Wawo" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[13.5%] left-[35.40625%]">
        <Tooltip content="Lambai" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[15.5%] left-[31.40625%]">
        <Tooltip content="Ranteangin" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[20%] left-[27.40625%]">
        <Tooltip content="Lasusua" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[26%] left-[28.40625%]">
        <Tooltip content="Katoi" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[31%] left-[28.40625%]">
        <Tooltip content="Kodeoha" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[37%] left-[28.40625%]">
        <Tooltip content="Tiwu" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[36%] left-[44.40625%]">
        <Tooltip content="Ngapa" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[43%] left-[24.40625%]">
        <Tooltip content="Wotunohu" style="light" className="">
          <PingCircle />
        </Tooltip>
      </div>

      <div className="absolute bottom-[44.5%] left-[44.40625%]">
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

      <div className="absolute top-[37.5%] left-[55.40625%]">
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
      </div>
    </div>
  );
};

export default MapWithPing;

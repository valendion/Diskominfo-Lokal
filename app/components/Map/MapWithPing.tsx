"use client";

import { Tooltip } from "flowbite-react";
import KolakaUtaraMap from "./KolakaUtaraMap";
import PingCircle from "../base/PingCircle";

const MapWithPing = () => {
  return (
    <div className="relative">
      <KolakaUtaraMap />

      <div className="absolute bottom-[15%] left-[45.40625%]">
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

      <div className="absolute bottom-[34%] left-[28.40625%]">
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

      <div className="absolute bottom-[45%] left-[35.40625%]">
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
      </div>
    </div>
  );
};

export default MapWithPing;

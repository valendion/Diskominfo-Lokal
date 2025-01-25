import React from "react";
import { ItemModel } from "~/model/ItemModel";

const RectangleItem = ({ color, title, desc, textColor }: ItemModel) => {
  return (
    <div
      className="rounded-3xl px-9 py-16 "
      style={{ backgroundColor: color, color: textColor }} // Use inline styles for dynamic colors
    >
      <div className="w-full lg:h-20 xl:h-28 2xl:h-48 "></div>
      <div>
        <p className=" lg:text-base xl:text-xl 2xl:text-2xl font-medium">
          {title}
        </p>
        <p className="lg:text-sm 2xl:text-lg  mt-5">{desc}</p>
      </div>
    </div>
  );
};

export default RectangleItem;

import React from "react";
import { ItemModel } from "~/model/ItemModel";

const RectangleItemMobile = ({ color, title, desc, textColor }: ItemModel) => {
  return (
    <div
      className="rounded-3xl px-9 py-10 flex justify-between flex-col "
      style={{ backgroundColor: color, color: textColor }} // Use inline styles for dynamic colors
    >
      <p className="text-2xl mb-20 font-medium">{title}</p>
      <p className="text-base ">{desc}</p>
    </div>
  );
};

export default RectangleItemMobile;

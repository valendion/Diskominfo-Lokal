import React from "react";

const Buble = ({ brand, size = "h-52 w-52", ref }) => {
  return (
    <div
      ref={ref}
      className={` ${size} rounded-full bg-blue-primary flex items-center justify-center text-gray-800 font-medium`}
    >
      {brand}
    </div>
  );
};

export default Buble;

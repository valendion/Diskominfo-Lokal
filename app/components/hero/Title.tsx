import { Button } from "flowbite-react";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl md:w-[70%]">
        Helping Companies Calculate ‍and Cut their Impact
      </p>
      <div className=" md:w-[30%] z-20">
        <p className="mb-4 ">
          Vaayu is the world’s first automated AI software empowering retail
          brands and businesses to track and cut environmental impact in
          real-time.
        </p>
        <Button color="blue" pill>
          How Vaayu Works
        </Button>
      </div>
    </div>
  );
};

export default Title;

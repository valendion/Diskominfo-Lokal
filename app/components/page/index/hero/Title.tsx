import { Button } from "flowbite-react";

const Title = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl pr-10">
        Helping Companies Calculate ‍and Cut their Impact
      </p>
      <div className=" z-20 flex flex-col  items-center justify-center">
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

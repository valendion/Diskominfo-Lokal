import { Button } from "flowbite-react";
import { MoveRight } from "lucide-react";
import { useState } from "react";

const TitleList = () => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="flex flex-col md:flex-row pr-[5vw] gap-x-[10vh] grid-cols-[1.5fr 1fr] ">
      <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl pr-10">
        Grow your website on a rock-solid foundation
      </p>
      <div className="z-20 flex flex-col items-start justify-center">
        <p className="mb-4 text-base md:text-lg lg:text-xl">
          Set your site up for success on the powerful infrastructure that
          supports millions of websites worldwide.
        </p>

        <Button
          color="blue"
          className="relative group flex items-center justify-center px-6 py-3  font-medium overflow-hidden h-[54px] transition-all duration-200 ease-linear "
          pill
        >
          {/* Ikon */}
          <span className="absolute flex items-center justify-center right-4 top-0 h-full w-10 transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-linear">
            <MoveRight />
          </span>

          {/* Teks utama */}
          <span className="transition-transform duration-200 ease-linear group-hover:-translate-x-5">
            Get Started
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TitleList;

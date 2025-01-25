import { Equal } from "lucide-react";
import { NavLink } from "@remix-run/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMenuStore, useSidebarStore } from "~/store/navbarStore";

const Header = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();
  const { textMenu, setTextMenu } = useMenuStore();

  return (
    <div className="grid grid-cols-8 -mt-1 border-b-[0.5px] border-gray-300">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-5 col-span-2 h-40">
        <img
          src="cropped-logo-kominfo.jpg"
          alt="Icon Navbar"
          className="w-12 h-12 mr-4"
        />
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold font-Montserrat">
          Diskominfo
        </p>
      </div>

      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `relative flex justify-center  hover:border-b-black items-center p-5 border-[0.5px] border-gray-300 ${
            isActive ? "text-white" : "text-black"
          }`
        }
        onClick={() => {
          setTextMenu("");
        }}
      >
        {({ isActive }) => {
          return (
            <>
              <span className="relative z-10">Home</span>
              {/* Layer untuk animasi */}
              <div
                className={`absolute inset-0 bg-black transition-transform duration-300 transform ${
                  isActive ? "scale-y-100" : "scale-y-0"
                } origin-bottom`}
              ></div>{" "}
            </>
          );
        }}
      </NavLink>

      <NavLink
        to={"/menu2"}
        className={({ isActive }) =>
          `relative flex justify-center hover:border-b-black  items-center p-5 border-[0.5px] border-gray-300 ${
            isActive ? "text-white" : "text-black"
          }`
        }
        onClick={() => {
          setTextMenu("");
        }}
      >
        {({ isActive }) => {
          return (
            <>
              <span className="relative z-10">Menu 2</span>
              {/* Layer untuk animasi */}
              <div
                className={`absolute inset-0 bg-black transition-transform duration-300 transform ${
                  isActive ? "scale-y-100" : "scale-y-0"
                } origin-bottom`}
              ></div>{" "}
            </>
          );
        }}
      </NavLink>

      <NavLink
        to={"/menu3"}
        className={({ isActive }) =>
          `relative flex justify-center hover:border-b-black  items-center p-5 border-[0.5px] border-gray-300 ${
            isActive ? "text-white border-r-black" : "text-black"
          }`
        }
        onClick={() => {
          setTextMenu("");
        }}
      >
        {({ isActive }) => {
          return (
            <>
              <span className="relative z-10">Menu 3</span>
              {/* Layer untuk animasi */}
              <div
                className={`absolute inset-0 bg-black transition-transform duration-300 transform ${
                  isActive ? "scale-y-100" : "scale-y-0"
                } origin-bottom`}
              ></div>{" "}
            </>
          );
        }}
      </NavLink>

      {/* Menu */}
      <div
        className={`relative flex justify-center items-center p-5 border-[0.5px] border-gray-300 hover:border-b-black cursor-pointer ${
          isOpen ? "text-white border-l-black" : "text-black"
        }`}
        onClick={() => {
          toggleSidebar((prev) => !prev);
        }}
      >
        {/* Ikon Menu tetap di tengah */}
        <Equal className="size-20 relative z-10 stroke-[0.5px]" />

        {/* Layer untuk animasi */}
        <div
          className={`scale-y-0 absolute inset-0 bg-black transition-transform duration-300 transform ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } origin-bottom`}
        ></div>

        {/* Teks About di kiri bawah */}
        <p className="absolute bottom-2 left-4 text-sm z-10">{textMenu}</p>
      </div>

      <div
        className={`fixed top-[75px] z-40 -ml-1 right-0 left-0 bg-black h-screen overflow-hidden transition-transform duration-300 mt-20                                                 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-bottom`}
        onClick={() => closeSidebar()}
      >
        <div className="grid grid-cols-8 p-5">
          <div className="grid col-start-6 gap-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-full text-5xl font-semibold text-right pt-10 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
                setTextMenu("About");
              }}
            >
              About
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `w-full text-5xl font-semibold text-right pt-10 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                toggleSidebar(false);
                setTextMenu("FAQs");
              }}
            >
              FAQs
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-span-2"></div>
    </div>
  );
};

export default Header;

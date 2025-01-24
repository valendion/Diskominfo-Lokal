import { NavLink } from "@remix-run/react";
import { Equal, X } from "lucide-react";
import { useSidebarStore } from "~/store/navbarStore";

const HeaderMobile = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();
  return (
    <div className="flex justify-between -mt-1">
      <div>
        {" "}
        <NavLink
          to={"/"}
          className="flex justify-center items-center p-5 col-span-2 h-20"
        >
          <img
            src="cropped-logo-kominfo.jpg"
            alt="Icon Navbar"
            className="w-12 h-12 mr-4 "
          />
          <p className="text-3xl font-semibold font-Montserrat">Diskominfo</p>
        </NavLink>
      </div>

      <div
        className={`relative flex justify-center items-center p-5 border-[1px] border-gray-300 hover:border-b-black cursor-pointer ${
          isOpen ? "text-white border-l-black" : "text-black"
        }`}
        onClick={() => {
          toggleSidebar((prev) => !prev);
        }}
      >
        {/* Ikon Menu tetap di tengah */}
        {isOpen ? (
          <X className="size-10 relative z-10" />
        ) : (
          <Equal className="size-10 relative z-10" />
        )}

        {/* Layer untuk animasi */}
        <div
          className={`scale-y-0 absolute inset-0 bg-black transition-transform duration-300 transform ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } origin-bottom`}
        ></div>
      </div>

      <div
        className={`fixed z-40 bg-black h-screen overflow-hidden transition-transform duration-300 mt-20                                                 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-bottom`}
        onClick={() => closeSidebar()}
      >
        <div className="w-screen h-max mt-28">
          <div className="flex flex-col  justify-start mx-5">
            <NavLink
              to="/menu1"
              className={({ isActive }) =>
                `w-full text-2xl font-semibold mt-10 mb-5 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              Menu 1
            </NavLink>

            <p className="h-[1px] w-full bg-gray-400"></p>

            <NavLink
              to="/menu2"
              className={({ isActive }) =>
                `w-full text-2xl font-semibold mt-10 mb-5 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              Menu 2
            </NavLink>

            <p className="h-[1px] w-full bg-gray-400"></p>

            <NavLink
              to="/menu3"
              className={({ isActive }) =>
                `w-full text-2xl font-semibold mt-10 mb-5 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              Menu 3
            </NavLink>

            <p className="h-[1px] w-full bg-gray-400"></p>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-full text-2xl font-semibold  mt-10 mb-5 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              About
            </NavLink>

            <p className="h-[1px] w-full bg-gray-400"></p>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `w-full text-2xl font-semibold mt-10 mb-5 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              FAQs
            </NavLink>

            <p className="h-[1px] w-full bg-gray-400"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center wrapper-simple-screen h-10 wrapper-simple-padding">
      <div className="flex flex-row justify-center items-center">
        <img
          src="cropped-logo-kominfo.jpg"
          alt="Icon Navbar"
          className="size-8 mr-5"
        />
        <p className="text-2xl font-medium">Diskominfo</p>
      </div>

      <Menu />
    </div>
  );
};

export default Navbar;

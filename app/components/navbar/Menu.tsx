import { NavLink } from "@remix-run/react";
import { menuNavbar } from "~/utils/const/MenuItems";

const Menu = () => {
  return (
    <ul className="flex gap-4">
      {menuNavbar.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.href}
            className="hover:text-blue-500 text-xl font-medium"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

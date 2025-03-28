import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import { NavLink } from "react-router";

export function NavbarComponents() {
  const menu = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/products",
      title: "Products"
    },
    {
      path: "/login",
      title: "Login"
    }
  ];
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((menu) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
            to={menu.path}
          >
            {menu.title}
          </NavLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

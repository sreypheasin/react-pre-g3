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
    <header className="bg-blue-900">
      <Navbar
        fluid
        rounded
        className="bg-blue-900 max-w-screen-2xl mx-auto py-4 mb-[50px]"
      >
        <NavLink to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            iShop
          </span>
        </NavLink>
        <NavbarToggle />
        <NavbarCollapse>
          {menu.map((menu, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={menu.path}
            >
              {menu.title}
            </NavLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

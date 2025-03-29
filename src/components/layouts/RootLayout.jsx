import React from "react";
import { NavbarComponents } from "./NavbarComponent";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <NavbarComponents />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
}

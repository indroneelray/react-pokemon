import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className="w-full sticky top-0 left-0 right-0 bg-white py-4 px-1 shadow-lg">
        <h1 className="text-center text-3xl font-extrabold font-mono">My Pokedex</h1>
      </div>
      <div id="content" className="mt-8 px-4">
        <Outlet />
      </div>
    </>
  );
}

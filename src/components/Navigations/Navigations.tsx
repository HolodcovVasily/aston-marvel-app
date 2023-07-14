import React from "react";
import { Link } from "react-router-dom";

export function Navigations() {
  return (
    <nav className="flex justify-between items-center  h-[50px] px-5 ">
      <h1 className="font-bold">Marvel App</h1>
      <span className=" flex gap-5">
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  );
}

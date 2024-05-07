import React from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <>
      <div className="font-lato">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

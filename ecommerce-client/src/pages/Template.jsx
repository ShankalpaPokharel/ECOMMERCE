import React from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Template() {
  return (
    <>
      <div className="font-lato">
        <Header />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
}

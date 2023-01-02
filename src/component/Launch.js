import React from "react";
import { Outlet } from "react-router";

export default function Launch() {
  return (
    <>
      <div className="centerText">Shoes</div>
      <Outlet />
    </>
  );
}

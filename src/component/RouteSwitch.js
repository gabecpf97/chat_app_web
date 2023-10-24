import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import MainView from "./mainView";

const RouteSwitch = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;

import React from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Images } from "./Components/Images/Images";
import { Favorites } from "./Components/Favorites/Favorites";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/images" element={<Images />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

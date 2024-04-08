import React, { useEffect } from "react";
import "./App.css";
import ApiCall from "./API/ApiCall";
import { NavBar } from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Images } from "./Components/Images/Images";
import { Favorites } from "./Components/Favorites/Favorites";

export const App = () => {
  useEffect(() => {
    ApiCall.get(`/photos/?client_id=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => console.log(res.data)
    );
  });
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

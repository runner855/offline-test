import React, { useEffect } from "react";
import "./App.css";
import ApiCall from "./API/ApiCall";
import { NavBar } from "./Components/NavBar/NavBar";

export const App = () => {
  useEffect(() => {
    ApiCall.get(`/photos/?client_id=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => console.log(res.data)
    );
  });
  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

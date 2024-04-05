import React, { useEffect } from "react";
import "./App.css";
import ApiCall from "./API/ApiCall";

export const App = () => {
  useEffect(() => {
    ApiCall.get(`/photos/?client_id=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => console.log(res)
    );
  });
  return <div className="App">Offline</div>;
};

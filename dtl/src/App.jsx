import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventDetails />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
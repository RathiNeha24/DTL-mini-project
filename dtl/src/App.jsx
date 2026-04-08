import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./pages/EventDetails";


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
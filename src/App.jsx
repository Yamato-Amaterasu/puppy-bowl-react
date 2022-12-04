import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FormDisplay } from "./form";
import { DogCards } from "./Render";
import { NavBar } from "./Nav";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/form" element={<FormDisplay />} />
        <Route path="/" element={<DogCards />} />
      </Routes>
    </div>
  );
}

export default App;

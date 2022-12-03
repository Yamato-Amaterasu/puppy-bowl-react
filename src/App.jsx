import React, { useState } from "react";
import { DogCards } from "./Render";
import { NavBar } from "./Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogCards />
    </div>
  );
}

export default App;

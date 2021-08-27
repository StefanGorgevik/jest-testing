import React from "react";
import "./App.css";
import Guessed from "./Joto/Guessed/Guessed.tsx";

function App() {
  return (
    <div data-test="component-app" className="App">
      <Guessed />
    </div>
  );
}

export default App;

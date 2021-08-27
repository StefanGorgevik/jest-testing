import React from "react";
import "./App.css";
import Guessed from "./Joto/Guessed/Guessed.tsx";
import Congrats from "./Joto/Congrats/Congrats.tsx";

function App() {
  return (
    <div data-test="component-app" className="App">
      <h1>Joto</h1>
      <Congrats success={false} />
      <Guessed guessedWords={[]} />
    </div>
  );
}

export default App;

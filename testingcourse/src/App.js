import React from "react";
import "./App.css";
import Guessed from "./Joto/Guessed/Guessed.tsx";
import Congrats from "./Joto/Congrats/Congrats.tsx";
import Input from "./Joto/Input/Input";

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords= [];
  return (
    <div data-test="component-app" className="App">
      <h1>Joto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord}/>
      <Guessed guessedWords={[]} />
    </div>
  );
}

export default App;

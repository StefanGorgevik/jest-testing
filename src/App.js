import React, { useEffect } from "react";
import "./app.scss";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </div>
  );
}

export default App;

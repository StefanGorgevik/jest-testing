import React, { useEffect } from "react";
import "./app.scss";
import { useCounter } from "./hooks/useCounter";
import { useShowText } from "./hooks/useShowText";

function App() {
  const { count, increment, decrement } = useCounter();
  const { show, setShow } = useShowText();

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>

      <div data-test="showWrapper">
        {show && <p>HELLO</p>}
        <button onClick={() => setShow(!show)}>Show</button>
      </div>
    </div>
  );
}

export default App;

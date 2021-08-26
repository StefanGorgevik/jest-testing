import React, { useEffect, useState } from "react";
import "./styles.scss";
import SharedButton from "../button/index";

const Counter = ({ onCountChange = () => {} }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChange(count);
  }, [count]);

  return (
    <div className="countWrapper">
      <p>Count: {count}</p>
      <SharedButton
        buttonText="Count"
        emitEvent={() => setCount(count + 1)}
      ></SharedButton>
    </div>
  );
};

export default Counter;

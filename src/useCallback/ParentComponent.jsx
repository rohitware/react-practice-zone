import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleAlert = useCallback(() => {
    alert(`Current input: ${inputValue}`);
  }, [inputValue]);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <ChildComponent onIncrement={handleIncrement} onShowAlert={handleAlert} />
    </div>
  );
}

export default ParentComponent;

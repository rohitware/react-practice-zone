import React, { memo } from "react";

const ChildComponent = memo(({ onIncrement, onShowAlert }) => {
  console.log("ChildComponent rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onIncrement}>Increment Count</button>
      <button onClick={onShowAlert}>Show Input Value</button>
    </div>
  );
});

export default ChildComponent;

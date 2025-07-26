import React, { useReducer } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
const Counter1 = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <h1>Use Reducer Learning</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
export default Counter1;

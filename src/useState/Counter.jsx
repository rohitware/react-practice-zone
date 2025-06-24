import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  let clickHandle = () => {
    setcount(count + 1);
  };
  return (
    <>
      <h1> count : {count}</h1>
      <button onClick={clickHandle}> Increament</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </>
  );
}
export default Counter;

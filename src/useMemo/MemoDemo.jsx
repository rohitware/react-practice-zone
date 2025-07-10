import { useMemo } from "react";
import { useState } from "react";

const MemoDomo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensivecalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 10000000000; i++) return num * 2;
  };

  const doubleCount = useMemo(() => {
    return expensivecalculation(count);
  }, [count]);

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "1rem",
    marginTop: "1rem",
  };

  return (
    <>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setDark((pre) => !pre)}>Toggle Theme</button>
      <div style={themeStyle}>
        <h2>Double: {doubleCount}</h2>
      </div>
    </>
  );
};
export default MemoDomo;

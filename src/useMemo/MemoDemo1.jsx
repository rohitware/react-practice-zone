import { useMemo, useState } from "react";

function MemoDemo1() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //   const multiplication = useMemo(
  //     function Multiply() {
  //       console.log(".............");
  //       return add * 10;
  //     },
  //     [add]
  //   );
  const multiplication = useMemo(() => {
    console.log("...........");
    return add * 10;
  }, [add]);
  return (
    <>
      <h1> Learning UseMemo</h1>
      <p>Multiplication result: {multiplication}</p>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Substration</button>
      <span>{minus}</span>
    </>
  );
}
export default MemoDemo1;

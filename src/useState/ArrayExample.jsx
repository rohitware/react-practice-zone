import { useState } from "react";

function ArrayExample() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  return (
    <>
      <ul>
        {fruits.map((fruits, index) => (
          <li key={index}>{fruits}</li>
        ))}
      </ul>
      <button onClick={() => setFruits([...fruits, "mango"])}>Add Fruit</button>
    </>
  );
}
export default ArrayExample;

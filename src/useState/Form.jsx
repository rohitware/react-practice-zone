import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  const [user, setUser] = useState({
    name: "Rohit",
    age: 24,
  });

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <p> Name: {name}</p>

      {isVisible && <p>This text is visible</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>

      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase
      </button>
      <button onClick={() => setUser({ ...user, age: user.age - 1 })}>
        Decrease
      </button>
    </>
  );
}
export default Form;

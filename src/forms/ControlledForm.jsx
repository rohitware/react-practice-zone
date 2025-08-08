import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(`${name}`);
    setName("");
  };
  return (
    <>
      <h3>ControlledForm</h3>
      <form onClick={handlSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> click me!</button>
      </form>
    </>
  );
}

export default ControlledForm;

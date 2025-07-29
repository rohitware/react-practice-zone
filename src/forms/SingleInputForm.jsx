import React, { useState } from "react";

function SingleInputForm() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h1>Form Learning</h1>
      <h3> Single input form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SingleInputForm;

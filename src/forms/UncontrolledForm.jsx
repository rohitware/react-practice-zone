import React from "react";
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = nameRef.current.value;
    console.log(inputVal);
    nameRef.current.value = "";
  };
  return (
    <>
      <h2>UncontrolledForm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledForm;

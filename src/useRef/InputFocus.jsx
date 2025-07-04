import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        type="text"
        placeholder="click the buttun to focus"
        ref={inputRef}
      />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
export default InputFocus;

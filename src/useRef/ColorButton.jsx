import { useRef } from "react";

function ColorButton() {
  const firstButtonRef = useRef(null);

  const handleSecondClick = () => {
    firstButtonRef.current.style.background = "green";
  };
  return (
    <>
      <button ref={firstButtonRef}>first Button</button>

      <button onClick={handleSecondClick}> Change First Button Color</button>
    </>
  );
}
export default ColorButton;

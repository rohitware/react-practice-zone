import { useEffect } from "react";
function BasicUseEffect() {
  useEffect(() => {
    console.log("component mounted");
  }, []);

  return (
    <>
      <p>Check console on mount</p>
    </>
  );
}
export default BasicUseEffect;

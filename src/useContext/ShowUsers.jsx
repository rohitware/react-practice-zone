import { useContext } from "react";
import { UserContext } from "./UserContext";
function ShowUsers() {
  const user = useContext(UserContext); // read value from context
  return (
    <>
      <div>
        <h3>UseContext Example</h3>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>
      </div>
    </>
  );
}
export default ShowUsers;

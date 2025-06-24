import "./App.css";
import Greeting from "./Greeting";
import Counter from "./useState/Counter";
import UserGreeting from "./UserGreeting";
import SimpleForm from "./useState/SimpleForm";
import ProfileCard from "./ProfileCard";
import ListKeys from "./ListKeys";
import Form from "./useState/Form";
import ArrayExample from "./useState/ArrayExample";
import BasicUseEffect from "./useEffect/BasicUseEffect";
import CountEffect from "./useEffect/CountEffect";
import Users from "./useEffect/Users";

function App() {
  return (
    <>
      <Greeting name="Rohit" />
      <hr />
      <Counter />
      <hr />
      <UserGreeting isLogedIn={true} />
      <hr />
      <SimpleForm />
      <hr />
      <ProfileCard />
      <hr />
      <ListKeys />
      <hr />
      <Form />
      <hr />
      <ArrayExample />
      <hr />
      <BasicUseEffect />
      <hr />
      <CountEffect />
      <hr />
      <Users />
      <hr />
    </>
  );
}

export default App;

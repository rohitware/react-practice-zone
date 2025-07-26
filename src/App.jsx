import React, { Suspense } from "react";
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
import { UserContext } from "./useContext/UserContext";
import { ThemeContext } from "./useContext/themeContext";
import Page from "./useContext/Page";
import ShowUsers from "./useContext/ShowUsers";
import { useState } from "react";
import Task from "./Task";
import LikeButton from "./useState/LikeButton";
import InputFocus from "./useRef/InputFocus";
import ColorButton from "./useRef/ColorButton";
import ParentComponent from "./useCallback/ParentComponent";
import MemoDemo from "./useMemo/MemoDemo";
import MemoDemo1 from "./useMemo/MemoDemo1";
import Counter1 from "./useReducer/Counter";
import Todos from "./useReducer/Todos";

function App() {
  const user = { name: "Rohit", role: "Developer" };
  const [dark, setDark] = useState(false);
  const MyLazyCom = React.lazy(() => import("./MyLazyCom"));

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
          <Greeting name="Rohit" />
          <hr />
          <Counter />
          <hr />
          <UserGreeting isLogedIn={true} />
          <hr />
          <SimpleForm />
          <hr />
          <LikeButton />
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
          <ShowUsers />
          <Page />
          <hr />
          <Task />
          <hr />
          <InputFocus />
          <hr />
          <ColorButton />
          <hr />
          <ParentComponent />
          <hr />
          <MemoDemo />
          <hr />
          <MemoDemo1 />
          <hr />

          <h1>Learning Leazy loading in react</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <MyLazyCom />
          </Suspense>
          <hr />
          <Counter1 />
          <hr />
          <Todos />
          <hr />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;

import { useState } from "react";

export default function Task() {
  const [list, setList] = useState(["learn react", "html", "css"]);
  const [taskInput, setTaskInput] = useState("");

  const handleRemove = (e) => {
    const remaingList = list.filter((task) => task !== e);
    console.log(remaingList, e);
    setList(remaingList);
  };

  const handleAdd = () => {
    if (taskInput !== "" && !list.includes(taskInput)) {
      setList([...list, taskInput]);
    }
  };

  return (
    <>
      <h1>ToDo</h1>
      <input onChange={(e) => setTaskInput(e.target.value)} value={taskInput} />
      <button onClick={handleAdd}>Add Task</button>
      <ol>
        {list.map((e) => {
          return (
            <li key={e}>
              {e} <button onClick={() => handleRemove(e)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

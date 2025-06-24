function List() {
  const todos = [
    { id: 1, text: "leatn react" },
    { id: 2, text: "leatn angular" },
    { id: 3, text: "deploy project" },
  ];
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
    </>
  );
}

function FruitList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function ListKeys() {
  return (
    <>
      <List />
      <FruitList />
    </>
  );
}
export default ListKeys;

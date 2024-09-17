import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() =>  {
    console.log("useEffect");
    async function loadToDo(){
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=2"
      );
      const toDoFromAPI = await response.json();
      console.log("setToDo", toDoFromAPI);
      setToDos(toDoFromAPI);
    }
    loadToDo();
  }, [])
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() =>  {
    // setToDos({});
    const abortController = new AbortController();
    console.log("useEffect");
    
    async function loadToDo(){
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=3",
          {signal: abortController.signal}
        );
        const toDoFromAPI = await response.json();
        console.log("setToDo", toDoFromAPI);
        setToDos(toDoFromAPI);
      } catch (error) {
        if (error.name === "AbortError"){
          console.log("Aboirted")
        } else{
          throw error;
        }
      }
    }
    loadToDo();

    return () => {
      console.log("cleanup")
      abortController.abort();
    };
  }, [])
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

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

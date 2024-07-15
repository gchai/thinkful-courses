import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  //The document title should be "Awesome Album App" and should reset to the original document title when the component is cleaned up. You can get the original title by accessing document.title and storing that value.
  useEffect(() => {
    let origTitle = document.title
    document.title = "Awesome Album App"
    return () => {
      document.title = origTitle
    }
  }, [])

  //Load users from https://jsonplaceholder.typicode.com/users.
  useEffect(() =>  {
    let abortController = new AbortController();

    async function loadUsers(){
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          {signal: abortController.signal}
      );
      const usersFromAPI = await response.json()
      setUsers(usersFromAPI);
    } catch (error){
      if (error.name === "AbortError"){
        console.log("Aborted")
      } else {
        throw error;
      }
    }
  }
  loadUsers();

  return () => {
    console.log("cleanup")
    abortController.abort();
  };
}, [])
  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;

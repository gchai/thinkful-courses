import {React, useState, useEffect} from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

function NewUser() {
  return <p>Unable to create a new user</p>
}

function NoMatch() {
  return <h1>404 Not Found</h1>
}

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    async function loadUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: abortController.signal }
        );

        const user = await response.json();
        setUser(user);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    loadUser();

    return () => {
      abortController.abort(); // cancels any pending request or response
    };
  }, [userId]);

  // You do not need to change this component

  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
       <nav>
       <Link to="/user/new">New User</Link>       
        {Array(10)
          .fill()
          .map((_, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                User{id}
              </Link>
            </div>
          ))}
        </nav>
       {/* Setup routes with route paramaters as needed */
        <Routes>
          <Route path="/user/new" element={<NewUser/>}/>
          <Route path="/user/:userID" element={<UserProfile/>}/>
          <Route path="*" element={<NoMatch/>}/>

        </Routes>
       }
    </div>
    //

  );
}

export default App;

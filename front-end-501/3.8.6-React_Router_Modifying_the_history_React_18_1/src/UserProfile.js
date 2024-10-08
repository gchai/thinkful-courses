import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then(setUser)
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      abortController.abort(); // Cancels any pending request or response
    };
  }, [userId]);

  const rows = Object.entries(user).map(([key, value]) => (
    <div key={key}>
      <label>{key}</label>: {JSON.stringify(value)}
      <hr />
    </div>
  ));

 

  const deleteHandler = () => {
    // This will be successful but will not actually delete the user.
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, 
        { method: "DELETE" } // The delete method tells the API to delete the user.
    )
      .then((response) => response.json())
      .then((data)=> console.log("deleteHandler is not fully implemented"));
  };
  const navigate = useNavigate();
  if (user.id) {
    return (
      <div>
        <button type="button" onClick={deleteHandler => navigate("/")}>
          Delete
        </button>
        {rows}
      </div>
    );
  }
  return "Loading...";
}

export default UserProfile;

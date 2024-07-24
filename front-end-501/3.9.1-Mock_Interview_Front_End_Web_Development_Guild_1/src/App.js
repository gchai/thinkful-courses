import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

//   console.log(posts)
  /* Hint: Use the map() method to loop through the posts array, returning a PostDetail component for each post */
  return (
    <div className="App">
      <PostDetail posts={posts}/>
    </div>
  );
}

export default App;
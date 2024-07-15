import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function deletePost(postToDelete) {
    let filteredPosts = posts.filter((post) => post !== postToDelete);
    setPosts(filteredPosts);
  }

  return (
    <div className="App">
      <PostCreate addPost={addPost} />
      <PostList allPosts={posts} deletePost={deletePost} />
    </div>
  );
}
export default App;

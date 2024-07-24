import React, { useEffect, useState } from "react";

function PostDetail(props) {
  const [comments, setComments] = useState([]);
  const [click, setClick] = useState([]);
  
  const posts = props.posts;
//   console.log(props.posts);
 
  const getComments=(postId) => {
      console.log("Clicked!",postId);
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then(setComments)
        .catch((error) => {
          console.log(error)
        });
      console.log("Comments:", comments);
  };
  
//   console.log(getComments(1), comments) 
  
  const postList = posts.map((post, index) => (
    <div>
      <h3>
        {post.title}
      </h3>
      <p onClick={() => {setClick(true); getComments(post.id);}}>
        {post.body}
      </p>
      
    </div>
    
  ));
  
  const postComments = (
    <div>
        {comments.map((comment, index) => (
           <p>{`Comment ${index+1}: ${comment.body}`}
           </p>                  
       ))}
    </div>

    );
  
  
  // Your solution here
  return (
    <div className="container">
      <div className="posts">
        {postList}
      </div>
      <div className="comments">
        <h4>
          {click ? "Comments" : "Click the body to view comments"}
        </h4>
        {click && postComments}
      </div>
    </div>
    );
}

export default PostDetail;
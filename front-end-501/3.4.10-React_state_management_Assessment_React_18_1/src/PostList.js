import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */

function Post({ data, deletePost }) {
  return (
    <div className="post">
      {data.content.includes("http") ? (
        <img src={data.content} />
      ) : (
        <p>{data.content}</p>
      )}
      <button name="delete" onClick={() => deletePost(data)}>
        Delete
      </button>
    </div>
  );
}

function PostList({ allPosts, deletePost }) {
  return (
    <div className="post-list">
      {allPosts.map((onePost) => (
        <Post data={onePost} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default PostList;

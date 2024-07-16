import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";
import { useParams, Link} from 'react-router-dom'

export const User = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const userId = useParams().userId;

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  // TODO: Change the link below to go back to the home page.

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
        <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }
  console.log(user, "HEre")
  return (
    <section className="container">
      <PostsNav />
      {user && 
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Posts</a>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            {/* TODO: Change to display sub route content */}
            <PostList posts={user.posts} />
            <UserProfile user={user} />
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    }
    </section>
  );
};

export default User;

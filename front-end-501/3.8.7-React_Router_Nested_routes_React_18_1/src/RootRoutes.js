import React from 'react'
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import NoRoute from './NoRoute';
import About from './About';
import UserPosts from './UserPosts';
import UserPost from './UserPost';
import UserProfile from './UserProfile';

function RootRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId/posts/:postId" element={<UserPost /> } />
        <Route path="/users/:userId/posts" element={<UserPosts /> } />
        <Route path="/users/:userId/*" element={<User />}/>
        <Route path="*" element={<NoRoute />} />
  </Routes>
  )
}

export default RootRoutes

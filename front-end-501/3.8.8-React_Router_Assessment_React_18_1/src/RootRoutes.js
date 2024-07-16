import React from 'react'
import CardList from "./home/CardList";
import User from "./user/User";
import PostList from './user/PostList';
import UserProfile from './user/UserProfile';
import NotFound from './common/NotFound';
import {Routes, Route} from 'react-router-dom';

function RootRoutes() {
      /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate

    The <PostList /> component should show on the following route:
    /users/:userId/posts

    The <UserProfile /> component should show on the following route:
    /users/:userId
  */
  // const Ping = () => console.log("Test") 

  return (
    <>
        <Routes>
          <Route path="/" element ={<CardList/>}/>
          <Route path="/users/:userId/posts" element={<PostList/>}/>
          <Route path="/users/:userId" element={<>
            <UserProfile/>
            <User/>
          </>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
}

export default RootRoutes
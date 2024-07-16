import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Welcome to the home page</h1>;
}

function About() {
  return <h1>You are on the about page</h1>;
}

function Contact() {
  return <h1>Please feel free to email us</h1>;
}

function NoRoute() {
  return <h1>404 Not Found</h1>
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NoRoute/>}/>
        </Routes>
    </div>
  );
}

export default App;
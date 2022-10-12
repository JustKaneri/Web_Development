import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, Navigate } from "react-router-dom";
import Navigation from './components/Navigation';
import About from "./pages/About";
import PostIdPage from './pages/PostIdPage';
import Posts from './pages/Posts';
import "./styles/App.css";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route exact path='/posts' element={<Posts/>}/>
        <Route exact path='/posts/:id' element={<PostIdPage/>}/>
        <Route path='*' element={<Navigate to={"/posts"}/>}/>
      </Routes>
    </Router>
  )
}

export default App;

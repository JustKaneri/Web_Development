import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, Navigate } from "react-router-dom";
import Navigation from './components/Navigation';
import MyButton from './components/UI/button/MyButton';
import About from "./pages/About";
import Posts from './pages/Posts';
import "./styles/App.css";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='*' element={<Navigate to={"/posts"}/>}/>
      </Routes>
    </Router>
  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, Navigate } from "react-router-dom";
import Navigation from './components/Navigation';
import About from "./pages/About";
import PostIdPage from './pages/PostIdPage';
import Posts from './pages/Posts';
import { privatRoutes, publicRoutes } from './router/routes';
import "./styles/App.css";


function App() {

  const isAuth = false;

  return (
    <Router>
      <Navigation/>
      {isAuth
        ?  <Routes>
              {publicRoutes.map((obj)=>
                <Route exact = {obj.exact} path={obj.path} element={obj.element}/>
              )}
              {privatRoutes.map((obj)=>
                <Route exact = {obj.exact} path={obj.path} element={obj.element}/>
              )}
              <Route path='*' element={<Navigate to={"/login"}/>}/>
            </Routes>
        : <Routes>
              {publicRoutes.map((obj)=>
                <Route exact = {obj.exact} path={obj.path} element={obj.element}/>
              )}
              <Route path='*' element={<Navigate to={"/login"}/>}/>
          </Routes>
      }
    </Router>
  )
}

export default App;

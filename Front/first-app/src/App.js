import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, Navigate } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';
import { AuthContext } from './context';
import "./styles/App.css";


function App() {

  const [IsAuth,setIsAuth] = useState(false);
  const [IsLoad,setIsLoad] = useState(true);
  console.log(IsAuth);

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }

    setIsLoad(false);
    
  },[]);

  return (
    <AuthContext.Provider value={{
      IsAuth,
      setIsAuth,
      IsLoad
    }}>
      <Router>
        <Navigation/>
        <AppRouter/>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

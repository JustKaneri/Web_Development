import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, Navigate } from "react-router-dom";
import { AuthContext } from '../context';
import Loader from '../Loader/Loader';
import { privatRoutes, publicRoutes } from '../router/routes';
import "../styles/App.css";


const AppRouter = () => {

    const {IsAuth,IsLoad} = useContext(AuthContext);

    if(IsLoad){
        return <Loader/>
    }
    
    return (
        <div>
            {IsAuth
            ?  <Routes>
                    {privatRoutes.map((obj)=>
                        <Route 
                            exact = {obj.exact} 
                            path={obj.path} 
                            element={obj.element}
                            key={obj.path}
                            />
                    )}
                    <Route path='*' element={<Navigate to={"/posts"}/>}/>
                </Routes>
            : <Routes>
                    {publicRoutes.map((obj)=>
                        <Route 
                            exact = {obj.exact} 
                            path={obj.path} 
                            element={obj.element}
                            key={obj.path}
                            />
                    )}
                    <Route path='*' element={<Navigate to={"/login"}/>}/>
            </Routes>
        }
        </div>
    );
}

export default AppRouter;

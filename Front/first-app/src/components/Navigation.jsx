import React,{useContext} from 'react';
import classes from './UI/navigation.module.css';
import { Link} from "react-router-dom";
import MyButton from './UI/button/MyButton';
import { AuthContext } from '../context';

const Navigation = () => {

    const {IsAuth,setIsAuth} = useContext(AuthContext);

    const logout = () => {
        console.log('send')
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.navigation}>
            <MyButton onClick = {()=>logout()}>
                Выход 
            </MyButton>
            <Link to='/about'>Описание</Link>
            <Link to='/posts'>Посты</Link>
        </div>
    );
}

export default Navigation;

import React from 'react';
import classes from './UI/navigation.module.css';
import { Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <Link to='/about'>Описание</Link>
            <Link to='/posts'>Посты</Link>
        </div>
    );
}

export default Navigation;

import React from 'react';
import {Link} from "react-router-dom";
import s from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <Link to='/'>Main Page</Link>
            <Link to='/news'>News</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    );
};

export default Header;
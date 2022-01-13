import React, {useEffect} from 'react';
import s from '../styles/Profile.module.css'
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const Profile = () => {

    const signIn = useSelector((state) => state.signInReducer);
    const {isAuthenticated} = signIn;
    useEffect(() => {},[isAuthenticated]);

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.wrapper}>
            <p>
                OH, WOW, YOU SHOULDN'T HAVE SEEN THAT <span role='img' aria-label="funny">😨</span>
            </p>
        </div>
    );
};

export default Profile;
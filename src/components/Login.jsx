'use client'
import React from 'react'
import { UserAuth } from '../app/context/AuthContext';

const Login = () => {
    const {googleSignIn, logOut } = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
  return (

    <div onClick={handleSignIn} >Login</div>
  )
}

export default Login
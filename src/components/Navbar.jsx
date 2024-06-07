'use client';
import React from 'react';
import Link from 'next/link';
import { UserAuth } from '../app/context/AuthContext';

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();

  
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
            <ul className="flex">
                <li className="p-2 cursor-pointer">
                    <p>Home</p>
                </li>
                <li className="p-2 cursor-pointer">
                    <p>About</p>
                </li>
                {user && (
                    <li className="p-2 cursor-pointer">
                        <p>Profile</p>
                    </li>
                )}
            </ul>
            <ul className="flex">
                {!user ? (
                    <>
                        <Link href="/Login" className="p-2 cursor-pointer">
                            Login
                        </Link>
                        <li className="p-2 cursor-pointer">
                            Sign up
                        </li>
                    </>
                ) : (
                    <li onClick={handleSignOut} className="p-2 cursor-pointer">
                        Logout
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;

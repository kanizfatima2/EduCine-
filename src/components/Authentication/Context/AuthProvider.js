import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, } from 'firebase/auth';
import app from '../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //SignIn with Email and Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    //Google Login
    const provider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    //Github Login
    const githubProvider = new GithubAuthProvider();
    const GithubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // //Update User
    // const updateUser = (userInfo) => {
    //     return updateProfile(auth.currentUser, userInfo);
    // }

    //SignOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = { createUser, user, signIn, GoogleLogin, GithubLogin, loading, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
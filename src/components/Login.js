import React from 'react'
import { useDispatch } from 'react-redux';
import { UserLoggingIn } from '../actions/UserActions';
import { auth, provider } from '../firebase.utils';







export const Login = () => {

    const dispatch = useDispatch()

    const onLoginHandler = () => {
        console.log('handle logging with email & password')
    }

    const onLoginGmailHandler = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(UserLoggingIn(
                {
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
            ))
        }).catch(err => alert(err.message))

        console.log('handle login gmail ')

    }
    return (
        <div className="login_container">
            <h2>For Traveller</h2>
            <p>Join over 11 million developers, </p>
            <p>practice coding skills, prepare for </p>
            <p> interviews, and get hired. </p>
            <button onClick={onLoginHandler}>Login</button>
            <button onClick={onLoginGmailHandler}>Login with Gmail</button>
            <p>Don't have an account? <span>Sign up</span></p>
        </div >
    )
}

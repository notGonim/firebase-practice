import React from 'react'
import { HeaderContainer } from '../styles/Header_styles'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase.utils';
import { UserLoggingOut } from '../actions/UserActions';

export const Header = () => {

    const dispatch = useDispatch()



    const userLogout = () => {
        auth.signOut().then(() => {
            dispatch(UserLoggingOut())
        })
    }

    return (
        <HeaderContainer>
            <p>home</p>
            <p onClick={userLogout}>logout</p>
        </HeaderContainer>
    )
}

import React from 'react'
import { HeaderContainer } from '../styles/Header_styles'

export const Header = () => {




    const userLogout = () => {
        console.log('logout works fine')
    }

    return (
        <HeaderContainer>
            <p>home</p>
            <p onClick={userLogout}>logout</p>
        </HeaderContainer>
    )
}

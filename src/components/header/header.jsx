import Nav from './Nav/Nav'
import LoginButton from './LoginButton/LoginButton'
import LogoItem from './LogoItem/LogoItem'
import style from'./Header.module.css'
import { useState } from 'react'


const Header = () => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    return (
        <header>
            <LogoItem />
            <Nav />
            <LoginButton isAuthorized={isAuthorized} />
        </header>
    )
}


export default Header
import Nav from './Nav/Nav'
import LoginButton from './LoginButton/LoginButton'
import LogoItem from './LogoItem/LogoItem'
import style from'./Header.module.css'
import { useState } from 'react'


const Header = () => {
    const [checkAutorithation, setCheckAutorithation] = useState(false)
    return (
        <header>
            <LogoItem />
            <Nav />
            <LoginButton checkAutorithation={checkAutorithation} />
        </header>
    )
}


export default Header
import Nav from './Nav/Nav'
import LoginButton from './LoginButton/LoginButton'
import LogoItem from './LogoItem/LogoItem'
import style from'./Header.module.css'


const Header = () => {
    return (
        <header>
            <LogoItem />
            <Nav />
            <LoginButton />
        </header>
    )
}


export default Header
import style from'./Header.module.css'
import Nav from './Nav'
import LoginButton from './LoginButton'
import LogoItem from './LogoItem'


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
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav>
            <div className={style.dropdown}>
                <a className={style.dropbtn} href="">Books</a>
                <div className={style.dropdownContent}>
                    <a href="/Link">Link 1</a>
                    <a href="/Link">Link 2</a>
                    <a href="/Link">Link 3</a>
                </div>
            </div>
            <div className={style.links}>
                <Link to="/forum">Forum</Link>
                <Link to="/community">Community</Link>
                <Link to="/genre">Genre</Link>
            </div>
        </nav>
    )
}
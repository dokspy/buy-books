import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav>
            <div className={style.dropdown}>
                <a className={style.dropbtn} href="">Books</a>
                <div className={style.dropdownContent}>
                    <Link to='/link1'>Link 1</Link>
                    <Link to='/link2'>Link 2</Link>
                    <Link to='/link3'>Link 3</Link>
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
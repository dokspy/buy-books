import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav>
            <div className={style.links}>
                <Link to="/forum">Форум</Link>
                <Link to="/community">Про нас</Link>
                <Link to="/genre">Жанри</Link>
            </div>
        </nav>
    )
}

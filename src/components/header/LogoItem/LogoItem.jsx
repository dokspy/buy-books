import style from './LogoItem.module.css'
import { Link } from 'react-router-dom'

export default function LogoItem() {
    return (
        <div className={style.logo}>
            <h3><Link to='/'>Buy-Books</Link></h3>
        </div>
    )
}

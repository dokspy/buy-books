import { Link } from 'react-router-dom'
import style from './LogoItem.module.css'

export default function LogoItem() {
    return (
        <div className={style.logo}>
            <h3><Link to='/'>Buy-Books</Link></h3>
        </div>
    )
}

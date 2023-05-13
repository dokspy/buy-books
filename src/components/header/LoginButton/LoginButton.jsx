import { Link } from 'react-router-dom'
import style from './LoginButton.module.css'

export default function LoginButton() {
    return (
        <div className={style.reg}>
            <Link to="/login">Log in</Link>
        </div>
    )
}
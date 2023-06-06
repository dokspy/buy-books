import { Link } from 'react-router-dom'
import style from './LoginButton.module.css'



export default function LoginButton({ isAuthorized }) {
    return (
        <div className={style.reg}>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log in</Link>
            {isAuthorized && <Link to="/profile">Профіль</Link>}
        </div>
    )
}

import React from "react";
import style from './Login.module.css'


export const Login = () => {
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <form method="post" action="">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
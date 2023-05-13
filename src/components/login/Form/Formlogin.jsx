import React from "react";
import { Link } from "react-router-dom";
import style from "./Form.module.css"

export const Formlogin = () => {
    return (
        <form method="post" action="">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Log In</button>
            <div>
                <Link>Sign up</Link>
            </div>
        </form>
    )
}

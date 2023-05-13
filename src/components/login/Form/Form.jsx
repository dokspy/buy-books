import React from "react";
import style from "./Form.module.css"

export const Form = () => {
    return (
        <form method="post" action="">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Log In</button>
        </form>
    )
}

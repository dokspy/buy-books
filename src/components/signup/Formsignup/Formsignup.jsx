import React from "react";
import style from "./Formsignup.module.css"

export const Formsignup = () => {
    return (
        <form method="post" action="">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
        </form>
    )
}
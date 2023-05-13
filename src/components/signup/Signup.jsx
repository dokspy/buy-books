import React from "react";
import style from './Signup.module.css'

export const Signup = () => {
    return (
        <div class={style.signup}>
            <h2>Sign Up</h2>
            <form method="post" action="">
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

import React from "react";
import {Formsignup} from './Formsignup/Formsignup'
import style from './Signup.module.css'

export const Signup = () => {
    return (
        <div class={style.signup}>
            <h2>Sign Up</h2>
            <Formsignup />
        </div>
    )
}

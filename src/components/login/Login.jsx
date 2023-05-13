import React from "react";
import { Formlogin } from "./Form/Formlogin";
import style from './Login.module.css'
import { Link } from "react-router-dom";


export const Login = () => {
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Formlogin />
            
        </div>
    )
}

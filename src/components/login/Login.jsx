import React from "react";
import { Form } from "./Form/Formlogin";
import style from './Login.module.css'


export const Login = () => {
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Form />
        </div>
    )
}

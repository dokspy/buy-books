import React from "react";
import style from './Login.module.css'
import { Form } from "./Form/Form";


export const Login = () => {
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Form />
        </div>
    )
}

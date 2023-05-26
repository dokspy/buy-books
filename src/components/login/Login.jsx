import React, { useState } from 'react';
import { Formlogin } from "./Form/Formlogin";

import { checkEmailValidation, checkPasswordValidation } from '../common/validation/Validation';

import style from './Login.module.css'


const Login = () => {
    const [correctField, setCorrectField] = useState( '')

    const [emailValid, setEmailValid] = useState({
        content: '',
        status: false,

    });
    const [passwordValid, setPasswordValid] = useState({
        content: '',
        status: false,
    });
    const [validContact, setValidContact] = useState({
        email: '',
        password: '',
    })

    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Formlogin
                // signIn={signIn}
                validContact={validContact}
                setValidContact={setValidContact}
                checkEmailValidation={checkEmailValidation}
                checkPasswordValidation={checkPasswordValidation}
                emailValid={emailValid}
                correctField={correctField}
                setEmailValid={setEmailValid}
                passwordValid={passwordValid}
                setPasswordValid={setPasswordValid}
                // emailError={userLogError.email}
                // passwordError={userLogError.password}
                // userLogStatus={userLogStatus}
            />

        </div>
    )
}


export default Login;
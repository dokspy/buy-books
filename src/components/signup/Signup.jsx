import React, { useState } from 'react';
import { Formsignup } from './Formsignup/Formsignup'

import { checkEmailValidation, checkPasswordValidation } from '../common/validation/Validation';

import style from './Signup.module.css'



const Signup = () => {
    const [correctField, setCorrectField] = useState('');

    const [emailValid, setEmailValid] = useState({
        content: '',
        status: false,

    });
    const [passwordValid, setPasswordValid] = useState({
        content: '',
        status: false,
    });
    const [validContact, setValidContact] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    
    // const createUser = () => {
    //     set
    // }

    return (
        <div className={style['signup']}>
            <h2>Sign Up</h2>
            <Formsignup
                checkEmailValidation={checkEmailValidation}
                validContact={validContact}
                emailValid={emailValid}
                setValidContact={setValidContact}
                setEmailValid={setEmailValid}
                correctField={correctField}
                setCorrectField={setCorrectField}
                checkPasswordValidation={checkPasswordValidation}
                setPasswordValid={setPasswordValid}
                passwordValid={passwordValid}
                // createUser={createUser}
                // content={content}    
            />
        </div>
    )
}

export default Signup

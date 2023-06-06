import React, { useState, useEffect } from 'react';
import { Formsignup } from './Formsignup/Formsignup'

import signAction from '../../redux/actions/signAction'
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailValidation, checkPasswordValidation, checkFormLength } from '../common/validation/Validation';

import style from './Signup.module.css'



const Signup = () => {
    const [acceptOrder, setAcceptOrder] = useState(false);
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

    const dispatch = useDispatch()

    const state = useSelector((state) => state);
    const { content } = state.signStatus;


    const createUser = () => {
        setAcceptOrder(checkFormLength(setAcceptOrder, setCorrectField, emailValid.status, validContact, passwordValid.status))

    }
    
    useEffect(() => {
        if (acceptOrder) {
            dispatch(signAction.signUpAction(validContact))
        }
        setAcceptOrder(false)

    }, [acceptOrder])

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
                createUser={createUser}
                content={content}
            />
        </div>
    )
}

export default Signup

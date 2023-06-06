import React, { useEffect, useState } from 'react';
import { Formlogin } from "./Form/Formlogin";

import signAction from '../../redux/actions/signAction'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkEmailValidation, checkPasswordValidation, checkFormLength } from '../common/validation/Validation';

import style from './Login.module.css'


const Login = () => {
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
        email: '',
        password: '',
    })

    const state = useSelector((state) => state);
    const { userLog, userLogError, userLogStatus } = state.signStatus;

    const dispatch = useDispatch()

    const signIn = () => {
        setAcceptOrder(checkFormLength(setAcceptOrder, setCorrectField, emailValid.status, validContact, passwordValid.status))
    }

    useEffect(() => {
        if (acceptOrder) {
            dispatch(signAction.signInAction(validContact))
        }
        setAcceptOrder(false)

    }, [acceptOrder])

    const navigate = useNavigate();

    useEffect(() => {
        if (userLogStatus) {
            navigate("/");
        }
    }, [userLog.length]);


    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Formlogin
                signIn={signIn}
                validContact={validContact}
                setValidContact={setValidContact}
                checkEmailValidation={checkEmailValidation}
                checkPasswordValidation={checkPasswordValidation}
                emailValid={emailValid}
                correctField={correctField}
                setEmailValid={setEmailValid}
                passwordValid={passwordValid}
                setPasswordValid={setPasswordValid}
                emailError={userLogError.email}
                passwordError={userLogError.password}
                userLogStatus={userLogStatus}
            />

        </div>
    )
}


export default Login;
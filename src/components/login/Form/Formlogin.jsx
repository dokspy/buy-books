import React from 'react';
import style from "./Form.module.css"

export const Formlogin = ({
    signIn, checkEmailValidation, validContact, setValidContact, setEmailValid, emailValid,
    correctField, checkPasswordValidation, setPasswordValid, passwordValid, emailError, passwordError
}) => {
    return (
        <form method="post" action="">
            <div>
                <input type="text" name="email" placeholder="Please enter your email addres" 
                onChange={(event) => (
                    setValidContact({email: event.target.value, password: validContact.password}),
                    checkEmailValidation(setValidContact, setEmailValid, validContact)
                )}
                />
                {/* <p>{emailError.errorStatus && emailError.errorMessage}</p> */}
                {validContact.email.length <= 0 && <p>{correctField}</p>}
                <p>{validContact.email.length > 0 && emailValid.content}</p>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" 
                onChange={(event) => (
                    setValidContact({email: validContact.email, password: event.target.value}),
                    checkPasswordValidation(setPasswordValid, validContact.password)
                )}
                />
                {/* <p>{passwordError.errorStatus && passwordError.errorMessage}</p> */}
                {validContact.password.length <= 0 && <p>{correctField}</p>}
                <p>{passwordValid.content}</p>
            </div>
            <button type="submit">Log In</button>
            {/* <div>
                <Link>Sign up</Link>
            </div> */}
        </form>
    )
}

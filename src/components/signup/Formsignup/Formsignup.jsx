import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Formsignup.module.css"

export const Formsignup = ({
    checkEmailValidation, validContact, setValidContact, setEmailValid, emailValid, createUser,
    correctField, checkPasswordValidation, setPasswordValid, passwordValid, content }) => {
    return (
        <div>
            <div>
                <input onChange={(event) => setValidContact({ firstname: event.target.value, lastname: validContact.lastname, 
                email: validContact.email, password: validContact.password })}
                    type="text" name="firstname" placeholder="First Name" />
                {validContact.firstname.length <= 0 && <p>{correctField}</p>}
            </div>
            <div>
                <input onChange={(event) => setValidContact({ firstname: validContact.firstname, lastname: event.target.value, 
                email: validContact.email, password: validContact.password })}
                    type="text" name="lastname" placeholder="Last Name" />
                {validContact.lastname.length <= 0 && <p>{correctField}</p>}
            </div>
            <div>
                <input onChange={(event) => (
                    setValidContact({ firstname: validContact.firstname, lastname: validContact.lastname, 
                        email: event.target.value, password: validContact.password }),
                    checkEmailValidation(setValidContact, setEmailValid, validContact)
                )}
                    type="text" name="email" placeholder="Email" />
                {validContact.email.length <= 0 && <p>{correctField}</p>}
                <p>{emailValid.content}</p>
            </div>
            <div>
                <input onChange={(event) => (
                    setValidContact({ firstname: validContact.firstname, lastname: validContact.lastname, 
                        email: validContact.email, password: event.target.value }),
                    checkPasswordValidation(setPasswordValid, validContact.password)
                )}
                    type="password" name="password" placeholder="Password" />
                {validContact.password.length <= 0 && <p>{correctField}</p>}
                <p>{passwordValid.content}</p>
            </div>
            <div>
                    <button onClick={createUser}
                        content='Sign Up' type="submit"> Sign Up</button>
            </div>
        </div>
    )
}

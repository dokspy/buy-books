import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LogOutBtn from './LogOutBtn/LogOutBtn'
import style from './profile.module.css' 
import { useState } from 'react'

export const Profile = () => {
    let nameuser = ''
    let mail = ''
    let town

    const [] = useState()

    // dispatch = useDispatch()

    return (
        <div className={style.profile}>
            <h1>Профіль</h1>
            <img src={''} alt="Фото профілю" />
            <div class={style.info}>
                <p><strong>Ім'я:</strong> {nameuser}</p>
                <p><strong>Email:</strong> {mail}</p>
                <p><strong>Місто:</strong> {town}</p>
            </div>
            <div class={style.homeLink}>
                {/* <Link to="/">Log out</Link> */}
                <LogOutBtn />
                <Link to="/saved">Збережене</Link>
            </div>
        </div>
    )
}


    
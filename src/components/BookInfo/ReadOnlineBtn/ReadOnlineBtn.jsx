import React from 'react'
import { Link } from 'react-router-dom'
import style from './ReadOnlineBtn.module.css'


export const ReadOnlineBtn = () => {
    return (
        <div className={style['button']}>
            <Link to={'#'}>Читати онлайн</Link>
        </div>
    )
}

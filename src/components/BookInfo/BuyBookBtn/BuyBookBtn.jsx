import React from 'react';
import { Link } from 'react-router-dom';
import style from './BuyBookBtn.module.css'

export const BuyBookBtn = ({ checkBoughtBook }) => {
    return (
        <div className={style['button']}>
        {checkBoughtBook && <Link to={'#'}>Купити</Link>}
        </div>
    )
}

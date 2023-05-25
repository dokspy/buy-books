import React, { useState } from 'react'
import { BuyBookBtn } from '../BuyBookBtn/BuyBookBtn'
import { ReadOnlineBtn } from '../ReadOnlineBtn/ReadOnlineBtn'
import exmpl from '../../../pngs/exmpl.png'
import style from './ImageBook.module.css'


export const ImageBook = () => {
    const [checkBoughtBook, setCheckBoughtBook] = useState(false)
    return (
        <div className={style['img-book']}>
            <img src={exmpl} alt="book image" />
            <ReadOnlineBtn />
            <BuyBookBtn />
        </div>
    )
}

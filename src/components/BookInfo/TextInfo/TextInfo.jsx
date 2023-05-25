import React from 'react';
import { Annotation } from '../Annotation/Annotation';
import style from './TextInfo.module.css'

export const TextInfo = () => {
    return (
        <div className={style['text-overview']}>
            <h3 className='name-book'>{'nameBook'}</h3>
            <p>{'Автор'}</p>
            <p>{'Жанр'}</p>
            <div className={style['status-date']}>
                <p>{'Status'}</p>
                <p>{'Date print'}</p>
            </div>
            <Annotation />
        </div>
    )
}

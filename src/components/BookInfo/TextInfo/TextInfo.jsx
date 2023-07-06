import React from 'react';
import { Annotation } from '../Annotation/Annotation';
import style from './TextInfo.module.css'

export const TextInfo = () => {
    return (
        <div className={style['text-overview']}>
            <h3 className='name-book'>{'1984'}</h3>
            <p>{'Автор: Джордж Орвелл'}</p>
            <p>{'Жанри:  Зарубіжна фантастика, Соціальна фантастика, Література 20 століття'}</p>
            <div className={style['status-date']}>
                <p>{'Статус: Закінчена'}</p>
                <p>{'Дата випуску книги: 1949'}</p>
            </div>
            <Annotation />
        </div>
    )
}

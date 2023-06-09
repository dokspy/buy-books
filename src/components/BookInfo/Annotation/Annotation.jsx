import React from 'react';
import style from './Annotation.module.css'

export const Annotation = () => {
    return (
        <div className={style['annotation']}>
            <h4>Анотація</h4>
            <p>Книга «1984» Джорджа Оруелла — це історія самого Вінстона Сміта і його деградації,<br/>
                яка відбулася під впливом тоталітарної держави.Твір написаний в тисячу дев’ятсот <br/> 
                сорок восьмому році, тобто в назві твору автор просто переставив останні дві цифри <br/>
                місцями. Тоталітарна держава дуже небезпечна для людства і суспільства. У вигаданому <br/>
                світі головний герой знаходиться під постійним наглядом, камери знаходяться буквально <br/>
                на кожному кроці. Нібито клітка для звіра, повна відсутність свободи.Радимо читати онлайн <br/>
                 усім книгу автора Джорджа Оруелла «1984» українською мовою.</p>
        </div>
    )
}

import React from 'react';
import style from './Booksmenu.module.css'


export const Booksmenu = () => {
    return (
        <div className={style.dropdown}>
            <a className={style.dropbtn} href="">Books</a>
            <div className={style.dropdownContent}>
                <Link to='/link1'>Link 1</Link>
                <Link to='/link2'>Link 2</Link>
                <Link to='/link3'>Link 3</Link>
            </div>
        </div>
    )
}

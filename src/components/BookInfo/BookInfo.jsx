import React from 'react'
import { ImageBook } from './ImageBook/ImageBook'
import { TextInfo } from './TextInfo/TextInfo'
import styles from './BookInfo.module.css'

export const BookInfo = () => {
    return (
        <div className={styles['main']}>
            <ImageBook />
            <TextInfo />
        </div>
    )
}

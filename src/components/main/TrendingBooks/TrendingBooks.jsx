import BookItem from './../BookItem/BookItem'
import styles from './TrendingBooks.module.css'

import bookPhoto from '../../../pngs/book1.jpg'
import bookPhoto2 from '../../../pngs/book2.jpg'
import bookPhoto3 from '../../../pngs/book3.jpg' 
import bookPhoto4 from '../../../pngs/book4.jpg' 

export default function TrendingBooks() {


    return (
        <div className={styles.trendingBooks}>
            <div>
                <h2>Популярні книги</h2>
            </div>
            <div className={styles['trendingBooks-item']}>
                <BookItem bookPhoto={bookPhoto} name="Ігри в які грають люди" />
                <BookItem bookPhoto={bookPhoto2} name="1984" />
                <BookItem bookPhoto={bookPhoto3} name="День що навчив мене жити" />
                <BookItem bookPhoto={bookPhoto4} name="7 Звичок надзивачайно ефективних людей" />
            </div>
        </div>
    )
}

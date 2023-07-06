import BookItem from '../BookItem/BookItem'
import styles from './RecommendedBooks.module.css'

import bookPhoto from '../../../pngs/book1.jpg'
import bookPhoto2 from '../../../pngs/book2.jpg'
import bookPhoto3 from '../../../pngs/book3.jpg'
import bookPhoto4 from '../../../pngs/book5.png'

export default function RecommendedBooks() {
    return (
        <div className={styles.RecommendedBooks}>
            <div>
                <h2>Рекомендованні книги</h2>
            </div>
            <div className={styles['RecommendedBooks-item']}>
                <BookItem bookPhoto={bookPhoto2} name="1984" />
                <BookItem bookPhoto={bookPhoto4} name="Кафе на краю світу" />
                <BookItem bookPhoto={bookPhoto} name="Ігри в які грають люди" />
                <BookItem bookPhoto={bookPhoto3} name="День що навчив мене жити" />
            </div>
        </div>
    )
}

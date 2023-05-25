import BookItem from '../BookItem/BookItem'
import styles from './RecommendedBooks.module.css'

export default function RecommendedBooks() {
    return (
        <div className={styles.RecommendedBooks}>
            <div>
                <h2>Рекомендованні книги</h2>
            </div>
            <div className={styles['RecommendedBooks-item']}>
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            </div>
        </div>
    )
}

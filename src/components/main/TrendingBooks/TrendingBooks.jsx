import BookItem from './../BookItem/BookItem'
import styles from './TrendingBooks.module.css'

export default function TrendingBooks() {
    return (
        <div className={styles.trendingBooks}>
            <div>
                <h2>Популярні книги</h2>
            </div>
            <div className={styles['trendingBooks-item']}>
                <BookItem name="Example book" />
                <BookItem name="Example book" />
                <BookItem name="Example book" />
                <BookItem name="Example book" />
                <BookItem name="Example book" />
            </div>
        </div>
    )
}

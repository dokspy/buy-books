import BookItem from './BookItem'
import styles from './TrendingBooks.module.css'

export default function TrendingBooks() {
    return (
        <div className={styles.trendingBooks}>
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
        </div>
    )
}

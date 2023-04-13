import BookItem from './../BookItem/BookItem'
import styles from './TrendingBooks.module.css'

export default function TrendingBooks() {
    return (
        <div className={styles.trendingBooks}>
            <BookItem name="Example book" />
            <BookItem name="Example book"/>
            <BookItem name="Example book"/>
            <BookItem name="Example book"/>
            <BookItem name="Example book"/>
        </div>
    )
}

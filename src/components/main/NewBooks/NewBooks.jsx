import BookItem from '../BookItem/BookItem'
import styles from './NewBooks.module.css'

export default function NewBooks() {
    return (
        <div className={styles.newBooks}>
            <div>
                <h2>Нові книги</h2>
            </div>
            <div className={styles['newBooks-item']}>
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            <BookItem name="Example book" />
            </div>
        </div>
    )
}

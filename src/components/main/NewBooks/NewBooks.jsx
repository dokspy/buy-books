import BookItem from '../BookItem/BookItem'
import styles from './NewBooks.module.css'

import bookPhoto from '../../../pngs/bookNew1.png'
import bookPhoto2 from '../../../pngs/bookNew2.png'
import bookPhoto3 from '../../../pngs/boookNew3.jpg'
import bookPhoto4 from '../../../pngs/book5.png'

export default function NewBooks() {
    return (
        <div className={styles.newBooks}>
            <div>
                <h2>Нові книги</h2>
            </div>
            <div className={styles['newBooks-item']}>
            <BookItem bookPhoto={bookPhoto2} name=" Тихий орендар" />
                <BookItem bookPhoto={bookPhoto4} name="Кафе на краю світу" />
                <BookItem bookPhoto={bookPhoto} name="Локвуд і Ко" />
                <BookItem bookPhoto={bookPhoto3} name="Старша Едда" />
            </div>
        </div>
    )
}

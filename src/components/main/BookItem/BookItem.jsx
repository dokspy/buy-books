import { Image } from "../Image"
import  styles from './BookItem.module.css'

const BookItem = ({ name , bookPhoto }) => {
    return (
        <div className={styles['bookItem']}>
            <Image bookPhoto={bookPhoto} />
            <div>{name}</div>
        </div>
    )
}

export default BookItem

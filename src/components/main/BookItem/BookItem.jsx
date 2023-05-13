import { Image } from "../Image"
import  styles from './BookItem.module.css'

const BookItem = ({ name }) => {
    return (
        <div className={styles['bookItem']}>
            <Image />
            <div>{name}</div>
        </div>
    )
}

export default BookItem

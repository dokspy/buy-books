import Image from "../Image"
import  styles from './BookItem.module.css'

const BookItem = (props) => {
    return (
        <div className={styles.bookItem}>
            <Image />
            <div>{props.name}</div>
        </div>
    )
}

export default BookItem
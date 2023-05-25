import { Link } from 'react-router-dom'
import style from './Book.module.css'


export const Book = () => {
  return (
    <div className="book">
      <Link to={"book/book1.1.txt"} target="_blank">
        <img src="img/book1.jpg" alt="Книга 1" />
        <h3>Назва книги 1</h3></Link>
      <p>Опис книги 1</p>
      <Link to="#" class="btn">Купити</Link>
    </div>
  )
}



import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav>
            <div className={style.dropdown}>
                <a className={style.dropbtn} href="">Books</a>
                <div className={style.dropdownContent}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div><a href="">Forum</a></div>
            <div><a href="">Community</a></div>
            <div><a href="">Janr</a></div>
        </nav>
    )
}
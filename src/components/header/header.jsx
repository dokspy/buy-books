import './header.css'


const Header = () => {
    return (
        <header>
            <div className="logo"></div>
            <nav>
                <div className="dropdown">
                    <a className="dropbtn" href="">Books</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div><a href="">Forum</a></div>
                <div><a href="">Community</a></div>
                <div><a href="">Janr</a></div>
            </nav>
            <div className="reg"><a href="">Log in</a></div>
        </header>
    )
}


export default Header
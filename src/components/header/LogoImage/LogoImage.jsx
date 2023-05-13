import { Link } from 'react-router-dom'
import logo5 from './../../../pngs/logo/logo5.png'
import style from './LogoImage.module.css'

const LogoImage = () => {
    return <Link to='/main'><img src={logo5} alt="" width={120} /></Link>
}

export default LogoImage
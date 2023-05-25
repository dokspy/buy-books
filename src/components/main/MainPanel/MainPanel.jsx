import NewBooks from '../NewBooks/NewBooks'
import RecommendedBooks from '../RecommendedBooks/RecommendedBooks'
import Trend from './../TrendingBooks/TrendingBooks'
import styles from './MainPanel.module.css'

const MainPanel = () => {
    return (
        <div className={styles['main-panel']}>
            <Trend />
            <RecommendedBooks />
            <NewBooks />
        </div>
    )
}

export default MainPanel
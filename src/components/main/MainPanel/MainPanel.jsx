import Trend from "./../TrendingBooks/TrendingBooks"
import styles from './MainPanel.module.css'

const MainPanel = () => {
    return (
        <div className={styles['main-panel']}>
            <Trend />
        </div>
    )
}

export default MainPanel
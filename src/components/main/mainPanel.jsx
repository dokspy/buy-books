import Trend from "./TrendingBooks"
import styles from './MainPanel.module.css'

const MainPanel = () => {
    return (
        <div className={styles.mainPanel}>
            <Trend />
        </div>
    )
}

export default MainPanel
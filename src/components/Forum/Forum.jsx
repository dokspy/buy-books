import React from 'react';

import styles from './Forum.module.css'

const Forum = () => {
    return(
    <div className={styles['forum']}>
        <div className={styles['header-forum']}>
        </div>
        <div className={styles['topic']}>
            <h3>TopicName</h3>
        </div>
    </div>
    )
}

export default Forum;

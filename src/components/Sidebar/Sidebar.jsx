import React from "react";
import styles from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={`${styles.sidebar} ${props.sidebar && `${styles.sidebar} ${styles.sidebarOpen}`}`} >
            <div className={styles.content}>
            <li>Mage</li>
            <li>Warrrior</li>
            <li>Assasion</li>
            <li>Noob</li>
            <li>Tank</li>
            </div>
        </div>
    )
}

export default Sidebar
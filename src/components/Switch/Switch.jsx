import React from "react";
import styles from './Switch.module.css'

const Switch = (props) => {
    return (
        <label className={styles.switch} >
            <input type="checkbox" checked={props.theme} onChange={props.changeTheme} />
            <span className={styles.slider}/>
        </label>
    )
}

export default Switch
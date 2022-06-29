import React from "react";
import styles from './Card.module.css'


const Card = (props) => {
    console.log(props.champion.tags);

    return (
        <div className={styles.wrapper} >
            <h2>{props.champion.name}</h2>
            <span>{props.champion.tags[0]} {props.champion.tags[1]}</span>
            <p>{props.champion.title}</p>
        </div>
    )
}

export default Card
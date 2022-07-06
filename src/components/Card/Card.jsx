import React from "react";
import styles from './Card.module.css'


const Card = (props) => {

  return (
   <div className={styles.border}>
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <h2>{props.champion.name}</h2> 
            <span className={styles.tags}>
              {props.champion.tags.join(' ')}
            </span> 
            <p>{props.champion.title}</p>
        </div>  
        <img className={styles.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`} alt="" />
    </div>
    </div>
  )
}

export default Card
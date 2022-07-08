import React, { useState } from "react";
import styles from './Card.module.css'
import sword from '../assets/img/sword.svg'
import shield from '../assets/img/shield.svg'
import star from '../assets/img/star.svg'
import magic from '../assets/img/magic.svg'

const Card = (props) => {

  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const changeCardState = () => {
    if (isCardFlipped) {
      setIsCardFlipped(false)

    } else {
      setIsCardFlipped(true)
    }
  }

  // Если мне нужно заменить значение на противоположное в случае true/false, тогда (prevState => !prevState)

  // const [isCardFlipped, setIsCardFlipped] = useState(false)
  // setIsCardFlipped((prevState) => !prevState)


  return (
    <div className={styles.border}>
      <div className={styles.wrapper} onClick={changeCardState}>

      {
        isCardFlipped
        ? <div className={styles.contentBack}>
            <img className={styles.sprite} src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${props.champion.id}.png`}/>
            <div>
              <span className={styles.tags}>
                <img className={styles.icons} src={sword}/> Attack: {props.champion.info.attack}
              </span><br/>

              <span className={styles.tags}>
                <img className={styles.icons} src={shield}/>Defense: {props.champion.info.defense}
              </span><br/>

              <span className={styles.tags}>
                <img className={styles.icons} src={star}/>Difficulty: {props.champion.info.difficulty}
              </span><br/>
              
              <span className={styles.tags}>
                <img className={styles.icons} src={magic}/>Magic: {props.champion.info.magic}
              </span><br/>
            </div>
            <p className={styles.discription}>{props.champion.blurb}</p>
          </div>  
        : <>
            <div className={styles.content}>
              <h2>{props.champion.name}</h2> 
              <span className={styles.tags}>
                {props.champion.tags.join(' ')}
              </span> 
              <p>{props.champion.title}</p>
            </div>  
            <img className={styles.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`} alt="" />
          </>
      }
      </div>
    </div>
  )
}

export default Card
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
      // event.currentTarget.classList.remove(styles.cardFlip)
      setIsCardFlipped(false)

    } else {
      // event.currentTarget.classList.add(styles.cardFront)
      setIsCardFlipped(true)
    }
  }

  // Если мне нужно заменить значение на противоположное в случае true/false, тогда (prevState => !prevState)

  // const [isCardFlipped, setIsCardFlipped] = useState(false)
  // setIsCardFlipped((prevState) => !prevState)


  return (
    <div className={styles.border} onClick={changeCardState}>
      <div className={styles.wrapper} >

      {
        isCardFlipped
        ? <div className={styles.contentBack}>
            <img className={styles.sprite} src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${props.champion.id}.png`}/>
            <div className={styles.characters}>
              <div className={styles.character}>
              <img className={styles.icons} src={sword}/>
                <div className={styles.charStats}>
                  <span>Attack:</span>
                  <span>{props.champion.info.attack}</span>
                </div>
              </div>

              <div className={styles.character}>
                <img className={styles.icons} src={shield}/>
                <div className={styles.charStats}>
                  <span> Defense:</span>
                  <span>{props.champion.info.defense}</span>
                </div>
              </div>

              <div className={styles.character}>
                <img className={styles.icons} src={star}/>
                <div className={styles.charStats}>
                  <span>Difficulty:</span>
                  <span>{props.champion.info.difficulty}</span>
                </div>          
              </div>
              
              <div className={styles.character}>
                <img className={styles.icons} src={magic}/>
                <div className={styles.charStats}>
                  <span>Magic:</span>
                  <span>{props.champion.info.magic}</span>
                </div>  
              </div>
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
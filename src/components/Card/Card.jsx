import React from "react";
import styles from './Card.module.css'


const Card = (props) => {
  console.log(props.champion.id);
  
//   // Если с кавычкой, то сделать после кавычки с маленькой буквы

//   // name . ` " "

//   const name = props.champion.name
  
//   const formatName = () => {
//     if (name.includes("\'")) {
//       const replaced = name.replace(/[']/g, '')
//       const firstLetter = replaced.slice(0,1)
//       const word = replaced.slice(1).toLowerCase()
//       return `${firstLetter}${word}`
//     } else {
//       return name.replace(/[\s.]/g, '')
//     }
//   }

//   formatName()
      
  return (
    <div className={styles.wrapper} >
        <div className={styles.content}>
            <h2>{props.champion.name}</h2>
            <span>{props.champion.tags[0]} {props.champion.tags[1]}</span>
            <p>{props.champion.title}</p>
        </div>
        <img className={styles.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`} alt="" />
        {/* <div className={styles.darkEnd} ></div> */}
    </div>
  )
}

export default Card
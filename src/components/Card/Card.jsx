import React from "react";
import styles from './Card.module.css'


const Card = (props) => {
  // console.log(props.champion.name);
  console.log(props.champion);

  
//   // Если с кавычкой, то сделать после кавычки с маленькой буквы

//   // name . ` " "

  // const name = props.champion.name
  
  // (name = Kha'zix  id = Khazix, name = Kog'Maw id = KogMaw) 

  // const formatName = () => {
  //   if (name.includes("\'")) {
  //     const replaced = name.replace(/[']/g, '')
  //     const firstLetter = replaced.slice(0,1)
  //     const word = replaced.slice(1).toLowerCase()
  //     return `${firstLetter}${word}`
  //   } 
  //   else {
  //     return name.replace(/[\s.]/g, '')
  //   }
  // }

  // formatName()



const truTag = props.champion.tags.toString().replace(/[,]/g, ' ')     

// const truTag = props.champion.tags.toString().toLowerCase().replace(/[,]/g, ' ')     

  return (
    <div className={styles.wrapper} >
        <div className={styles.content}>
            <h2>{props.champion.name}</h2>
            <span>{truTag}</span>
            {/* <span>{props.champion.tags[0]} {props.champion.tags[1]}</span> */}
            <p>{props.champion.title}</p>
        </div>
        <img className={styles.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`} alt="" />
        {/* <img className={styles.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${formatName()}_0.jpg`} alt="" /> */}
    </div>
  )
}

export default Card
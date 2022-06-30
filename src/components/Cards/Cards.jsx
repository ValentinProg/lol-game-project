import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import axios from "axios";

const Cards = () => {
  const [champions, setChampions] = useState([]);

  // const getChampions = async () => {
  //   await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  // }

  // api_key=RGAPI-34fd58b9-503d-45aa-889f-12e79562406c
  
  const getChampions = async () => {
    await axios
      .get("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
      .then((response) => setChampions(Object.values(response.data.data)));
  };

  useEffect(() => {
    getChampions();
  }, []);

  return (
    <section className={styles.wrapper}>
      {champions.map((champion) => {
        return <Card champion={champion} key={champion.key} />;
      })}
    </section>
  );
};

export default Cards;

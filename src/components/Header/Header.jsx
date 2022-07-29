import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";

// import { ReactComponent as Logo } from '../assets/img/logo.svg'

const Header = (props) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.burger} onClick={props.openSidebar}>
        <img className={styles.icon} src={menu} />
      </div>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} />
      </div>
    </header>
  );
};

export default Header;

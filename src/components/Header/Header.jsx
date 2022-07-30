import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import Switch from "../Switch/Switch";

// import { ReactComponent as Logo } from '../assets/img/logo.svg'

const Header = (props) => {
  return (
    <header 
    // className={styles.wrapper}
    className={`${styles.wrapper} ${props.theme && `${styles.wrapper} ${styles.wrapperLight}`}`}
    >
      <div className={styles.burger} onClick={props.openSidebar}>
        <img className={styles.icon} src={menu} />
      </div>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} />
      </div>
      <Switch changeTheme={props.changeTheme} theme={props.theme}/>
    </header>
  );
};

export default Header;

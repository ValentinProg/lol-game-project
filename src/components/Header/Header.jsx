import React from 'react';
import styles from './Header.module.css'
import logo from '../assets/img/logo.svg'
// import { ReactComponent as Logo } from '../assets/img/logo.svg'


const Header = () => {
  return (
  
    <header className={styles.wrapper}>
      <div className={styles.content}>
        {/* <button>Button</button> */}
        <img className={styles.logo} src={logo}/>
        {/* <Logo width='20px' height='20px'/> */}
      </div>
    </header>
    
  );
};

export default Header;
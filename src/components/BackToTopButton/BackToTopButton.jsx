import React from "react";
import {useEffect, useState} from "react";
import styles from './BackToTopButton.module.css'
import arrow from "../assets/img/arrow.svg";


const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return <div>
        {backToTopButton && (
            <div className={styles.button} onClick={scrollUp}>
                <img className={styles.arrow} src={arrow} />
            </div>
        )}
    </div>
}

export default BackToTopButton
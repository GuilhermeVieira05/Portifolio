import React from "react";
import styles from "./index.module.scss"

interface CardTechType{
    techName: string
    techImage: React.ReactNode
}

const CardTech: React.FC<CardTechType> = (props) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.image}>
                {props.techImage}
            </div>
            <p className={styles.tech}>{props.techName}</p>
        </div>
    )
}

export default CardTech
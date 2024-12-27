import styles from "./index.module.scss"

interface CardProjectProps{
    image: string
    title: string
    desc: string
    link: string
}

const CardProject: React.FC<CardProjectProps> = (props)=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>

                <a className={styles.button} href={props.link}>Saiba Mais</a>

            </div>
        </>
    )
}

export default CardProject
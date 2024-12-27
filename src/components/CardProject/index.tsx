import { ReactNode } from "react";
import styles from "./index.module.scss";

interface CardProjectProps {
  image: string;
  title: string;
  category: string;
  desc: string;
  link: string;
  technologies?: ReactNode[];
}

const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  category,
  desc,
  link,
  technologies,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{desc}</p>
        <div className={styles.technologies}>
          {technologies?.map((tech) => (
            <p className={styles.tech}>{tech}</p>
          ))}
        </div>
        <div className={styles.buttonContainer}>
            <a className={styles.button} href={link} target="_blank" rel="noopener noreferrer">
             Saiba Mais
            </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
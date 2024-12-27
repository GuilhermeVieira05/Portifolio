import styles from "./Footer.module.scss"; // Importando o módulo SASS

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCopyright}>
        <p>&copy; 2024 Guilherme. Todos os direitos reservados.</p>
      </div>
      
    </div>
  );
}

export default Footer;
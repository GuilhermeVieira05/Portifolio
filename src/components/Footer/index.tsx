import styles from "./Footer.module.scss"; // Importando o módulo SASS

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.waveTop}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c120,22,240,22,360,0S600,2,720,24s240,22,360,0S1200,2,1200,2V0Z"
            fill="var(--text-color)" // Onda utilizando a cor do texto
          ></path>
        </svg>
      </div>

      {/* Conteúdo do Footer */}
      <div className={styles.footerContent}>
        {/* Coluna 1 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Sobre a Voogle</h2>
          <ul>
            <li>Quem Somos</li>
            <li>Fale Conosco</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Redes Sociais</h2>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Tipos de Seguro</h2>
          <ul>
            <li>Seguro 1</li>
            <li>Seguro 2</li>
            <li>Seguro 3</li>
            <li>Seguro 4</li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Privacidade</h2>
          <ul>
            <li>Política de Segurança</li>
            <li>Segurança</li>
            <li>Termos de Uso</li>
          </ul>
        </div>

        {/* Coluna 5 */}
        <div className={styles.column}>
          <h2 className={styles.title}>Sobre a plataforma</h2>
          <ul>
            <li>Perguntas Frequentes</li>
          </ul>
        </div>
      </div>

      {/* Rodapé com Copyright */}
      <div className={styles.footerCopyright}>
        <p>&copy; 2024 Voogle. Todos os direitos reservados.</p>
      </div>
      
    </div>
  );
}

export default Footer;
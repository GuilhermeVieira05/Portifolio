import React, { useState } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  // Estado para controlar a visibilidade do menu em telas pequenas
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={!isScrolled ? styles.main : styles.mainScrolled}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a className="navbar-brand"></a>
          <h1>Guilherme Vieira</h1>
        </div>

        {/* Menu principal */}
        <div className={`${styles.mainMenu} ${isMenuOpen ? styles.open : ""}`}>
          <a href="#">Home</a>
          <a href="#exp">Experiência</a>
          <a href="#skills">Skills</a>
          <a href="#sobre">Sobre</a>
          <a href="#project">Projetos</a>
          <a href="#contact">Contato</a>
        </div>

        {/* Botão de menu para telas pequenas */}
        <div className={styles.menuButton} onClick={toggleMenu}>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
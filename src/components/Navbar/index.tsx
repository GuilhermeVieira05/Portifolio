import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"

interface NavbarProps{
  isScrolled: boolean
}

const Navbar: React.FC<NavbarProps> = ({isScrolled}) => {
    return (
      <div className={!isScrolled ? styles.main : styles.mainScrolled}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a className="navbar-brand">
            </a>
            <h1>Guilherme Vieira</h1>
          </div>
  
          <div className={styles.mainMenu}>
            <a href="">Início</a>
            <a href="">Experiência</a>
            <a href="">Skills</a>
            <a href="">Sobre</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
          </div>
        </div>
      </div>
    );
}

export default Navbar
  
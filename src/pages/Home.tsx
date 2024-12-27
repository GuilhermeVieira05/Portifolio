import {useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/styles/Home.module.scss"
import profileImg from "../assets/imgs/fotoColacao.jpg"
import favicon from "../assets/imgs/favicon.png"
import CardTech from "../components/CardTech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJava, faJs, faPython, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import {faDatabase, faArrowAltCircleDown, faEnvelope, faLeaf} from "@fortawesome/free-solid-svg-icons"
import 'aos/dist/aos.css';
import AOS from "aos";
import useScrolled from "../hooks/useScroll";
import curriculo from "../assets/Currículo - Guilherme de Almeida Rocha Vieira.pdf"
import CardProject from "../components/CardProject";
import useDocumentTitle from "../hooks/useTitle";
import useFavicon from "../hooks/useFavicon";

export default function Home(){

    const isScrolled = useScrolled()
    useDocumentTitle("GuilhermeVieira")
    useFavicon(favicon)

    useEffect(() => {
        const handleScroll = () => {
          let offset = window.pageYOffset;
          const parallax = document.querySelector(".parallax");
      
          // Verificando se o elemento existe e se é um HTMLElement
          if (parallax && parallax instanceof HTMLElement) {
            parallax.style.backgroundPositionY = offset * 0.5 + "px"; 
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        // Remover o event listener na desmontagem do componente
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
          once: false, 
          offset: 100, // Distância do topo da tela para ativar a animação (em pixels)
            delay: 200,// Se a animação deve acontecer apenas uma vez
        });
      }, []);



    return(
        <>
            <Navbar
            isScrolled = {isScrolled}
            />
            <div className={styles.main}>
                <section id="profile" className={styles.profile}>
                    <div className={styles.desc}>
                        <span className={styles.title}>Software Engineer</span>
                        <p>Meu nome é Guilherme, sou estudante do curso de Engenharia de Software na Puc Minas. Sou um entusiasta da área de tecnologia. Adoro estudar e estar me aprofundando na área da programação. </p>
                        <a 
                        className={styles.cButton}
                        href={curriculo}
                        download
                        ><FontAwesomeIcon icon={faArrowAltCircleDown}/> Curriculum</a>
                    </div>
                    <div className={styles.image}>
                        <img src={profileImg} alt="Foto de Perfil" />
                    </div>

                    <div className={`${styles.arrow} animate-bounce`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"  /* Define a largura */
                        height="24" /* Define a altura */
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </div>
                </section>

                <div className={styles.parallax}></div>

                <h2>Experiências</h2>
                <section id="exp" className={styles.exp}>
                    <div 
                    data-aos="fade-right" 
                    data-aos-duration="2000"
                    className={styles.timelineItem}
                    >
                        <div className={styles.timelineDate}>2024</div>
                        <div className={styles.timelineContent}>
                            <h3>Freelancer - Desenvolvimento Web</h3>
                            <p>Desenvolvi uma página web personalizada para um cliente, atendendo às suas necessidades específicas de design e funcionalidade, utilizando React, TypeScript e Tailwind.</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                    className={styles.timelineItem}
                    >
                        <div className={styles.timelineDate}>2024</div>
                        <div className={styles.timelineContent}>
                            <h3>Projeto Destaque</h3>
                            <p>Recebi o prêmio de Melhor Projeto Interdisciplinar do Primeiro Período e o Segundo Melhor Projeto Interdisciplinar entre todos os períodos do curso de Engenharia de Software. </p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                    className={styles.timelineItem}
                    >
                        <div className={styles.timelineDate}>2024</div>
                        <div className={styles.timelineContent}>
                            <h3>Destaque Acadêmico</h3>
                            <p>Recebi o destaque acadêmico do Primeiro Período do curso de Engenharia de Software.</p>
                        </div>
                    </div>
                </section>

                <div className={styles.parallax}></div>

                <h2 id="skills">Habilidades Técnicas</h2>
                <section className={styles.tech}>
                    <div 
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    >
                        <CardTech
                        techName="React"
                        techImage={<FontAwesomeIcon icon={faReact} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <CardTech
                        techName="Java"
                        techImage={<FontAwesomeIcon icon={faJava} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <CardTech
                        techName="TypeScript"
                        techImage={<FontAwesomeIcon icon={faJs} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <CardTech
                        techName="SQL Server"
                        techImage={<FontAwesomeIcon icon={faDatabase} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <CardTech
                        techName="Python"
                        techImage={<FontAwesomeIcon icon={faPython} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <CardTech
                        techName="Git / GitHub"
                        techImage={<FontAwesomeIcon icon={faGithub} size="2x" />}
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <CardTech
                        techName="SpringBoot"
                        techImage={<FontAwesomeIcon icon={faLeaf} size="2x" />}
                        />
                    </div>
                    
                    
                </section>

                <div className={styles.parallax}></div>

                <h2 id="sobre" className={styles.conheca}>Conheca um Pouco</h2>
                <h2 className={styles.sobre}>Sobre Mim</h2>
                <section className={styles.about}>
                <div 
                className={styles.info}
                >
                    <p data-aos="fade-right">
                        Olá, meu nome é Guilherme de Almeida Rocha Vieira e sou estudante de Engenharia de Software na PUC Minas.
                        Apaixonado por tecnologia e programação, tenho me dedicado a aprender e aplicar novas ferramentas e tecnologias.
                        Tenho experiência no desenvolvimento de sistemas web e estou sempre em busca de novos desafios para crescer na área de TI.
                    </p>
                    <p data-aos="fade-right">
                        Meu objetivo é aplicar esses conhecimentos para criar soluções inovadoras, eficientes e que façam a diferença no mundo.
                    </p>

                    <div className={styles.softSkills}>
                        <h3 className={styles.softTitle}>Soft Skills</h3>
                        <ul>
                            <li data-aos="flip-up" data-aos-duration="3000">Comunicação</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Trabalho em Equipe</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Disciplina</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Responsável</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Liderança</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Proatividade</li>
                            <li data-aos="flip-up" data-aos-duration="3000">Autoditata </li>
                        </ul>
                    </div>
                    
                </div>
                <div 
                data-aos="fade-left"
                data-aos-duration="3000"
                className={styles.infoImage}
                >
                    <img src="https://cdn.pixabay.com/photo/2017/05/17/15/08/ransomware-2321110_1280.jpg" alt="" />
                </div>
                </section>

                <div className={styles.parallax}></div>

                <h2>Projetos</h2>
                <section id="project" className={styles.project}>
                <CardProject
                    image={profileImg}
                    title="Tread Skateboard"
                    category="E-Commerce"
                    desc="Desenvolvido para oferecer uma experiência única, o site reflete a essência do skateboarding com design intuitivo e uma plataforma de compras."
                    link="https://example.com"
                    technologies={[
                        <FontAwesomeIcon icon={faJava} size="2x"/>,
                        <FontAwesomeIcon icon={faPython} size="2x"/>,
                        <FontAwesomeIcon icon={faJs} size="2x"/>
                    ]}
                    />
                </section>

                <div className={styles.parallax}></div>

                <h2>Entre em contato</h2>
                <section id="contact" className={styles.contactSection}>
                    <ul className={styles.contactList}>
                        <li>
                            <a href="mailto:guilhermearv3@gmail.com" className={styles.contactItem}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>Email</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/guilherme-arvieira/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/GuilhermeVieira05" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5531986991214" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>WhatsApp</span>
                            </a>
                        </li>
                    </ul>
                </section>


            </div>
            <Footer/>
        </>
    )
}


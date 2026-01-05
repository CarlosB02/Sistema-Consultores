import React from 'react';
import styles from './Footer.module.css';
import imgLivro from '../assets/livro_reclamacoes.png';
import imgDgert from '../assets/dgert.png';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <img src={logo} alt="Sistema Consultores" className={styles.logo} />
                    <p className={styles.slogan}>Transformamos sonhos em planos e resultados</p>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.colTitle}>CONTACTOS</h3>
                    <p className={styles.contactInfo}>
                        <strong>Email:</strong> sistema@sistemaconsultores.pt<br />
                        <strong>Email:</strong> formacao@sistemaconsultores.pt<br />
                        <strong>Tel:</strong> +351 232 400 360 <span className={styles.note}>(a)</span><br />
                        <strong>Tlm:</strong> +351 931 177 336 <span className={styles.note}>(b)</span>
                    </p>
                    <p className={styles.smallNote}>
                        (a) Chamada para a rede fixa nacional.<br />
                        (b) Chamada para a rede móvel nacional.
                    </p>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Sistema Consultores. Todos os direitos reservados.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.colTitle}>Serviços</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#">Quem somos!</a></li>
                        <li><a href="#">Projetos de Investimento</a></li>
                        <li><a href="#">Criação de Empresas</a></li>
                        <li><a href="#">Marketing</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.colTitle}>Áreas de Atuação</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#">PORTUGAL 2020 / 2030</a></li>
                        <li><a href="#">PDR 2020</a></li>
                        <li><a href="#">Certificação de Empresas</a></li>
                        <li><a href="#">Oferta Formativa</a></li>
                        <li><a href="#">Plataforma E-learning</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <div className={styles.badges}>
                        <img src={imgLivro} alt="Livro de Reclamações" className={styles.badgeLivro} />
                        <img src={imgDgert} alt="DGERT Certificada" className={styles.badgeDgert} />
                    </div>
                    <div className={styles.legalText}>
                        <p>Política de privacidade e política de cookies</p>
                        <p className={styles.ralText}>
                            Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Centro de Arbitragem de Conflitos de Consumo de Lisboa. Mais informações em Portal do Consumidor www.consumidor.pt.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

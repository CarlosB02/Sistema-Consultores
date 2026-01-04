import React from 'react';
import styles from './IncentivesBanner.module.css';

const IncentivesBanner: React.FC = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h2 className={styles.title}>Sistemas de Incentivos - Candidaturas abertas!</h2>
                <p className={styles.subtitle}>Fazemos enquadramento gratuito. Consulte os nossos técnicos!</p>
                <a href="#contactos" className={styles.ctaButton}>Fale Connosco</a>
            </div>
        </section>
    );
};

export default IncentivesBanner;

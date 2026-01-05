import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './IncentivesBanner.module.css';
import Reveal from './Reveal';

const IncentivesBanner: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.banner}>
            <Reveal width="100%">
                <div className={styles.container}>
                    <h2 className={styles.title}>Sistemas de Incentivos - Candidaturas abertas!</h2>
                    <p className={styles.subtitle}>Fazemos enquadramento gratuito. Consulte os nossos técnicos!</p>
                    <button className={styles.ctaButton} onClick={() => navigate('/incentivos-portugal-2020')}>
                        Ver Oportunidades
                    </button>
                </div>
            </Reveal>
        </section>
    );
};

export default IncentivesBanner;

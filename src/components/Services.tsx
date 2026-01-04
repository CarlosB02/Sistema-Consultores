import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

import imgEntrepreneurship from '../assets/service-entrepreneurship.png';
import imgManagement from '../assets/service-management.png';
import imgTraining from '../assets/service-training.png';
import imgIncentives from '../assets/service-incentives.png';
import imgAccounting from '../assets/service-accounting.png';
import imgElearning from '../assets/service-elearning.png';

const services = [
    {
        title: "Empreendedorismo",
        desc: "Apoio estratégico à criação e estruturação de novos negócios e startups.",
        image: imgEntrepreneurship
    },
    {
        title: "Sistemas de Gestão",
        desc: "Implementação e otimização de processos para máxima eficiência operacional.",
        image: imgManagement
    },
    {
        title: "Formação Profissional",
        desc: "Desenvolvimento de competências com planos formativos certificados.",
        image: imgTraining
    },
    {
        title: "Incentivos Financeiros",
        desc: "Consultoria especializada em candidaturas ao Portugal 2020 e PDR 2020.",
        image: imgIncentives
    },
    {
        title: "Contabilidade",
        desc: "Rigor e transparência na gestão fiscal e contabilística da sua empresa.",
        image: imgAccounting,
        link: "/contabilidade"
    },
    {
        title: "E-Learning",
        desc: "Plataforma digital de aprendizagem flexível e adaptada ao seu ritmo.",
        image: imgElearning
    },
];

const Services: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.section} id="services">
            <h2 className={styles.sectionTitle}>Áreas de Atuação</h2>
            <p className={styles.sectionSubtitle}>
                Soluções integradas para potenciar a competitividade e sustentabilidade da sua organização.
            </p>
            <div className={styles.grid}>
                {services.map((s, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${s.image})`,
                            cursor: s.link ? 'pointer' : 'default'
                        }}
                        onClick={() => s.link && navigate(s.link)}
                    >
                        <div className={styles.overlay}>
                            <h3>{s.title}</h3>
                            <div className={styles.details}>
                                <div className={styles.separator}></div>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

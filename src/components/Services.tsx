import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Services.module.css';
import Reveal from './Reveal';

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
        image: imgEntrepreneurship,
        link: "/incentivos-portugal-2020#empreendedorismo",
        cta: "Criar Negócio"
    },
    {
        title: "Sistemas de Gestão",
        desc: "Implementação e otimização de processos para máxima eficiência operacional.",
        image: imgManagement,
        link: "/certificacoes",
        cta: "Ver Soluções"
    },
    {
        title: "Formação Profissional",
        desc: "Desenvolvimento de competências com planos formativos certificados.",
        image: imgTraining,
        link: "/oferta-formativa#presencial",
        cta: "Consultar Oferta"
    },
    {
        title: "Incentivos Financeiros",
        desc: "Consultoria especializada em candidaturas ao Portugal 2020 e PDR 2020.",
        image: imgIncentives,
        link: "/incentivos-portugal-2020",
        cta: "Pedir Análise"
    },
    {
        title: "Contabilidade",
        desc: "Rigor e transparência na gestão fiscal e contabilística da sua empresa.",
        image: imgAccounting,
        link: "/contabilidade",
        cta: "Nossos Serviços"
    },
    {
        title: "E-Learning",
        desc: "Plataforma digital de aprendizagem flexível e adaptada ao seu ritmo.",
        image: imgElearning,
        link: "/oferta-formativa#elearning",
        cta: "Aceder Cursos"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.section} id="services">
            <Reveal width="100%" direction="up">
                <div style={{ textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle}>Áreas de Atuação</h2>
                    <p className={styles.sectionSubtitle}>
                        Soluções integradas para potenciar a competitividade e sustentabilidade da sua organização.
                    </p>
                </div>
            </Reveal>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {services.map((s, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        variants={itemVariants}
                        style={{
                            backgroundImage: `url(${s.image})`,
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            if (s.link) {
                                if (s.link.includes('#')) {
                                    const [path, hash] = s.link.split('#');
                                    navigate(path);
                                    setTimeout(() => {
                                        const element = document.getElementById(hash);
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                } else {
                                    navigate(s.link);
                                }
                            }
                        }}
                    >
                        <div className={styles.overlay}>
                            <h3>{s.title}</h3>
                            <div className={styles.details}>
                                <div className={styles.separator}></div>
                                <p>{s.desc}</p>
                                <button className={styles.ctaButton}>
                                    {s.cta || "Saber Mais"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;

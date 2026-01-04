import React, { useEffect } from 'react';
import styles from './Accounting.module.css';

import heroBg from '../assets/accounting_hero_bg.png';
import imgOrganized from '../assets/accounting_organized_service.png';
import imgHR from '../assets/hr_management_service.png';
import imgAssets from '../assets/asset_management_service.png';
import imgCommercial from '../assets/commercial_management_service.png';
import imgFiscal from '../assets/fiscal_advice_service.png';
import imgConsulting from '../assets/external_consulting_service.png';
// Removed imgDashboard import as it is replaced by AnimatedDashboard
import AnimatedDashboard from '../components/AnimatedDashboard';

const Accounting: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Contabilidade Organizada",
            desc: "Muito mais que cumprir obrigações fiscais. A nossa contabilidade analítica e simplificada oferece uma visão clara da saúde financeira da sua empresa.",
            image: imgOrganized
        },
        {
            title: "Gestão de Recursos Humanos",
            desc: "Processamento salarial rigoroso, gestão de contratos e cumprimento de todas as obrigações laborais, garantindo a satisfação da sua equipa.",
            image: imgHR
        },
        {
            title: "Gestão de Ativos",
            desc: "Controlo total sobre o seu património. Acompanhamento de depreciações, abates e valorizações para uma gestão patrimonial eficiente.",
            image: imgAssets
        },
        {
            title: "Gestão Comercial",
            desc: "Integração perfeita entre vendas e contabilidade. Apoio na faturação e análise de rentabilidade por cliente ou produto.",
            image: imgCommercial
        },
        {
            title: "Aconselhamento Fiscal",
            desc: "Planeamento fiscal estratégico para otimizar a carga tributária da sua empresa dentro do quadro legal vigente.",
            image: imgFiscal
        },
        {
            title: "Consultoria Externa",
            desc: "Uma visão imparcial e especializada para apoiar decisões críticas, reestruturações ou planos de expansão do seu negócio.",
            image: imgConsulting
        }
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.bgShape1}></div>
            <div className={styles.bgShape2}></div>

            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Contabilidade de Excelência para Negócios de Sucesso</h1>
                    <p className={styles.heroSubtitle}>
                        Transformamos números em estratégia. Uma gestão contabilística moderna, proativa e focada nos resultados da sua empresa.
                    </p>
                    <a href="#contactos" className={styles.heroBtn}>Agendar Reunião Gratuita</a>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Serviços Especializados</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card} style={{ backgroundImage: `url(${feature.image})` }}>
                            <div className={styles.overlay}>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <div className={styles.details}>
                                    <div className={styles.separator}></div>
                                    <p className={styles.cardText}>{feature.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dashboards Section */}
            <section className={styles.dashboardSection}>
                <div className={styles.dashboardContainer}>
                    <div className={styles.dashboardText}>
                        <h2 className={styles.dashboardTitle}>Decisões baseadas em Dados, não em intuição</h2>
                        <p className={styles.dashboardDesc}>
                            Disponibilizamos mapas mensais detalhados e dashboards interativos com toda a informação vital para o cliente.
                            Acompanhe a evolução do seu negócio em tempo real.
                        </p>
                        <ul className={styles.checklist}>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>✓</span> Relatórios Mensais de Performance
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>✓</span> Análise de Desvios Orçamentais
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>✓</span> KPIs Personalizados para sua Indústria
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>✓</span> Acesso Digital 24/7 aos seus Documentos
                            </li>
                        </ul>
                    </div>
                    <div className={styles.dashboardVisual}>
                        <AnimatedDashboard />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Pronto para elevar o nível da sua gestão?</h2>
                <p className={styles.ctaText}>Deixe a contabilidade connosco e foque-se no que faz melhor: fazer crescer o seu negócio.</p>
                <button
                    className={styles.ctaBtn}
                    onClick={() => {
                        const contactSection = document.getElementById('contactos');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.location.href = '/#contactos';
                        }
                    }}
                >
                    Falar com um Consultor
                </button>
            </section>
        </div>
    );
};

export default Accounting;

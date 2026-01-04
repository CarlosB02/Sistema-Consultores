import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="inicio">
            {/* Ambient Background Effects */}
            <div className={styles.ambientEffects}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left: Text Content */}
                    <div className={styles.textContent}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>Inovação & Estratégia</span>
                        </div>
                        <h1 className={styles.title}>
                            <span className={styles.outlineText}>Excelência</span>
                            <span className={styles.gradientText}>Sem Limites</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Redefinimos o futuro do seu negócio com consultoria de alto impacto. Soluções ousadas para resultados extraordinários.
                        </p>

                        <div className={styles.actions}>
                            <a href="#contactos" className={styles.ctaGlow}>
                                Iniciar Transformação
                            </a>
                            <a href="#servicos" className={styles.ctaGlass}>
                                Explorar Soluções
                            </a>
                        </div>


                    </div>

                    {/* Right: Visual Centerpiece */}
                    <div className={styles.visualContent}>
                        <div className={styles.glassCard}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardDotRed}></div>
                                    <div className={styles.cardDotYellow}></div>
                                    <div className={styles.cardDotGreen}></div>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.chartArea}>
                                        {/* Abstract Chart Representation */}
                                        <div className={styles.bar1}></div>
                                        <div className={styles.bar2}></div>
                                        <div className={styles.bar3}></div>
                                        <div className={styles.growthLine}></div>
                                    </div>
                                    <div className={styles.cardStat}>
                                        <span className={styles.trendUp}>▲ 124%</span>
                                        <span>Crescimento Anual</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract floating elements */}
                        <div className={styles.float1}></div>
                        <div className={styles.float2}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

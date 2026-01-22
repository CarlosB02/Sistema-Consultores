import React from 'react';

import styles from './Hero.module.css';
import HeroGraph from './HeroGraph';
import Reveal from './Reveal';

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
                        <Reveal>
                            <h1 className={styles.title}>
                                <span className={styles.outlineText}>Crescimento</span>
                                <span className={styles.gradientText}>Sem Limites</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className={styles.subtitle}>
                                Redefinimos o futuro do seu negócio com consultoria de alto impacto. Soluções ousadas para resultados extraordinários.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className={styles.actions}>
                                <a href="#contactos" className={styles.ctaGlow}>
                                    Iniciar Transformação
                                </a>
                                <a href="#services" className={styles.ctaGlass}>
                                    Explorar Soluções
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Visual Centerpiece */}
                    <div className={styles.visualContent}>
                        <Reveal delay={0.8} direction="left" width="fit-content">
                            <div className={styles.glassCard}>
                                <div className={styles.cardInner}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.cardDotRed}></div>
                                        <div className={styles.cardDotYellow}></div>
                                        <div className={styles.cardDotGreen}></div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <div className={styles.chartArea}>
                                            <HeroGraph />
                                        </div>
                                        <div className={styles.cardStat}>
                                            <span className={styles.trendUp}>▲ 124%</span>
                                            <span>Crescimento Anual</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

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

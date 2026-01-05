import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import teamImage from '../assets/sisco_team.png';
import Reveal from './Reveal';

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        const controls = animate(from, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.round(value).toFixed(0);
            }
        });

        return () => controls.stop();
    }, [from, to, isInView]);

    return <span ref={nodeRef}>{from}</span>;
};

const About: React.FC = () => {
    return (
        <section className={styles.section} id="sobre-nos">
            <Reveal width="100%">
                <div className={styles.container}>
                    <div className={styles.content}>
                        <span className={styles.label}>Sobre Nós</span>
                        <h2 className={styles.title}>Transformamos sonhos em planos e resultados.</h2>
                        <p className={styles.description}>
                            A <span className={styles.highlight}>Sistema Consultores</span> é a sua parceira estratégica no crescimento empresarial.
                            Com uma equipa de consultores experientes, dedicamo-nos a potenciar o sucesso do seu negócio através de soluções personalizadas e inovadoras.
                        </p>
                        <p className={styles.description}>
                            A nossa missão é simplificar processos e maximizar oportunidades, garantindo que cada cliente atinge o seu potencial máximo.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>
                                    +<Counter from={0} to={500} />
                                </span>
                                <span className={styles.statLabel}>Projetos Realizados</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>
                                    +<Counter from={0} to={300} />
                                </span>
                                <span className={styles.statLabel}>Empresas Satisfeitas</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={teamImage} alt="A Nossa Equipa" className={styles.aboutImage} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default About;

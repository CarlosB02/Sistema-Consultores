import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

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
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Sobre Nós</span>
                    <h2 className={styles.title}>Transformamos sonhos em planos e resultados.</h2>
                    <p className={styles.description}>
                        A <span className={styles.highlight}>Sisco</span> é a sua parceira estratégica no crescimento empresarial.
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
                    {/* Accessing public assets via relative path or import if needed. Using a solid color block or previous image if available would be good. 
                        For now, creating a stylish gradient block or SVG pattern if no specific image is provided for About.
                        Actually, let's use a nice SVG pattern placeholder that looks premium.
                    */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        position: 'relative'
                    }}>
                        <span style={{ zIndex: 1 }}>A Nossa Equipa</span>
                        <svg style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1, width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

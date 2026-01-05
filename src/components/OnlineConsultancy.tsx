import React, { useState } from 'react';
import styles from './OnlineConsultancy.module.css';
import AnalysisForm from './AnalysisForm';
import Reveal from './Reveal';
import consultancyImage from '../assets/online-consultancy.png';

const OnlineConsultancy: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <section className={styles.section} id="online-consultancy">
                <Reveal width="100%">
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>Consultoria Online</h2>
                            <p className={styles.subtitle}>
                                Acompanhamento especializado e estratégico, onde quer que esteja.
                                A mesma excelência, agora digital.
                            </p>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.imageWrapper}>
                                <img src={consultancyImage} alt="Consultoria Online" className={styles.consultancyImage} />
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconBox}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15.6 11.6L22 7l-5.6-4.6A2 2 0 0 0 13 4v3.07a8 8 0 0 0-3.3 1.93l.3.4A15.9 15.9 0 0 1 18 13.5v.7l1.7 1.3a2 2 0 0 0 2.3-.3l.6-.6z"></path>
                                            <path d="M22 17.5V20a2 2 0 0 1-2 2h-2"></path>
                                            <path d="M4.3 8.3L2 10v2a2 2 0 0 0 2 2h2.5"></path>
                                            <path d="M2.3 14.3a16 16 0 0 0 6.6 6.3"></path>
                                            <line x1="12" y1="12" x2="12" y2="12.01"></line>
                                        </svg>
                                    </div>
                                    <div className={styles.featureText}>
                                        <h3>Sessões por Videochamada</h3>
                                        <p>Reuniões estratégicas flexíveis via Zoom ou Teams, adaptadas à sua agenda.</p>
                                    </div>
                                </div>

                                <div className={styles.featureItem}>
                                    <div className={styles.iconBox}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                        </svg>
                                    </div>
                                    <div className={styles.featureText}>
                                        <h3>Análise de Documentos</h3>
                                        <p>Partilha e revisão de documentos em tempo real para feedback imediato e assertivo.</p>
                                    </div>
                                </div>

                                <div className={styles.featureItem}>
                                    <div className={styles.iconBox}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                            <polyline points="2 17 12 22 22 17"></polyline>
                                            <polyline points="2 12 12 17 22 12"></polyline>
                                        </svg>
                                    </div>
                                    <div className={styles.featureText}>
                                        <h3>Plano de Ação Digital</h3>
                                        <p>Receba um relatório detalhado com os próximos passos após cada sessão.</p>
                                    </div>
                                </div>

                                <div className={styles.ctaWrapper}>
                                    <button
                                        className={styles.ctaButton}
                                        onClick={() => setIsFormOpen(true)}
                                    >
                                        Agendar Sessão
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <AnalysisForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </>
    );
};

export default OnlineConsultancy;

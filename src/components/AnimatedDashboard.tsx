import React, { useState } from 'react';
import CountUp from './CountUp';
import styles from './AnimatedDashboard.module.css';

const AnimatedDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'analysis'>('overview');

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardHeader}>
                <div
                    className={`${styles.headerItem} ${activeTab === 'overview' ? styles.active : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Visão Geral
                </div>
                <div
                    className={`${styles.headerItem} ${activeTab === 'reports' ? styles.active : ''}`}
                    onClick={() => setActiveTab('reports')}
                >
                    Relatórios
                </div>
                <div
                    className={`${styles.headerItem} ${activeTab === 'analysis' ? styles.active : ''}`}
                    onClick={() => setActiveTab('analysis')}
                >
                    Análises
                </div>
            </div>

            <div className={styles.dashboardBody}>
                {activeTab === 'overview' && (
                    <>
                        <div className={styles.mainChart}>
                            <div className={styles.chartHeader}>
                                <span className={styles.chartTitle}>Crescimento Anual</span>
                                <span className={styles.chartValue}>
                                    <CountUp end={127} prefix="+" suffix="%" duration={2.5} />
                                </span>
                            </div>
                            <div className={styles.chartArea}>
                                <svg viewBox="0 0 300 150" className={styles.graphSvg}>
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(49, 130, 206, 0.5)" />
                                            <stop offset="100%" stopColor="rgba(49, 130, 206, 0)" />
                                        </linearGradient>
                                    </defs>

                                    {/* Main fluctuating line */}
                                    <path
                                        className={`${styles.graphLine} ${styles.continuousWave}`}
                                        d="M0,150 L30,120 L60,130 L90,100 L120,110 L150,80 L180,90 L210,60 L240,40 L270,50 L300,20"
                                        fill="none"
                                        stroke="#3182ce"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className={styles.graphArea}
                                        d="M0,150 L30,120 L60,130 L90,100 L120,110 L150,80 L180,90 L210,60 L240,40 L270,50 L300,20 V150 H0 Z"
                                        fill="url(#gradient)"
                                    />

                                    {/* Animated Dots - matching the path coordinates */}
                                    <g className={styles.dotsGroup}>
                                        <circle className={styles.graphDot} cx="30" cy="120" r="3" />
                                        <circle className={styles.graphDot} cx="60" cy="130" r="3" />
                                        <circle className={styles.graphDot} cx="90" cy="100" r="3" />
                                        <circle className={styles.graphDot} cx="120" cy="110" r="3" />
                                        <circle className={styles.graphDot} cx="150" cy="80" r="3" />
                                        <circle className={styles.graphDot} cx="180" cy="90" r="3" />
                                        <circle className={styles.graphDot} cx="210" cy="60" r="3" />
                                        <circle className={styles.graphDot} cx="240" cy="40" r="3" />
                                        <circle className={styles.graphDot} cx="270" cy="50" r="3" />
                                        <circle className={styles.graphDot} cx="300" cy="20" r="3" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className={styles.sideStats}>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>Receita</div>
                                <div className={styles.statValue}>
                                    <CountUp end={45.2} decimals={1} prefix="€ " suffix="k" duration={2000} />
                                </div>
                                <div className={styles.statIndicator}>↑ 12%</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>Despesas</div>
                                <div className={styles.statValue}>
                                    <CountUp end={12.8} decimals={1} prefix="€ " suffix="k" duration={2000} />
                                </div>
                                <div className={styles.statIndicatorDown}>↓ 5%</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>Lucro Líquido</div>
                                <div className={styles.statValue}>
                                    <CountUp end={32.4} decimals={1} prefix="€ " suffix="k" duration={2000} />
                                </div>
                                <div className={styles.statIndicator}>↑ 18%</div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'reports' && (
                    <div className={styles.tabContent}>
                        <div className={styles.chartHeader}>
                            <span className={styles.chartTitle}>Comparativo Mensal</span>
                            <span className={styles.chartValue}>2025</span>
                        </div>
                        <div className={styles.barChartContainer}>
                            {[60, 80, 45, 90, 75, 50, 85, 95].map((height, i) => (
                                <div key={i} className={styles.barColumn}>
                                    <div
                                        className={styles.barFill}
                                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                    <span className={styles.barLabel}>{['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'][i]}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.reportSummary}>
                            <p>Análise detalhada de despesas vs receitas por centro de custo.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'analysis' && (
                    <div className={styles.tabContent}>
                        <div className={styles.chartHeader}>
                            <span className={styles.chartTitle}>Distribuição de Custos</span>
                        </div>
                        <div className={styles.progressBars}>
                            <div className={styles.progressItem}>
                                <div className={styles.progressHeader}>
                                    <span>Pessoal</span>
                                    <span><CountUp end={45} suffix="%" duration={1.5} delay={0} /></span>
                                </div>
                                <div className={styles.progressTrack}>
                                    <div className={styles.progressBar} style={{ width: '100%', transform: 'scaleX(0.45)', background: '#3182ce', animationDelay: '0s' }}></div>
                                </div>
                            </div>
                            <div className={styles.progressItem}>
                                <div className={styles.progressHeader}>
                                    <span>Fornecedores</span>
                                    <span><CountUp end={30} suffix="%" duration={1.5} delay={0.2} /></span>
                                </div>
                                <div className={styles.progressTrack}>
                                    <div className={styles.progressBar} style={{ width: '100%', transform: 'scaleX(0.30)', background: '#ed8936', animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                            <div className={styles.progressItem}>
                                <div className={styles.progressHeader}>
                                    <span>Impostos</span>
                                    <span><CountUp end={25} suffix="%" duration={1.5} delay={0.4} /></span>
                                </div>
                                <div className={styles.progressTrack}>
                                    <div className={styles.progressBar} style={{ width: '100%', transform: 'scaleX(0.25)', background: '#48bb78', animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.dashDecoration1}></div>
            <div className={styles.dashDecoration2}></div>
        </div>
    );
};

export default AnimatedDashboard;

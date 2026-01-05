import React from 'react';
import styles from './HeroGraph.module.css';

const HeroGraph: React.FC = () => {
    return (
        <div className={styles.graphContainer}>
            <svg viewBox="0 0 300 100" className={styles.graphSvg}>
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* The Path Line */}
                <path
                    id="graphPath"
                    d="M 10 80 Q 60 90 90 50 T 170 50 T 290 20"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={styles.pathLine}
                />

                {/* The Moving Pulse Ball */}
                <circle r="6" className={styles.pulseBall}>
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                    >
                        <mpath href="#graphPath" />
                    </animateMotion>
                </circle>
            </svg>

            {/* Dashed guidelines for retro/tech feel */}
            <div className={styles.guidelines}>
                <div className={styles.guideLine}></div>
                <div className={styles.guideLine}></div>
                <div className={styles.guideLine}></div>
            </div>
        </div>
    );
};

export default HeroGraph;

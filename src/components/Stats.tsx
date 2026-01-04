import styles from './Stats.module.css';

const Stats = () => {
    const stats = [
        {
            id: 1,
            number: "150+",
            label: "Projetos Realizados",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            id: 2,
            number: "10+",
            label: "Anos de Experiência",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            id: 3,
            number: "€50M+",
            label: "Fundos Obtidos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
                {stats.map((stat) => (
                    <div key={stat.id} className={styles.statItem}>
                        <div className={styles.iconContainer}>
                            {stat.icon}
                        </div>
                        <div className={styles.number}>{stat.number}</div>
                        <div className={styles.label}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;

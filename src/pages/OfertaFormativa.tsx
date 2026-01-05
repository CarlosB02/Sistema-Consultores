import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './OfertaFormativa.module.css';

// Import local images
import qualityTopicImg from '../assets/topic-quality.png';
import environmentTopicImg from '../assets/topic-environment.png';
import foodSafetyTopicImg from '../assets/topic-food-safety.png';
import workSafetyTopicImg from '../assets/topic-work-safety.png';
import managementTopicImg from '../assets/topic-management.png';
import marketingTopicImg from '../assets/topic-marketing.png';
import socialRespTopicImg from '../assets/topic-social-resp.png';
import itTopicImg from '../assets/topic-it-training.png';

// Import specific course images
import qualityCostsImg from '../assets/course_quality_costs.png';
import complaintsMgmtImg from '../assets/course_complaints_mgmt.png';
import iso9001ImplImg from '../assets/course_iso9001_impl.png';
import envAspectsImg from '../assets/course_env_aspects.png';
import iso14001ImplImg from '../assets/course_iso14001_impl.png';
import iso22000ImplImg from '../assets/course_iso22000_impl.png';
import foodHygieneImg from '../assets/course_food_hygiene.png';
import haccpImplImg from '../assets/course_haccp_impl.png';
import investmentProjectsImg from '../assets/course_investment_projects.png';
import rgpdImg from '../assets/course_rgpd.png';

// Fallback/Generic use
const qualityImg = qualityTopicImg;
const environmentImg = environmentTopicImg;
const foodSafetyImg = foodSafetyTopicImg;
const managementImg = managementTopicImg;

interface Course {
    id: number;
    category: string;
    name: string;
    hours: string;
    price: string;
    image: string;
}

const presentialThemes = [
    { title: 'Qualidade', image: qualityTopicImg, desc: 'Excelência em processos e satisfação do cliente.' },
    { title: 'Ambiente', image: environmentTopicImg, desc: 'Sustentabilidade e conformidade ambiental.' },
    { title: 'Segurança Alimentar', image: foodSafetyTopicImg, desc: 'Garantia de segurança em toda a cadeia alimentar.' },
    { title: 'Segurança no Trabalho', image: workSafetyTopicImg, desc: 'Proteção e bem-estar dos colaboradores.' },
    { title: 'Gestão e Negócios', image: managementTopicImg, desc: 'Estratégias para o crescimento empresarial.' },
    { title: 'Marketing', image: marketingTopicImg, desc: 'Comunicação eficaz e alcance de mercado.' },
    { title: 'Responsabilidade Social', image: socialRespTopicImg, desc: 'Ética e impacto social positivo.' },
    { title: 'Informática', image: itTopicImg, desc: 'Competências digitais essenciais.' },
];

const coursesData: Course[] = [
    // Qualidade
    { id: 1, category: 'Qualidade', name: 'Auditorias internas da qualidade ISO 9001:2015', hours: '40 horas', price: '125,00€', image: qualityImg },
    { id: 2, category: 'Qualidade', name: 'Custos da qualidade', hours: '16 horas', price: '40,00€', image: qualityCostsImg },
    { id: 3, category: 'Qualidade', name: 'Gestão de reclamações', hours: '12 horas', price: '35,00€', image: complaintsMgmtImg },
    { id: 4, category: 'Qualidade', name: 'Implementação de sistemas de gestão da qualidade ISO 9001:2015', hours: '40 horas', price: '125,00€', image: iso9001ImplImg },

    // Ambiente
    { id: 5, category: 'Ambiente', name: 'Avaliação dos aspetos ambientais', hours: '12 horas', price: '35,00€', image: envAspectsImg },
    { id: 6, category: 'Ambiente', name: 'Implementação de sistemas de gestão ambiental ISO 14001:2015', hours: '40 horas', price: '150,00€', image: iso14001ImplImg },
    { id: 7, category: 'Ambiente', name: 'Auditorias internas a sistemas de gestão ambiental', hours: '40 horas', price: '150,00€', image: environmentImg },

    // Segurança Alimentar
    { id: 8, category: 'Segurança Alimentar', name: 'Auditorias a sistemas de gestão de segurança alimentar NP EN ISO 22000:2023', hours: '40 horas', price: '129,90€', image: foodSafetyImg },
    { id: 9, category: 'Segurança Alimentar', name: 'Implementação de sistemas de gestão de segurança alimentar NP EN ISO 22000:2023', hours: '50 horas', price: '189,90€', image: iso22000ImplImg },
    { id: 10, category: 'Segurança Alimentar', name: 'Higiene e segurança alimentar', hours: '25 horas', price: '59,90€', image: foodHygieneImg },
    { id: 11, category: 'Segurança Alimentar', name: 'Implementação do sistema HACCP', hours: '35 horas', price: '129,90€', image: haccpImplImg },

    // Gestão e Negócios
    { id: 12, category: 'Gestão e Negócios', name: 'Empreendedorismo - Como criar a sua empresa!', hours: '25 horas', price: '59,90€', image: managementImg },
    { id: 13, category: 'Gestão e Negócios', name: 'Elaboração de projetos de investimento', hours: '25 horas', price: '119,90€', image: investmentProjectsImg },
    { id: 14, category: 'Gestão e Negócios', name: 'Regulamento geral de proteção de dados - RGPD', hours: '10 horas', price: '35,00€', image: rgpdImg },
];

const OfertaFormativa: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { hash } = useLocation();
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Sync with Header logic: Hidden if scrolling down and past 80px
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    // Adjust scroll position considering the fixed/sticky elements
                    // Header (80) + Filters (approx 80) = 160 offset
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 180;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const categories = ['Todos', ...new Set(coursesData.map(c => c.category))];

    const filteredCourses = selectedCategory === 'Todos'
        ? coursesData
        : coursesData.filter(course => course.category === selectedCategory);

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#f8fafc', paddingBottom: '100px' }}>
            {/* Hero Section */}
            <header className={styles.hero}>

                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Oferta Formativa</h1>
                    <p className={styles.subtitle}>
                        Desenvolva competências e impulsione a sua carreira com as nossas soluções de formação presencial e e-learning.
                    </p>
                </div>
            </header>

            {/* Presential Training Section */}
            <section id="presencial" className={styles.section}>
                <h2 className={styles.sectionTitle}>Formação Presencial</h2>
                <div className={styles.themesGrid}>
                    {presentialThemes.map((theme, index) => (
                        <div key={index} className={styles.themeCard} style={{ backgroundImage: `url(${theme.image})` }}>
                            <div className={styles.themeContent}>
                                <h3 className={styles.themeTitle}>{theme.title}</h3>
                                <p className={styles.themeDescription}>{theme.desc}</p>
                                <button className={styles.themeBtn} onClick={() => window.location.href = '#contactos'}>
                                    Saber Mais
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <div style={{
                        background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)',
                        padding: '40px',
                        borderRadius: '20px',
                        color: 'white',
                        boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px' }}>Procura uma solução à medida?</h3>
                        <p style={{ marginBottom: '30px', opacity: 0.9 }}>
                            Desenvolvemos planos de formação intraempresas personalizados para responder às necessidades específicas da sua equipa.
                        </p>
                        <button
                            style={{
                                padding: '15px 40px',
                                background: 'white',
                                color: '#1e40af',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            onClick={() => window.location.href = '#contactos'}
                        >
                            Solicitar Proposta
                        </button>
                    </div>
                </div>
            </section>

            {/* E-Learning Section */}
            <section id="elearning" className={styles.section} style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '15px' }}>Plataforma E-Learning</h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                        Aprenda ao seu ritmo, onde e quando quiser. Certificação incluída.
                    </p>
                </div>

                {/* Filters */}
                <div
                    className={styles.filterContainer}
                    style={{ top: isHeaderVisible ? '80px' : '0' }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Courses Grid (E-commerce Style) */}
                <div className={styles.productsGrid}>
                    {filteredCourses.map((course) => (
                        <div key={course.id} className={styles.productCard}>
                            <div className={styles.productImageContainer}>
                                <img src={course.image} alt={course.name} className={styles.productImage} />
                            </div>
                            <div className={styles.productContent}>
                                <div className={styles.productCategory}>{course.category}</div>
                                <h3 className={styles.productTitle}>{course.name}</h3>
                                <div className={styles.productMeta}>
                                    <span>⏱️ {course.hours}</span>
                                    <span>🎓 Certificado</span>
                                </div>
                                <div className={styles.productPrice}>{course.price}</div>
                                <button className={styles.addToCartBtn}>
                                    <span>🛒</span> Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OfertaFormativa;

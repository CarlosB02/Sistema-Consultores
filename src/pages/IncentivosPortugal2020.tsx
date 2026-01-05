import styles from './IncentivosHero.module.css';
import AnalysisForm from '../components/AnalysisForm';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import agricultureImg from '../assets/agriculture_pdr_2020.png';
import CountUp from '../components/CountUp';
import PageNavigator from '../components/PageNavigator';

const LottiePlayer = ({ url, style }: { url: string; style?: React.CSSProperties }) => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error('Error loading lottie', err));
    }, [url]);

    if (!animationData) return <div style={{ height: style?.height || '150px' }}></div>;

    return <Lottie animationData={animationData} loop={true} style={style} />;
};

const IncentivosPortugal2020: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const navSections = [
        { id: 'custom-hero', label: 'Início' },
        { id: 'inovacao', label: 'Inovação Produtiva' },
        { id: 'empreendedorismo', label: 'Empreendedorismo' },
        { id: 'internacionalizacao', label: 'Internacionalização' },
        { id: 'pdr2020', label: 'PDR 2020' },
        { id: 'producao-nacional', label: 'Produção Nacional' }
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div style={{ paddingTop: '0', fontFamily: "'Poppins', sans-serif" }}>
            <PageNavigator sections={navSections} />
            {/* Custom Hero Section */}
            <section className={styles.hero} id="custom-hero">
                <div className={styles.bgShape1}></div>
                <div className={styles.bgShape2}></div>

                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>
                                Financiamento <br />
                                <span className={styles.highlight}>Portugal 2030</span>
                            </h1>
                            <p className={styles.subtitle} style={{ marginBottom: '2.5rem' }}>
                                Acelere o crescimento da sua empresa com os incentivos certos.
                                Transformamos a sua visão em projetos aprovados.
                            </p>

                            <div className={styles.buttonGroup}>
                                <button className={styles.primaryBtn} onClick={() => setIsFormOpen(true)}>
                                    Validar Elegibilidade
                                </button>
                                <button className={styles.secondaryBtn} onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('inovacao')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Explorar Incentivos
                                </button>
                            </div>
                        </div>

                        <div className={styles.visualContainer}>
                            <div className={styles.financeCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>💰</div>
                                    <div className={styles.cardTitle}>Incentivos Financeiros</div>
                                </div>
                                <div className={styles.cardStat}>
                                    <div className={styles.statLabel}>Financiamento a Fundo Perdido</div>
                                    <div className={styles.statValue}>
                                        Até <CountUp end={75} suffix="%" />
                                    </div>
                                </div>
                                <ul className={styles.checkList}>
                                    <li className={styles.checkItem}>
                                        <span className={styles.checkIcon}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </span>
                                        Aumentar Resultados da Empresa
                                    </li>
                                    <li className={styles.checkItem}>
                                        <span className={styles.checkIcon}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </span>
                                        Candidaturas Simplificadas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Inovação Produtiva */}
            <section id="inovacao" style={{ padding: '100px 20px', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1 }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1 }}></div>

                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '15px' }}>Inovação Produtiva</h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Modernize a sua empresa e aumente a sua capacidade produtiva.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

                    {/* Left Side: Callouts/Benefits */}
                    <div>
                        <h3 style={{ fontSize: '1.75rem', color: '#1e293b', marginBottom: '30px', fontWeight: '600' }}>
                            Impacto no seu Negócio
                        </h3>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                { title: 'Aumento da Receita', icon: '📈' },
                                { title: 'Simplificação de Processos', icon: '⚙️' },
                                { title: 'Modernização Tecnológica', icon: '💡' },
                                { title: 'Eficiência Operacional', icon: '⚡' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px',
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #f1f5f9',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#3b82f6' }}></div>
                                    <span style={{ fontSize: '1.5rem', marginRight: '20px', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '10px' }}>{item.icon}</span>
                                    <span style={{ color: '#334155', fontWeight: '600', fontSize: '1.1rem' }}>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Big Highlight & CTA */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '50px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        borderRadius: '30px',
                        color: 'white',
                        boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.25)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Abstract shapes inside the card */}
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>

                        <div style={{ fontSize: '1.2rem', fontWeight: '500', opacity: 0.9, marginBottom: '10px', position: 'relative' }}>FINANCIAMENTO A FUNDO PERDIDO</div>
                        <div style={{ fontSize: '6rem', fontWeight: '800', lineHeight: 1, marginBottom: '10px', textShadow: '0 4px 10px rgba(0,0,0,0.2)', position: 'relative' }}><CountUp end={75} suffix="%" /></div>
                        <p style={{ fontSize: '1.2rem', maxWidth: '300px', marginBottom: '30px', opacity: 0.9, position: 'relative' }}>
                            Recupere até três quartos do seu investimento sem ter de reembolsar.
                        </p>

                        <button style={{
                            padding: '18px 36px',
                            backgroundColor: 'white',
                            color: '#1e40af',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            fontFamily: "'Poppins', sans-serif",
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            position: 'relative'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
                            onClick={() => window.location.href = '#contactos'}>
                            Simular Financiamento
                        </button>
                    </div>
                </div>
            </section>

            {/* Empreendedorismo - Redesigned */}
            <section id="empreendedorismo" style={{ padding: '100px 20px', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
                {/* Background accents */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none', background: 'radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, right: '50%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)', transform: 'translateX(50%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)', zIndex: 0 }}></div>

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#f59e0b', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Startups e Criação de Empresas</span>
                        <h2 style={{ fontSize: '3rem', color: 'white', marginTop: '10px', marginBottom: '20px' }}>Empreendedorismo</h2>
                        <p style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem' }}>
                            Do conceito à realidade. Apoiamos o nascimento de projetos visionários e startups tecnológicas.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        {/* Card 1 */}
                        <div style={{
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <LottiePlayer url="https://lottie.host/3eec3be0-0079-41e2-b940-a6228f2a0845/MgAMQVhnDR.json" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
                            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>Ideia & Validação</h3>
                            <p style={{ color: '#94a3b8' }}>Valide o seu modelo de negócio e prepare o pitch perfeito para investidores.</p>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <LottiePlayer url="https://lottie.host/34e29f58-3113-44f1-9156-c5c6e3d59a3a/ShENsuRNt3.json" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
                            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>Crescimento do Negócio</h3>
                            <p style={{ color: '#94a3b8' }}>Apoio na estruturação financeira e candidatura a fundos de apoio ao arranque.</p>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <LottiePlayer url="https://lottie.host/3d6b3a55-6d71-4c72-b6b8-812ebe6375d3/ChZMT1VAuk.json" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
                            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>Escalabilidade</h3>
                            <p style={{ color: '#94a3b8' }}>Estratégias de escala para levar a sua startup a novos mercados.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{
                            padding: '16px 40px',
                            backgroundColor: '#f59e0b',
                            color: '#0f172a',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            fontFamily: "'Poppins', sans-serif",
                            boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)'
                        }} onClick={() => window.location.href = '#contactos'}>
                            Começar Agora
                        </button>
                        <button style={{
                            padding: '16px 40px',
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            fontFamily: "'Poppins', sans-serif"
                        }} onClick={() => window.location.href = '#contactos'}>
                            Falar com Mentor
                        </button>
                    </div>
                </div>
            </section>

            {/* Internacionalização */}
            <section id="internacionalizacao" style={{
                padding: '100px 0',
                width: '100%',
                position: 'relative',
                textAlign: 'center',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23059669\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")',
                backgroundSize: '30px 30px',
                backgroundAttachment: 'fixed'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#047857', marginBottom: '15px' }}>Internacionalização das PME</h2>
                    <p style={{ color: '#64748b', marginBottom: '60px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Apoios para expandir o seu negócio além fronteiras.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{
                            flex: '0 1 400px',
                            padding: '40px 20px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '16px',
                            background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <LottiePlayer url="https://lottie.host/48ac5fed-37f2-400c-9519-e1c0e6dafab5/qL5Q7XL7la.json" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '10px' }}>E-commerce & Digital</h3>
                        </div>

                        <div style={{
                            flex: '0 1 400px',
                            padding: '40px 20px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '16px',
                            background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <LottiePlayer url="https://lottie.host/15910cd8-049c-41b8-84c1-1aa688e77e1e/IH8gPpXPO0.json" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '10px' }}>Acelerador de Exportações</h3>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px' }}>
                        <button style={{
                            padding: '16px 32px',
                            backgroundColor: '#059669',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            fontFamily: "'Poppins', sans-serif",
                            boxShadow: '0 4px 6px -1px rgba(5, 150, 105, 0.2)'
                        }} onClick={() => window.location.href = '#contactos'}>
                            Definir Estratégia Internacional
                        </button>
                    </div>
                </div>
            </section>


            {/* PDR 2020 Section */}
            <section id="pdr2020" style={{ position: 'relative', overflow: 'hidden', color: 'white' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${agricultureImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    zIndex: -1
                }}></div>

                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ backgroundColor: '#22c55e', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px' }}>CANDIDATURAS ABERTAS</span>
                        <h2 style={{ fontSize: '3.5rem', marginTop: '20px', marginBottom: '10px', textShadow: '0 2px 10px rgba(0,0,0,0.5)', color: 'white' }}>PDR 2020</h2>
                        <p style={{ fontSize: '1.5rem', color: '#bbf7d0', maxWidth: '800px', margin: '0 auto' }}>Incentivos ao Investimento Agrícola e Jovens Agricultores</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '60px' }}>

                        {/* Jovens Agricultores Card */}
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧑‍🌾</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: 'white' }}>Jovens Agricultores</h3>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                <span style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '0.9rem' }}>&lt; 41 anos</span>
                                <span style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '0.9rem' }}>Início de Atividade</span>
                            </div>
                            <p style={{ color: '#dcfce7', marginBottom: '25px', lineHeight: '1.6' }}>
                                Incentivo a fundo perdido para instalação de jovens agricultores.
                            </p>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80', marginBottom: '5px' }}><CountUp end={20000} prefix="€" separator="." /></div>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px' }}>Prémio base + Majorações</p>

                            <ul style={{ listStyle: 'none', padding: 0, color: '#f0fdf4' }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><span style={{ color: '#4ade80', marginRight: '10px' }}>✓</span> +€5.000 se investimento ≥ €80k</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><span style={{ color: '#4ade80', marginRight: '10px' }}>✓</span> +€5.000 em regime exclusividade</li>
                            </ul>
                            <button style={{
                                width: '100%',
                                padding: '12px',
                                background: '#16a34a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginTop: 'auto',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }} onClick={() => window.location.href = '#contactos'}>
                                Saber Mais
                            </button>
                        </div>

                        {/* Investimento Exploração Card */}
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚜</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: 'white' }}>Investimento Agrícola</h3>
                            <p style={{ color: '#dcfce7', marginBottom: '20px', lineHeight: '1.6' }}>
                                Modernize a sua exploração, aumente a produção e garanta a sustentabilidade.
                            </p>

                            <h4 style={{ color: '#86efac', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '15px' }}>Investimentos Elegíveis:</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {['Edifícios e Construções', 'Plantações Plurianuais', 'Sistemas de Rega', 'Máquinas e Equipamentos', 'Preparação de Terrenos'].map(item => (
                                    <span key={item} style={{ background: 'rgba(255,255,255,0.15)', padding: '8px 15px', borderRadius: '50px', fontSize: '0.9rem' }}>{item}</span>
                                ))}
                            </div>
                            <button style={{
                                width: '100%',
                                padding: '12px',
                                background: '#16a34a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginTop: 'auto', // Changed to auto for alignment
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }} onClick={() => window.location.href = '#contactos'}>
                                Saber Mais
                            </button>
                        </div>
                    </div>

                    {/* Transformação Section within PDR */}
                    <div style={{
                        background: 'linear-gradient(90deg, #064e3b 0%, #065f46 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '40px',
                        border: '1px solid #10b981'
                    }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '15px' }}>Indústria Agroalimentar</h3>
                            <p style={{ fontSize: '1.1rem', color: '#d1fae5', marginBottom: '30px' }}>
                                Apoios para transformação e comercialização de produtos agrícolas.
                                Foco na eficiência, inovação e qualidade.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#34d399' }}><CountUp end={50} suffix="%" /></div>
                                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Taxa Máxima de Apoio</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#34d399' }}><CountUp end={4} suffix="M€" /></div>
                                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Limite de Apoio</div>
                                </div>
                            </div>
                            <button style={{
                                padding: '12px 24px',
                                background: 'white',
                                color: '#064e3b',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginTop: '30px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }} onClick={() => window.location.href = '#contactos'}>
                                Saber Mais
                            </button>
                        </div>
                        <div style={{ flex: '1 1 300px', background: 'rgba(0,0,0,0.2)', padding: '30px', borderRadius: '15px' }}>
                            <h4 style={{ marginBottom: '20px', color: '#6ee7b7' }}>Áreas de Aposta</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>🏭 Construção e Requalificação</li>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>⚡ Eficiência Energética</li>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>💻 Software e Digitalização</li>
                                <li style={{ padding: '10px 0' }}>📢 Marketing e Branding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apoio à Produção Nacional */}
            <section id="producao-nacional" style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: '#2563eb', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Produção Nacional</span>
                            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginTop: '10px', marginBottom: '20px', lineHeight: '1.2' }}>
                                Programa de Apoio à <br /><span style={{ color: '#2563eb' }}>Produção Nacional</span>
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
                                Instrumento fundamental para estimular o investimento empresarial produtivo nas micro e pequenas empresas, com foco nos setores industrial e turismo.
                            </p>

                            <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', color: '#2563eb', fontWeight: 'bold' }}><CountUp end={60} suffix="%" /></div>
                                    <div style={{ color: '#475569', fontSize: '0.9rem' }}>Fundo Perdido (Baixa Densidade)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', color: '#2563eb', fontWeight: 'bold' }}><CountUp end={50} suffix="%" /></div>
                                    <div style={{ color: '#475569', fontSize: '0.9rem' }}>Restantes Regiões</div>
                                </div>
                            </div>

                            <button style={{
                                padding: '15px 30px',
                                background: '#0f172a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }} onClick={() => window.location.href = '#contactos'}>
                                Verificar Elegibilidade <span>→</span>
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            {[
                                { icon: '🏭', title: 'Máquinas', desc: 'Aquisição de equipamentos produtivos' },
                                { icon: '💻', title: 'Digital', desc: 'Equipamentos informáticos e Software' },
                                { icon: '®️', title: 'Marcas', desc: 'Criação e registo de novas marcas' },
                                { icon: '🌐', title: 'Web', desc: 'Lojas online e E-commerce' },
                                { icon: '🚚', title: 'Transporte', desc: 'Material circulante (até 40k€)' },
                                { icon: '🏗️', title: 'Obras', desc: 'Remodelação e adaptação' }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{item.icon}</div>
                                    <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '5px' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contactos / Formulário Section */}
            <section id="contactos" style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '40px' }}>
                        Pronto para impulsionar o seu negócio?
                    </h2>
                    <AnalysisForm isOpen={true} onClose={() => { }} isEmbedded={true} />
                </div>
            </section>

            <AnalysisForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
};

export default IncentivosPortugal2020;

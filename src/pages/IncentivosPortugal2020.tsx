import styles from './IncentivosHero.module.css';
import AnalysisForm from '../components/AnalysisForm';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

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
    return (
        <div style={{ paddingTop: '0', fontFamily: "'Poppins', sans-serif" }}>
            {/* Custom Hero Section */}
            <section className={styles.hero} id="topo">
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
                                <button className={styles.primaryBtn} onClick={() => window.location.href = '#contactos'}>
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
                            <div className={styles.fundingPath}>
                                <div className={styles.connector}></div>

                                {/* Step 1: Strategy */}
                                <div className={`${styles.stepNode} ${styles.step1}`}>
                                    <div className={`${styles.stepIcon} ${styles.icon1}`}>
                                        📊
                                    </div>
                                    <div className={styles.stepTitle}>Diagnóstico</div>
                                    <div className={styles.stepDesc}>Análise de viabilidade gratuita</div>
                                </div>

                                {/* Step 2: Funding */}
                                <div className={`${styles.stepNode} ${styles.step2}`}>
                                    <div className={`${styles.stepIcon} ${styles.icon2}`}>
                                        🚀
                                    </div>
                                    <div className={styles.stepTitle}>Aprovação</div>
                                    <div className={styles.stepDesc}>Acompanhamento até ao sucesso</div>
                                </div>
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
                        <div style={{ fontSize: '6rem', fontWeight: '800', lineHeight: 1, marginBottom: '10px', textShadow: '0 4px 10px rgba(0,0,0,0.2)', position: 'relative' }}>75%</div>
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
            <section style={{ padding: '100px 20px', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
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
            <section style={{
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


            <AnalysisForm />
        </div>
    );
};

export default IncentivosPortugal2020;

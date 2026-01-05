import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import heroBg from '../assets/services-bg.png';

const Contactos: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '45vh',
                minHeight: '350px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '0 20px',
                marginTop: '-80px' // Pull up behind transparent header if applies, else standard
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,20,50,0.6) 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', paddingTop: '80px' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #ffffff, #a5b4fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                        Contacte-nos
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.6',
                        color: '#e2e8f0',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Queremos o sucesso da sua empresa. Estamos aqui para esclarecer as suas dúvidas e potenciar o seu crescimento.
                    </p>
                </div>
            </div>

            <main style={{ position: 'relative', zIndex: 10, background: 'linear-gradient(to bottom, #f8fafc, #ffffff)' }}>
                <Contact />
            </main>

            {/* Google Maps Section */}
            <div style={{ width: '100%', height: '450px', position: 'relative' }}>
                <iframe
                    src="https://maps.google.com/maps?q=Real%20Business%20Center%2C%20Av.%20Dr.%20Ant%C3%B3nio%20Almeida%20Henriques%2C%20Porta%20112%203500-606%20-%20Viseu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Sistema Consultores"
                ></iframe>
            </div>
        </div>
    );
};

export default Contactos;

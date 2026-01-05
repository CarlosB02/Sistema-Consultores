import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada! (Simulação)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className={styles.section} id="contactos">
            <div className={styles.cardContainer}>
                {/* Left Side: Info */}
                <div className={styles.infoPanel}>
                    <h2 className={styles.infoTitle}>Fale Connosco</h2>
                    <p className={styles.infoSubtitle}>Estamos prontos para ajudar o seu negócio a crescer.</p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <p>Real Business Center, Av. Dr. António Almeida Henriques, Porta 112, 3500-606 - Viseu</p>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className={styles.contactColumn}>
                                <p>sistema@sistemaconsultores.pt</p>
                                <p>formacao@sistemaconsultores.pt</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className={styles.contactColumn}>
                                <p>+351 232 400 360 (a)</p>
                                <p>+351 931 177 336 (b)</p>
                            </div>
                        </div>
                        <p className={styles.smallNote} style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.8 }}>
                            (a) Chamada para a rede fixa nacional. <br />
                            (b) Chamada para a rede móvel nacional.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={styles.formPanel}>
                    <h3 className={styles.formTitle}>Envie-nos uma mensagem</h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome completo"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Como podemos ajudar?"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

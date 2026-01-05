import React, { useState, useEffect } from 'react';
import styles from './AnalysisForm.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalysisFormProps {
    isOpen: boolean; onClose: () => void; isEmbedded?: boolean;
}

const AnalysisForm: React.FC<AnalysisFormProps & { isEmbedded?: boolean }> = ({ isOpen, onClose, isEmbedded = false }) => {
    const [activeTab, setActiveTab] = useState<'existente' | 'criacao'>('existente');
    const [formData, setFormData] = useState({
        companyName: '',
        sector: '',
        name: '',
        email: '',
        phone: '',
        description: ''
    });

    // Close on Escape key
    useEffect(() => {
        if (isEmbedded) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, isEmbedded]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isEmbedded) return;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isEmbedded]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData, 'Type:', activeTab);
        alert(`Obrigado! A sua análise para ${activeTab === 'existente' ? 'Empresa Existente' : 'Criação de Empresa'} foi submetida com sucesso.`);
        setFormData({
            companyName: '',
            sector: '',
            name: '',
            email: '',
            phone: '',
            description: ''
        });
        if (!isEmbedded) onClose();
    };

    const FormContent = (
        <div className={isEmbedded ? styles.embeddedContainer : styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            {!isEmbedded && (
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}

            <div className={styles.formHeader}>
                <div className={styles.tabsHeader}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'existente' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('existente')}
                    >
                        Empresa Existente
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'criacao' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('criacao')}
                    >
                        Criação de Empresa
                    </button>
                </div>
            </div>

            <div className={styles.formContent}>
                <h2 className={styles.formTitle}>Análise Direta Gratuita</h2>
                <p className={styles.formSubtitle}>
                    {activeTab === 'existente'
                        ? "Preencha os dados da sua empresa para avaliarmos o enquadramento no Portugal 2030."
                        : "Partilhe a sua ideia de negócio para verificarmos a viabilidade de apoios ao empreendedorismo."}
                </p>

                <form className={styles.formGrid} onSubmit={handleSubmit}>

                    {/* Fields for Existing Company */}
                    {activeTab === 'existente' && (
                        <>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label className={styles.label} htmlFor="companyName">Nome da Empresa</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className={styles.input}
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Ex: Minha Empresa Lda"
                                    required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label className={styles.label} htmlFor="sector">Setor de Atividade</label>
                                <select
                                    id="sector"
                                    name="sector"
                                    className={styles.select}
                                    value={formData.sector}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="industria">Indústria</option>
                                    <option value="comercio">Comércio</option>
                                    <option value="servicos">Serviços</option>
                                    <option value="turismo">Turismo</option>
                                    <option value="agricultura">Agricultura</option>
                                    <option value="transporte">Transportes</option>
                                    <option value="construcao">Construção</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Common Fields (Name, Phone, Email) */}
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Seu Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex: João Silva"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="phone">Telefone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Ex: 912 345 678"
                            required
                        />
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label} htmlFor="email">Email Corporativo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={activeTab === 'existente' ? "Ex: joao@empresa.pt" : "Ex: joao@gmail.com"}
                            required
                        />
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label} htmlFor="description">Breve Descrição do Projeto</label>
                        <textarea
                            id="description"
                            name="description"
                            className={styles.textarea}
                            value={formData.description}
                            onChange={handleChange}
                            placeholder={activeTab === 'existente'
                                ? "Descreva resumidamente o investimento que pretende realizar (ex: aquisição de máquinas, obras, internacionalização...)"
                                : "Descreva a sua ideia de negócio (ex: o que vai vender, onde, público-alvo...)"}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Submeter para Análise
                    </button>
                </form>
            </div>
        </div>
    );

    if (isEmbedded) return FormContent;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={onClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={styles.modalWrapper}
                    >
                        {FormContent}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AnalysisForm;

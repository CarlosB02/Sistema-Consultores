import React, { useState } from 'react';
import styles from './AnalysisForm.module.css';

const AnalysisForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'existente' | 'criacao'>('existente');
    const [formData, setFormData] = useState({
        companyName: '',
        sector: '',
        name: '',
        email: '',
        phone: '',
        description: ''
    });

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
    };

    return (
        <section id="analise-gratuita" style={{ backgroundColor: '#f8fafc', padding: '1px 0 60px 0' }}>
            <div className={styles.formContainer}>
                {/* Tabs */}
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
        </section>
    );
};

export default AnalysisForm;

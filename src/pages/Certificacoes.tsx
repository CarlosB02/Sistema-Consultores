import React, { useState } from 'react';
import styles from './Certificacoes.module.css';
import Contact from '../components/Contact';
import iso9001Img from '../assets/iso9001.png';
import iso14001Img from '../assets/iso14001.png';
import iso22000Img from '../assets/iso22000.png';
import sa8000Img from '../assets/sa8000.png';
import rgpdImg from '../assets/rgpd.png';

type CertificationId = 'iso9001' | 'iso14001' | 'iso22000' | 'sa8000' | 'rgpd';

interface CertificationContent {
    id: CertificationId;
    title: string;
    image: string;
    description: React.ReactNode;
}

const Certificacoes: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<CertificationId>('iso9001');

    const certifications: { id: CertificationId; label: string }[] = [
        { id: 'iso9001', label: 'Gestão da Qualidade (ISO 9001)' },
        { id: 'iso14001', label: 'Gestão Ambiental (ISO 14001)' },
        { id: 'iso22000', label: 'Segurança Alimentar (ISO 22000)' },
        { id: 'sa8000', label: 'Responsabilidade Social (SA 8000)' },
        { id: 'rgpd', label: 'RGPD - Proteção de Dados' },
    ];

    const content: Record<CertificationId, CertificationContent> = {
        iso9001: {
            id: 'iso9001',
            title: 'Sistemas de gestão da qualidade ISO 9001:2015',
            image: iso9001Img,
            description: (
                <>
                    <p className={styles.paragraph}>
                        O sistema de gestão da qualidade tem como principal objetivo otimizar todos os processos da organização melhorando continuamente os produtos e serviços da mesma. Neste sentido, apresentamos soluções em Sistemas de Gestão da Qualidade, nomeadamente na implementação da <strong>NP EN ISO 9001</strong>.
                    </p>
                    <p className={styles.paragraph}>
                        Atuamos em todos os setores de atividade: Indústria, comércio, serviços, saúde, IPSS, organismos públicos, entre outros. Apoiamos a sua organização na obtenção da certificação de reconhecimento internacional.
                    </p>

                    <h3 className={styles.sectionTitle}>Gestão por processos</h3>
                    <p className={styles.paragraph}>
                        A norma NP EN ISO 9001:2015 fomenta a adoção de uma abordagem por processos ao desenvolver, implementar e melhorar a eficácia de um sistema de gestão da qualidade, para aumentar a satisfação do cliente, ao satisfazer os seus requisitos.
                        Abordagem por processos é entendida como a identificação e gestão sistemática dos processos de uma organização e, em particular, das interações entre estes processos. Um processo deve ser entendido como a um conjunto de atividades que acrescentam valor.
                    </p>

                    <h3 className={styles.sectionTitle}>Vantagens Competitivas</h3>
                    <ol className={styles.numberedList}>
                        <li>Melhoria do desempenho da organização.</li>
                        <li>Criação de uma nova cultura de melhoria contínua da qualidade na organização.</li>
                        <li>Redução de custos, devido à diminuição de desperdícios, reclamações.</li>
                        <li>Sistema simples e rentável.</li>
                        <li>Melhoria da imagem da empresa.</li>
                        <li>Aumento da confiança por parte dos clientes atuais e potenciais.</li>
                        <li>Distinção da concorrência / aumento de competitividade.</li>
                    </ol>

                    <h3 className={styles.sectionTitle}>Plano de implementação:</h3>
                    <ol className={styles.numberedList}>
                        <li>Diagnóstico e planeamento;</li>
                        <li>Estruturação do sistema de gestão da qualidade - elaboração de documentos;</li>
                        <li>Implementação do sistema de gestão;</li>
                        <li>Auditoria interna;</li>
                        <li>Revisão do sistema de gestão da qualidade - Melhoria contínua.</li>
                    </ol>
                </>
            )
        },
        iso14001: {
            id: 'iso14001',
            title: 'Sistemas de gestão ambiental',
            image: iso14001Img,
            description: (
                <>
                    <p className={styles.paragraph}>
                        A implementação de um sistema de gestão ambiental permite à organização avaliar, controlar e minimizar impactes ambientais significativos resultantes da sua atividade, produtos ou serviços, com o objetivo de otimizar o seu desempenho ambiental.
                    </p>
                    <p className={styles.paragraph}>
                        A <strong>SISTEMA CONSULTORES</strong> presta serviços de consultoria na implementação de Sistemas de gestão Ambiental, <strong>NP EN ISO 14001</strong>, proporcionando às empresas clientes a organização e otimização dos seus processos em termos ambientais, melhorando continuamente o seu desempenho e consequentemente o seu sistema de gestão.
                    </p>

                    <h3 className={styles.sectionTitle}>Metodologia de implementação ISO 14001:2015</h3>
                    <ol className={styles.numberedList}>
                        <li>Diagnóstico e plano de ações;</li>
                        <li>Estruturação do sistema de gestão ambiental - Elaboração de documentos;</li>
                        <li>Implementação do sistema de gestão ambiental;</li>
                        <li>Auditoria interna;</li>
                        <li>Revisão do sistema ambiental - melhoria contínua.</li>
                    </ol>

                    <h3 className={styles.sectionTitle}>Vantagens competitivas de um sistema de gestão ambiental:</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Melhoria da imagem da organização.</li>
                        <li className={styles.listItem}>Redução de custos associados à otimização do consumo de recursos.</li>
                        <li className={styles.listItem}>Satisfação dos clientes e partes interessadas: valorização de produtos provenientes de empresas que demonstrem um bom desempenho ambiental.</li>
                        <li className={styles.listItem}>Maior competitividade e permanência no mercado.</li>
                        <li className={styles.listItem}>Melhoria do desempenho ambiental.</li>
                        <li className={styles.listItem}>Responsabilidade ambiental.</li>
                    </ul>
                </>
            )
        },
        iso22000: {
            id: 'iso22000',
            title: 'Implementação de sistemas de gestão de segurança alimentar',
            image: iso22000Img,
            description: (
                <>
                    <h3 className={styles.sectionTitle}>NP EN ISO 22000</h3>
                    <p className={styles.paragraph}>
                        A NP EN ISO 22000 estabelece requisitos para a implementação de Sistemas de Gestão da Segurança Alimentar.
                    </p>

                    <h3 className={styles.sectionTitle}>HACCP - (Hazard Analysis Critical Control Point)</h3>
                    <p className={styles.paragraph}>
                        Sistema de segurança alimentar, concebido para prevenir o aparecimento de perigos físicos, químicos e biológicos, através da implementação de medidas de controlo.
                        O sistema HACCP baseia-se na aplicação de 7 princípios, tendo como objetivo a garantia da inocuidade dos alimentos:
                    </p>
                    <ol className={styles.numberedList}>
                        <li>Análise de perigos.</li>
                        <li>Identificação de pontos críticos de controlo (PCC).</li>
                        <li>Determinação de limites críticos.</li>
                        <li>Estabelecimento de procedimentos para monitorizar os PCC's.</li>
                        <li>Estabelecimento de ações corretivas.</li>
                        <li>Estabelecimento de procedimentos de verificação.</li>
                        <li>Estabelecimento de documentação relativa aos procedimentos a adotar e controlo de registos.</li>
                    </ol>

                    <h3 className={styles.sectionTitle}>Benefícios de implementação da NP EN ISO 22000</h3>
                    <ol className={styles.numberedList}>
                        <li>Sistema reconhecido internacionalmente.</li>
                        <li>Aplicável a todos os intervenientes da cadeia alimentar.</li>
                        <li>Vantagem competitiva.</li>
                        <li>Aumento da confiança do consumidor.</li>
                        <li>Otimização de procedimentos.</li>
                        <li>Racionalização de recursos.</li>
                        <li>Implementação de boas práticas de laboração / higiene.</li>
                        <li>Programa de pré-requisitos.</li>
                        <li>Prevenção / Eliminação de perigos.</li>
                    </ol>
                </>
            )
        },
        sa8000: {
            id: 'sa8000',
            title: 'Sistemas de gestão de responsabilidade social',
            image: sa8000Img,
            description: (
                <>
                    <p className={styles.paragraph}>
                        A responsabilidade social das empresas é a integração voluntária de preocupações sociais e ambientais nas operações diárias das organizações e da interação de todas as partes interessadas.
                        Uma organização socialmente responsável tem em consideração, em todas as decisões que toma, todo o meio envolvente. A sua atividade tem como linha de orientação, o respeito pelos direitos humanos, o investimento na valorização pessoal, proteção ambiental, combate à corrupção, cumprimento de normas sociais e o respeito por valores e princípios éticos da sociedade.
                    </p>

                    <h3 className={styles.sectionTitle}>Implementação SA 8000</h3>
                    <p className={styles.paragraph}>
                        Norma internacional de avaliação da responsabilidade social. Tem como base normas internacionais sobre direitos humanos e o cumprimento da legislação aplicável. A SA8000 visa garantir os direitos dos trabalhadores.
                    </p>

                    <h4 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>A norma SA8000 é composta por nove requisitos:</h4>
                    <ol className={styles.numberedList}>
                        <li>Trabalho infantil;</li>
                        <li>Trabalho forçado;</li>
                        <li>Saúde e segurança;</li>
                        <li>Liberdade de associação e negociação coletiva;</li>
                        <li>Discriminação;</li>
                        <li>Práticas disciplinares;</li>
                        <li>Horário de trabalho;</li>
                        <li>Remuneração suficiente;</li>
                        <li>Gestão do Sistema.</li>
                    </ol>

                    <h3 className={styles.sectionTitle}>NP 4469 - Sistema de gestão de responsabilidade social</h3>
                    <p className={styles.paragraph}>
                        Apoio às organizações que pretendem implementar um Sistema de Gestão da Responsabilidade Social, fornecendo-lhes um modelo único para o Desenvolvimento Sustentável.
                    </p>
                    <p className={styles.paragraph}>
                        <strong>Benefícios da NP 4469</strong><br />
                        Poupança dos recursos financeiros; Confiança nos fornecedores; Menores conflitos com ONG's, comunidades locais, trabalhadores e seus representantes, entidades públicas, órgãos governamentais, etc. Reforço das relações entre clientes e fornecedores; Salvaguarda de toda a cadeia de valor e confiança ao consumidor final; Melhoria da imagem da organização no mercado; Redução de custos com acidentes; Otimização da produtividade; Otimização da gestão de recursos humanos; Gestão ambientalmente responsável.
                    </p>
                </>
            )
        },
        rgpd: {
            id: 'rgpd',
            title: 'RGPD - Regulamento de proteção de dados pessoais',
            image: rgpdImg,
            description: (
                <>
                    <p className={styles.paragraph}>
                        O <strong>Regulamento (UE) 2016/679</strong> do Parlamento Europeu e do Conselho de 27 de abril de 2016, <strong>Regulamento Geral de Proteção de dados (RGPD)</strong>, entrou em vigor a 25 de maio de 2018 e substitui a atual diretiva e lei de proteção de dados pessoais.
                        As organizações devem implementar o RGPD, garantindo a sua correta aplicação. Para isso, é essencial conhecer as novas regras, analisar obrigações e verificar a conformidade. As medidas a adotar, devem ser estabelecidas em plano de ações e a sua concretização e eficácia, avaliada.
                    </p>

                    <h3 className={styles.sectionTitle}>Informação aos titulares dos dados:</h3>
                    <p className={styles.paragraph}>
                        O RGPD obriga a prestar informações aos titulares dos dados, designadamente a base legal para o tratamento de dados, o prazo de conservação dos dados, informações detalhadas sobre transferência de dados e possibilidade de apresentação de queixa à entidade reguladora. As informações devem ser prestadas de forma concisa, inteligível e de fácil acesso, utilizando uma linguagem clara e simples.
                    </p>

                    <h3 className={styles.sectionTitle}>Exercício dos direitos dos titulares dos dados:</h3>
                    <p className={styles.paragraph}>
                        A organização deverá rever procedimentos internos de garantia do exercício dos direitos dos titulares dos dados. O titular dos dados tem direito de acesso aos seus dados pessoais, retificação, apagamento, portabilidade, limitação de tratamento e oposição.
                    </p>

                    <h3 className={styles.sectionTitle}>Consentimento dos titulares dos dados:</h3>
                    <p className={styles.paragraph}>
                        O regulamento define de que forma as organizações devem obter o consentimento do titular dos dados. A organização deve verificar em que circunstâncias obteve consentimento e se necessário alterar o processo de acordo com os requisitos do RGPD.
                    </p>

                    <h3 className={styles.sectionTitle}>Dados sensíveis:</h3>
                    <p className={styles.paragraph}>
                        A organização deve avaliar a natureza dos dados que trata, de modo a verificar se se enquadram na categoria de dados sensíveis, aplicando quando necessário, condições específicas para o tratamento dos mesmos.
                    </p>

                    <h3 className={styles.sectionTitle}>Documentação e registo das atividades de tratamento:</h3>
                    <p className={styles.paragraph}>
                        As atividades relacionadas com o tratamento de dados pessoais, tanto as que resultam diretamente da obrigação de manter um registo como as relativas a outros procedimentos internos, devem ser documentadas de forma detalhada.
                    </p>

                    <h3 className={styles.sectionTitle}>Encarregado de proteção de dados:</h3>
                    <p className={styles.paragraph}>
                        A organização deve avaliar a necessidade de designar um Encarregado de Proteção de Dados, consoante a natureza dos dados que trata, o seu contexto e escala.
                    </p>
                </>
            )
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.ambientBackground}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
            </div>

            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Certificações e Sistemas de Gestão</h1>
                <p className={styles.heroSubtitle}>
                    Apoiamos a sua empresa na implementação de normas e regulamentos para garantir a qualidade, segurança e sustentabilidade do seu negócio.
                </p>
            </section>

            <div className={styles.contentContainer}>
                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Certificações</h3>
                    <nav>
                        <ul className={styles.navList}>
                            {certifications.map((cert) => (
                                <li key={cert.id}>
                                    <button
                                        className={`${styles.navButton} ${selectedCert === cert.id ? styles.active : ''}`}
                                        onClick={() => setSelectedCert(cert.id)}
                                    >
                                        {cert.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className={styles.displayArea}>
                    <div key={selectedCert}>
                        <div className={styles.contentHeader}>
                            <h2 className={styles.contentTitle}>{content[selectedCert].title}</h2>
                            <img src={content[selectedCert].image} alt={`Ilustração ${content[selectedCert].title}`} className={styles.contentImage} />
                        </div>
                        {content[selectedCert].description}
                    </div>
                </main>
            </div>

            {/* Contact Form Section */}
            <div className={styles.formSection}>
                <Contact />
            </div>
        </div>
    );
};

export default Certificacoes;

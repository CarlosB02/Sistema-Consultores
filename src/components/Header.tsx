import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        if (window.innerWidth > 768) {
            setActiveDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setActiveDropdown(null);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setMobileActiveDropdown(null); // Reset dropdowns when opening
        }
    };

    const toggleMobileDropdown = (menu: string, e: React.MouseEvent) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent navigation if it's a dropdown toggle
            setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileActiveDropdown(null);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/" onClick={closeMobileMenu}>
                    <img src={logo} alt="Sistema Consultores" className={styles.logo} />
                </Link>
            </div>

            <div
                className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={toggleMobileMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem} onClick={closeMobileMenu}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                    </li>

                    <li
                        className={`${styles.navItem} ${mobileActiveDropdown === 'incentivos' ? styles.mobileActive : ''}`}
                        onMouseEnter={() => handleMouseEnter('incentivos')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="#incentivos"
                            className={styles.navLink}
                            onClick={(e) => toggleMobileDropdown('incentivos', e)}
                        >
                            Incentivos
                        </a>
                        {(activeDropdown === 'incentivos' || mobileActiveDropdown === 'incentivos') && (
                            <ul className={styles.dropdown}>
                                <li onClick={closeMobileMenu}><Link to="/incentivos-portugal-2020">Portugal 2020</Link></li>
                                <li onClick={closeMobileMenu}><Link to="/incentivos-portugal-2020#pdr2020">PDR 2020</Link></li>
                                <li onClick={closeMobileMenu}><Link to="/incentivos-portugal-2020#empreendedorismo">Empreendedorismo</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className={styles.navItem} onClick={closeMobileMenu}>
                        <Link to="/contabilidade" className={styles.navLink}>Contabilidade</Link>
                    </li>

                    <li className={styles.navItem} onClick={closeMobileMenu}>
                        <Link to="/certificacoes" className={styles.navLink}>Certificações</Link>
                    </li>

                    <li
                        className={`${styles.navItem} ${mobileActiveDropdown === 'formacao' ? styles.mobileActive : ''}`}
                        onMouseEnter={() => handleMouseEnter('formacao')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="#formacao"
                            className={styles.navLink}
                            onClick={(e) => toggleMobileDropdown('formacao', e)}
                        >
                            Formação
                        </a>
                        {(activeDropdown === 'formacao' || mobileActiveDropdown === 'formacao') && (
                            <ul className={styles.dropdown}>
                                <li onClick={closeMobileMenu}><a href="#oferta">Oferta Formativa</a></li>
                                <li onClick={closeMobileMenu}><a href="#elearning">Plataforma E-Learning</a></li>
                            </ul>
                        )}
                    </li>

                    <li className={styles.navItem} onClick={closeMobileMenu}>
                        <Link to="/contactos" className={styles.contactBtn}>Contactos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

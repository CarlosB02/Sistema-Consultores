import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const location = useLocation();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isTransparent, setIsTransparent] = useState(false);
    const lastScrollY = useRef(0);

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight - 80; // Buffer for transition

            // Smart Header Visibility
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Transparent Header Logic
            if (isHome && currentScrollY < heroHeight) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }

            lastScrollY.current = currentScrollY;
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHome]); // Re-run effect when route changes/isHome changes

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
        <header
            className={`${styles.header} ${!isVisible ? styles.headerHidden : ''} ${isTransparent ? styles.headerTransparent : ''}`}
        >
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
                        <Link
                            to="/incentivos-portugal-2020"
                            className={styles.navLink}
                            onClick={(e) => toggleMobileDropdown('incentivos', e)}
                        >
                            Incentivos
                        </Link>
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
                                <li onClick={closeMobileMenu}><Link to="/oferta-formativa">Oferta Formativa</Link></li>
                                <li onClick={closeMobileMenu}><Link to="/oferta-formativa#elearning">Plataforma E-Learning</Link></li>
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

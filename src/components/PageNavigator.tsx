import React, { useEffect, useState } from 'react';

interface Section {
    id: string;
    label: string;
}

interface PageNavigatorProps {
    sections: Section[];
}

const PageNavigator: React.FC<PageNavigatorProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better accuracy

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial active section
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for header/padding
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            style={{
                position: 'fixed',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            }}
            className="page-navigator"
        >
            <style>
                {`
                    @media (max-width: 1200px) {
                        .page-navigator {
                            display: none !important;
                        }
                    }
                `}
            </style>
            {sections.map((section) => (
                <div
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    style={{
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        // group capability is not strictly inline styles, but we handle hover logic manually or with simple css if possible.
                    }}
                    onMouseEnter={(e) => {
                        const label = e.currentTarget.querySelector('.nav-label') as HTMLElement;
                        if (label) label.style.opacity = '1';
                        if (label) label.style.transform = 'translateX(0)';
                    }}
                    onMouseLeave={(e) => {
                        // Only hide if not active - implementing logic below
                        const label = e.currentTarget.querySelector('.nav-label') as HTMLElement;
                        if (activeSection !== section.id) {
                            if (label) label.style.opacity = '0';
                            if (label) label.style.transform = 'translateX(10px)';
                        }
                    }}
                >
                    {/* Label (Tooltips) */}
                    <span
                        className="nav-label"
                        style={{
                            position: 'absolute',
                            right: '30px',
                            whiteSpace: 'nowrap',
                            padding: '5px 10px',
                            background: 'rgba(15, 23, 42, 0.9)',
                            color: 'white',
                            borderRadius: '5px',
                            fontSize: '0.85rem',
                            pointerEvents: 'none',
                            opacity: activeSection === section.id ? 1 : 0,
                            transform: activeSection === section.id ? 'translateX(0)' : 'translateX(10px)',
                            transition: 'all 0.3s ease',
                            fontWeight: 500
                        }}
                    >
                        {section.label}
                    </span>

                    {/* Dot */}
                    <div
                        style={{
                            width: activeSection === section.id ? '12px' : '8px',
                            height: activeSection === section.id ? '12px' : '8px',
                            borderRadius: '50%',
                            backgroundColor: activeSection === section.id ? '#2563eb' : 'rgba(100, 116, 139, 0.5)',
                            transition: 'all 0.3s ease',
                            border: activeSection === section.id ? '2px solid rgba(37, 99, 235, 0.3)' : 'none'
                        }}
                    />
                </div>
            ))}
        </nav>
    );
};

export default PageNavigator;

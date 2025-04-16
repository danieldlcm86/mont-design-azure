import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './navbar.css';
import Logo from '/logos/dark-transparent.png';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='navbar-container'>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#diseños" onClick={toggleMenu}>Diseños</a></li>
                    <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
                    <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
                </div>

                {/* <div className="navbar-button-desktop">
                    <Link to={whatsappLink} onClick={toggleMenu}>
                        <button>
                            <img
                                src={WhatsApp}
                                alt="WhatsApp"
                                className="whatsapp-icon"
                            />
                            Contáctanos
                        </button>
                    </Link>
                </div> */}

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

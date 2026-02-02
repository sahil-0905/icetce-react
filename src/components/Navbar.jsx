import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;
    const isDropdownActive = ['/registration', '/speakers', '/author-guidelines', '/call-for-papers'].includes(location.pathname);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="4" width="6" height="6" rx="1" />
                            <rect x="14" y="4" width="6" height="6" rx="1" />
                            <rect x="4" y="14" width="6" height="6" rx="1" />
                            <rect x="14" y="14" width="6" height="6" rx="1" />
                        </svg>
                    </div>
                    ICETCE
                </Link>

                <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`} id="navMenu">
                    <li><Link to="/" className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}>Home</Link></li>
                    <li><Link to="/about" className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}>About</Link></li>
                    <li
                        className="navbar__dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <a href="#" className={`navbar__link navbar__dropdown-trigger ${isDropdownActive ? 'navbar__link--active' : ''}`}>
                            ICETCE-2026
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </a>
                        <div className={`navbar__dropdown-menu ${isDropdownOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                            <Link to="/registration" className="navbar__dropdown-link">Registration</Link>
                            <Link to="/speakers" className="navbar__dropdown-link">Speakers</Link>
                            <Link to="/author-guidelines" className="navbar__dropdown-link">Author Guidelines</Link>
                            <Link to="/call-for-papers" className="navbar__dropdown-link">Call for Papers</Link>
                        </div>
                    </li>
                    <li><Link to="/committee" className={`navbar__link ${isActive('/committee') ? 'navbar__link--active' : ''}`}>Committee</Link></li>
                    <li><Link to="/submit-paper" className={`navbar__link ${isActive('/submit-paper') ? 'navbar__link--active' : ''}`}>Submit Paper</Link></li>
                    <li><Link to="/previous-conferences" className={`navbar__link ${isActive('/previous-conferences') ? 'navbar__link--active' : ''}`}>Previous</Link></li>
                    <li><Link to="/contact" className={`navbar__link ${isActive('/contact') ? 'navbar__link--active' : ''}`}>Contact</Link></li>
                </ul>

                <button
                    className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

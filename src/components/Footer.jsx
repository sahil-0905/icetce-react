import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="navbar__logo-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="4" y="4" width="6" height="6" rx="1" />
                                    <rect x="14" y="4" width="6" height="6" rx="1" />
                                    <rect x="4" y="14" width="6" height="6" rx="1" />
                                    <rect x="14" y="14" width="6" height="6" rx="1" />
                                </svg>
                            </div>
                            ICETCE
                        </div>
                        <p className="footer__description">
                            ICETCE-2026 is organised by Department of Computer Science & Engineering / Department of Information Technology, SKIT, Jaipur.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/about" className="footer__link">About</Link></li>
                            <li><Link to="/committee" className="footer__link">Committee</Link></li>
                            <li><Link to="/speakers" className="footer__link">Speakers</Link></li>
                            <li><Link to="/registration" className="footer__link">Registration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer__title">Contact</h4>
                        <ul className="footer__links">
                            <li className="footer__link">SKIT Ramnagaria, Jagatpura</li>
                            <li className="footer__link">Jaipur-302017, Rajasthan</li>
                            <li><a href="mailto:icetce2026@skit.ac.in" className="footer__link">icetce2026@skit.ac.in</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2026 Department of Computer Science & Engineering, SKIT Jaipur.</p>
                    <p>#ICETCE-2026</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

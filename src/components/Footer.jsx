import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/skit_logo.png" alt="SKIT Logo" />
                            <img src="/logo.png" alt="ICETCE Logo" />
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

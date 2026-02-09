import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // ✅ Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIX: close menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = [
    "/registration",
    "/speakers",
    "/author-guidelines",
    "/call-for-papers",
  ].includes(location.pathname);

  // ✅ close menu on click (extra safe)
  // const handleNavClick = () => {
  //   setIsMenuOpen(false);
  //   setIsDropdownOpen(false);
  // };
  const handleNavClick = () => {
  setIsMenuOpen(false);
  setIsDropdownOpen(false);

  // 🔥 FORCE SCROLL TOP
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // mobile ke liye better
  });
};


  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={handleNavClick}>
    <img src="/skit_logo.png" alt="SKIT Logo" />
    <img src="/logo.png" alt="ICETCE Logo" />
   
  </Link>

        <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`} id="navMenu">
          <li>
            <Link
              to="/"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/") ? "navbar__link--active" : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/about") ? "navbar__link--active" : ""}`}
            >
              About
            </Link>
          </li>

          {/* ✅ Dropdown */}
          <li className="navbar__dropdown">
            <button
              type="button"
              className={`navbar__link navbar__dropdown-trigger ${
                isDropdownActive ? "navbar__link--active" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              ICETCE-2026
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className={`navbar__dropdown-menu ${isDropdownOpen ? "navbar__dropdown-menu--open" : ""}`}>
              <Link to="/registration" onClick={handleNavClick} className="navbar__dropdown-link">
                Registration
              </Link>
              <Link to="/speakers" onClick={handleNavClick} className="navbar__dropdown-link">
                Speakers
              </Link>
              <Link to="/author-guidelines" onClick={handleNavClick} className="navbar__dropdown-link">
                Author Guidelines
              </Link>
              <Link to="/call-for-papers" onClick={handleNavClick} className="navbar__dropdown-link">
                Call for Papers
              </Link>
            </div>
          </li>

          <li>
            <Link
              to="/committee"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/committee") ? "navbar__link--active" : ""}`}
            >
              Committee
            </Link>
          </li>

          <li>
            <Link
              to="/submit-paper"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/submit-paper") ? "navbar__link--active" : ""}`}
            >
              Submit Paper
            </Link>
          </li>

          <li>
            <Link
              to="/previous-conferences"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/previous-conferences") ? "navbar__link--active" : ""}`}
            >
              Previous
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`navbar__link ${isActive("/contact") ? "navbar__link--active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--active" : ""}`}
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

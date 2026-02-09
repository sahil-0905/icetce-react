import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/WhatsApp Image 2026-02-02 at 10.46.03.jpeg',
        '/WhatsApp Image 2026-02-02 at 10.46.04.jpeg',
        '/img3.jpeg'
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__slider">
                    {slides.map((slide, index) => (
                        <div key={index} className={`hero__slide ${index === currentSlide ? 'active' : ''}`}>
                            <img src={slide} alt={`Conference ${index + 1}`} />
                            <div className="hero__overlay"></div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button className="hero__arrow hero__arrow--left" onClick={prevSlide} aria-label="Previous slide">
                    ‹
                </button>
                <button className="hero__arrow hero__arrow--right" onClick={nextSlide} aria-label="Next slide">
                    ›
                </button>

                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge">
                            <span className="hero__badge-dot"></span>
                            9th International Conference
                        </div>

                        <h1 className="hero__title">ICETCE<span> 2026</span></h1>
                        <p className="hero__date">20<sup>th</sup>  21<sup>st</sup> November, 2026</p>
                        <p className="hero__description">
                            Emerging Technologies in Computer Engineering: Responsible AI and Green Digital Infrastructure for
                            Sustainable FinTech and Smart Societies
                        </p>
                        <div className="hero__buttons">
                            <Link to="/submit-paper" className="btn btn--primary btn--large">Submit Your Paper</Link>
                            <Link to="/about" className="btn btn--outline btn--large" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll">
                    <div className="hero__scroll-mouse"></div>
                    <span>Scroll</span>
                </div>
            </section>

            {/* Important Dates Section */}
            <section className="section" id="dates">
                <div className="container">
                    <div className="section-header text-center mb-12">
                        <h2>Important Dates</h2>
                        <p className="text-muted">Mark your calendar for these key deadlines</p>
                    </div>

                    <div className="dates-timeline">
                        <div className="date-item">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">15<sup>th</sup> July 2026</div>
                                <div className="date-item__title">Paper Submission Deadline</div>
                            </div>
                        </div>
                        <div className="date-item">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">31<sup>st</sup> August 2026</div>
                                <div className="date-item__title">Acceptance Notification</div>
                            </div>
                        </div>
                        <div className="date-item">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">20<sup>th</sup> September 2026</div>
                                <div className="date-item__title">Camera-Ready Manuscript</div>
                            </div>
                        </div>
                        <div className="date-item">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">15<sup>th</sup> October 2026</div>
                                <div className="date-item__title">Early Bird Registration</div>
                            </div>
                        </div>
                        <div className="date-item">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">31<sup>st</sup> October 2026</div>
                                <div className="date-item__title">Late Registration</div>
                            </div>
                        </div>
                        <div className="date-item date-item--highlight">
                            <div className="date-item__marker"></div>
                            <div className="date-item__content">
                                <div className="date-item__date">20<sup>th</sup> - 21<sup>st</sup> November 2026</div>
                                <div className="date-item__title">Conference Dates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section section--alt" id="about-preview">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <span className="section-label">About the Conference</span>
                            <h2>9th International Conference on Emerging Technologies in Computer Engineering</h2>
                            <p>
                                ICETCE-2026 provides an international platform for researchers, academicians, and industry
                                experts to present and exchange advances in Responsible Artificial Intelligence, Green Digital
                                Infrastructure, and Sustainable Digital Technologies.
                            </p>
                            <p>
                                As AI, cloud computing, and financial technologies continue to expand rapidly, their ethical,
                                energy, and environmental impacts have become critical global challenges. This conference
                                addresses these challenges by promoting the development of trustworthy, explainable, and fair AI
                                systems, alongside energy-efficient and low-carbon digital infrastructures.
                            </p>
                            <Link to="/about" className="btn btn--primary">Know More</Link>
                        </div>
                        <div className="about-image">
                            <img src="/about.png" alt="Conference" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Tracks Section */}
            <section className="section" id="tracks">
                <div className="container">
                    <div className="section-header text-center mb-12">
                        <span className="section-label">Call for Papers</span>
                        <h2>Conference Tracks</h2>
                        <p className="text-muted">Submit your research in one of our five focus areas</p>
                    </div>

                    <div className="tracks-grid">
                        <div className="track-card">
                            <div className="track-card__number">01</div>
                            <h3 className="track-card__title">Responsible AI</h3>
                            <p className="track-card__text">Explainable AI, Ethics, Governance & Trustworthy Systems</p>
                            <Link to="/call-for-papers" className="track-card__link">View Topics →</Link>
                        </div>
                        <div className="track-card">
                            <div className="track-card__number">02</div>
                            <h3 className="track-card__title">Green Computing</h3>
                            <p className="track-card__text">Sustainable Cloud, Energy-Efficient Data Centers</p>
                            <Link to="/call-for-papers" className="track-card__link">View Topics →</Link>
                        </div>
                        <div className="track-card">
                            <div className="track-card__number">03</div>
                            <h3 className="track-card__title">FinTech & AI</h3>
                            <p className="track-card__text">AI in Finance, Blockchain, Digital Payments</p>
                            <Link to="/call-for-papers" className="track-card__link">View Topics →</Link>
                        </div>
                        <div className="track-card">
                            <div className="track-card__number">04</div>
                            <h3 className="track-card__title">Digital Infrastructure</h3>
                            <p className="track-card__text">IoT, Smart Cities, Cybersecurity</p>
                            <Link to="/call-for-papers" className="track-card__link">View Topics →</Link>
                        </div>
                        <div className="track-card">
                            <div className="track-card__number">05</div>
                            <h3 className="track-card__title">Semiconductor & Hardware</h3>
                            <p className="track-card__text">Low-Power IC Design, AI Chips, Sensors</p>
                            <Link to="/call-for-papers" className="track-card__link">View Topics →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2>Ready to Share Your Research?</h2>
                        <p>Join researchers from around the world at ICETCE-2026</p>
                        <div className="cta-buttons">
                            <Link to="/submit-paper" className="btn btn--primary btn--large">Submit Paper</Link>
                            <Link to="/registration" className="btn btn--secondary btn--large">Register Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

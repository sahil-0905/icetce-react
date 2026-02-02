

function Contact() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">Get in Touch</span>
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Conference Secretariat</h2>
                            <p className="contact-intro">Feel free to reach out to us for any queries.</p>

                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="contact-card__icon">📍</div>
                                    <div className="contact-card__content">
                                        <h4>Address</h4>
                                        <p>SKIT, Ramnagaria<br />Jagatpura, Jaipur-302017<br />Rajasthan, India</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card__icon">✉️</div>
                                    <div className="contact-card__content">
                                        <h4>Email</h4>
                                        <p><a href="mailto:icetce2026@skit.ac.in">icetce2026@skit.ac.in</a></p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card__icon">📞</div>
                                    <div className="contact-card__content">
                                        <h4>Phone</h4>
                                        <p>+91-141-2712054</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card__icon">🌐</div>
                                    <div className="contact-card__content">
                                        <h4>Website</h4>
                                        <p><a href="https://icetce.skit.ac.in" target="_blank" rel="noopener noreferrer">icetce.skit.ac.in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5876508789397!2d75.82151097620478!3d26.818159876632665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc97d4c4efc9b%3A0xfb74f7ead4b4e657!2sSwami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20Gramothan%20(SKIT)!5e0!3m2!1sen!2sin!4v1706867123456!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SKIT Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Secretaries */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-header text-center mb-12">
                        <h2>Organizing Secretaries</h2>
                    </div>

                    <div className="secretaries-grid">
                        <div className="secretary-card">
                            <div className="secretary-card__avatar">👤</div>
                            <h4>Dr. Niketa Sharma</h4>
                            <p>Associate Professor, CSE</p>
                            <p className="secretary-card__email">niketa.sharma@skit.ac.in</p>
                        </div>
                        <div className="secretary-card">
                            <div className="secretary-card__avatar">👤</div>
                            <h4>Dr. Anjana Sangwan</h4>
                            <p>Associate Professor, CSE</p>
                            <p className="secretary-card__email">anjana.sangwan@skit.ac.in</p>
                        </div>
                        <div className="secretary-card">
                            <div className="secretary-card__avatar">👤</div>
                            <h4>Ms. Sanju Choudhary</h4>
                            <p>Associate Professor, IT</p>
                            <p className="secretary-card__email">sanju.choudhary@skit.ac.in</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;

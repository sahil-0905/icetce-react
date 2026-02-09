

function About() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">Learn More</span>
                        <h1>About ICETCE</h1>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="section">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-main">
                            <h2>About the Conference</h2>
                            <p className="lead">
                                The ICETCE conference aims to showcase advanced technologies, techniques, innovations and equipments in Computer Engineering. It provides a platform for researchers, scholars, experts, technicians, government officials and industry personnel from all over the world to discuss and share their valuable ideas and experiences.
                            </p>
                            <p>
                                This ICETCE-2026 is the next edition of the very successful annual series of the conferences being held since 2011. With each passing year it has contributed significantly to the research community in the shape of numerous quality research papers. This year the conference focuses on the very relevant area of advances in computing, healthcare and smart systems.
                            </p>

                            <h3 className="mt-8">Focus Areas</h3>
                            <ul className="check-list">
                                <li>Responsible, Trustworthy & Explainable AI</li>
                                <li>Green Data Centers & Sustainable Cloud Computing</li>
                                <li>Green FinTech, Responsible AI & Digital Trust</li>
                                <li>Resilient, Secure & Sustainable Digital Infrastructure</li>
                                <li>AI-Driven Semiconductor & Next-Generation Computing</li>
                            </ul>
                        </div>

                        <div className="content-side">
                            <div className="about-image">
                                <img src="/about.png" alt="ICETCE Conference" />
                            </div>
                            <div className="info-box">
                                <h4>Conference Details</h4>
                                <ul className="info-list">
                                    <li><strong>Date:</strong> 21-22 November 2026</li>
                                    <li><strong>Venue:</strong> SKIT, Jaipur</li>
                                    <li><strong>Mode:</strong> Hybrid</li>
                                </ul>
                            </div>

                            <div className="info-box info-box--accent">
                                <h4>Organized By</h4>
                                <p>Department of Computer Science & Engineering / Department of Information Technology, SKIT, Jaipur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About SKIT */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-header text-center mb-8">
                        <h2>About SKIT</h2>
                    </div>
                    <div className="skit-content">
                        <p>
                            Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT) was established in the year 2000 by a team of committed professionals & academicians to promote quality education in engineering & technology. Since then SKIT has emerged as a premier institute of technical education not only in Rajasthan but in whole of northern India. This feat has been realized through efficient & dedicated faculty members, innovative teaching and learning methods, state-of-the-art infrastructure and core values of discipline.
                        </p>
                        <p>
                            The institute is affiliated to the Rajasthan Technical University, Kota and approved by All India Council for Technical Education (AICTE), Ministry of Human Resource Development, Government of India to offer undergraduate & postgraduate programs in Engineering and Management. All the departments of the institute are accredited by National Board of Accreditation (NBA).
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

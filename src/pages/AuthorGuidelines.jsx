import { Link } from 'react-router-dom';


function AuthorGuidelines() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">For Authors</span>
                        <h1>Author Guidelines</h1>
                    </div>
                </div>
            </section>

            {/* Guidelines Content */}
            <section className="section">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-main">
                            <h2>Paper Formatting Requirements</h2>

                            <p className="lead">All papers must follow the IEEE Conference format.</p>

                            <div className="highlight-box">
                                <h3>General Requirements</h3>
                                <ul className="check-list">
                                    <li>Papers must be written in English</li>
                                    <li>Maximum 6 pages including references, figures, and tables</li>
                                    <li>Use IEEE Conference template (A4 format)</li>
                                    <li>Papers must be submitted in PDF format only</li>
                                    <li>Minimum font size: 10pt for text</li>
                                    <li>All margins: 1 inch (2.54 cm)</li>
                                </ul>
                            </div>

                            <h3 className="mt-8">Paper Structure</h3>
                            <div className="paper-structure">
                                <div className="paper-item"><span className="paper-item__label">Title</span><span className="paper-item__desc">Clear, concise, and descriptive</span></div>
                                <div className="paper-item"><span className="paper-item__label">Abstract</span><span className="paper-item__desc">Maximum 200 words</span></div>
                                <div className="paper-item"><span className="paper-item__label">Keywords</span><span className="paper-item__desc">4-6 keywords</span></div>
                                <div className="paper-item"><span className="paper-item__label">Introduction</span><span className="paper-item__desc">Problem statement and objectives</span></div>
                                <div className="paper-item"><span className="paper-item__label">Literature Review</span><span className="paper-item__desc">Related work</span></div>
                                <div className="paper-item"><span className="paper-item__label">Methodology</span><span className="paper-item__desc">Approach and implementation</span></div>
                                <div className="paper-item"><span className="paper-item__label">Results &amp; Discussion</span><span className="paper-item__desc">Findings and analysis</span></div>
                                <div className="paper-item"><span className="paper-item__label">Conclusion</span><span className="paper-item__desc">Summary and future work</span></div>
                                <div className="paper-item"><span className="paper-item__label">References</span><span className="paper-item__desc">IEEE citation format</span></div>
                            </div>

                            <h3 className="mt-8">Plagiarism Policy</h3>
                            <p>
                                All submissions will be checked using Turnitin/iThenticate. Papers with similarity index greater than 25% will be rejected.
                            </p>
                        </div>

                        <div className="content-side">
                            <div className="info-box">
                                <h4>Download Templates</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                    <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ textAlign: 'center' }}>
                                        📄 IEEE Word Template
                                    </a>
                                    <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ textAlign: 'center' }}>
                                        📄 IEEE LaTeX Template
                                    </a>
                                </div>
                            </div>

                            <div className="info-box info-box--accent">
                                <h4>Ready to Submit?</h4>
                                <p>Submit your paper through CMT</p>
                                <Link to="/submit-paper" className="btn btn--primary" style={{ width: '100%', textAlign: 'center' }}>Submit Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorGuidelines;

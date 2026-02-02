import { Link } from 'react-router-dom';


function SubmitPaper() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">Get Published</span>
                        <h1>Submit Your Paper</h1>
                    </div>
                </div>
            </section>

            {/* Submit Content */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center mb-12">
                        <h2>Paper Submission Portal</h2>
                        <p className="text-muted">All papers should be submitted through CMT Microsoft platform.</p>
                    </div>

                    {/* Submission Steps */}
                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Prepare Your Paper</h4>
                                <p>Use the IEEE format template. Max 6 pages including references.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Create CMT Account</h4>
                                <p>Register or login to Microsoft CMT submission system.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Submit Your Paper</h4>
                                <p>Upload your paper and complete author information.</p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Track Status</h4>
                                <p>Monitor your submission and respond to reviewer comments.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="submit-cta text-center" style={{ marginTop: '3rem' }}>
                        <a href="https://cmt3.research.microsoft.com/ICETCE2026" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                            Submit via CMT Microsoft →
                        </a>
                        <p className="mt-4 text-muted" style={{ fontSize: '0.875rem' }}>
                            Need help? <Link to="/author-guidelines" style={{ color: 'var(--color-red)' }}>View Author Guidelines</Link>
                        </p>
                    </div>

                    {/* Important Dates */}
                    <div className="highlight-box mt-12">
                        <h3>Important Dates</h3>
                        <ul className="check-list">
                            <li>Paper Submission Deadline: 31st August 2026</li>
                            <li>Acceptance Notification: 7th October 2026</li>
                            <li>Camera Ready Submission: 28th October 2026</li>
                            <li>Early Bird Registration: 4th November 2026</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
        .steps-container { display: flex; flex-direction: column; gap: 1rem; }
        .step-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: 0.5rem; transition: all 0.3s; }
        .step-item:hover { border-color: var(--color-blue); box-shadow: var(--shadow-md); }
        .step-number { width: 40px; height: 40px; background: var(--color-red); color: var(--color-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
        .step-content h4 { font-size: 1rem; margin-bottom: 0.25rem; }
        .step-content p { font-size: 0.875rem; color: var(--color-gray-600); margin: 0; }
      `}</style>
        </>
    );
}

export default SubmitPaper;

import { Link } from 'react-router-dom';


function Registration() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">ICETCE-2026</span>
                        <h1>Registration</h1>
                    </div>
                </div>
            </section>

            {/* Registration Content */}
            <section className="section">
                <div className="container">
                    <div className="reg-intro text-center mb-12">
                        <h2>Conference Registration Fee</h2>
                        <p className="text-muted">At least one of the authors of the paper has to register for the Conference.</p>
                    </div>

                    {/* Fee Tables */}
                    <div className="fee-grid">
                        {/* Authors */}
                        <div className="fee-card">
                            <div className="fee-card__header">
                                <h3>Authors</h3>
                                <p>Paper Presenters</p>
                            </div>
                            <div className="fee-card__body">
                                <div className="fee-row">
                                    <span className="fee-label">Research Scholar</span>
                                    <div className="fee-prices">
                                        <span className="fee-early">₹6,000</span>
                                        <span className="fee-late">₹8,000</span>
                                    </div>
                                </div>
                                <div className="fee-row">
                                    <span className="fee-label">Faculty</span>
                                    <div className="fee-prices">
                                        <span className="fee-early">₹9,000</span>
                                        <span className="fee-late">₹11,000</span>
                                    </div>
                                </div>
                                <div className="fee-row">
                                    <span className="fee-label">Industry</span>
                                    <div className="fee-prices">
                                        <span className="fee-early">₹12,000</span>
                                        <span className="fee-late">₹15,000</span>
                                    </div>
                                </div>
                                <div className="fee-legend">
                                    <span className="fee-early-legend">Early Bird</span>
                                    <span className="fee-late-legend">Late Fee</span>
                                </div>
                            </div>
                            <div className="fee-card__footer">
                                <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-9k" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Register Now</a>
                            </div>
                        </div>

                        {/* Co-Authors */}
                        <div className="fee-card">
                            <div className="fee-card__header">
                                <h3>Co-Authors</h3>
                                <p>Additional Authors</p>
                            </div>
                            <div className="fee-card__body">
                                <div className="fee-row">
                                    <span className="fee-label">Co-Author Fee</span>
                                    <div className="fee-prices">
                                        <span className="fee-early">₹4,000</span>
                                        <span className="fee-late">₹5,000</span>
                                    </div>
                                </div>
                                <div className="fee-legend">
                                    <span className="fee-early-legend">Early Bird</span>
                                    <span className="fee-late-legend">Late Fee</span>
                                </div>
                            </div>
                            <div className="fee-card__footer">
                                <a href="https://erp.skit.ac.in/register/r/Co-Author-4k" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Register</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Registration;

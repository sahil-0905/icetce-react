import { useState } from 'react';
import { Link } from 'react-router-dom';


const tracks = [
    {
        id: 1,
        title: 'Responsible, Trustworthy & Explainable AI',
        topics: [
            'Ethical AI and AI Governance',
            'Explainability and Interpretability in AI',
            'Fairness, Accountability, and Transparency (FAT) in AI',
            'AI for Social Good',
            'AI Models and Regulatory Compliance',
            'Bias Detection and Mitigation in AI',
            'Human-Centric AI Design',
            'Adversarial Robustness and AI Security',
            'Responsible AI in Autonomous Systems',
            'Privacy-Preserving AI (Federated Learning, Differential Privacy)',
        ],
    },
    {
        id: 2,
        title: 'Green Data Centers & Sustainable Cloud Computing',
        topics: [
            'Carbon Footprint Measurement in Cloud',
            'Renewable Energy Powered Data Centers',
            'Energy-Efficient Cloud Computing',
            'Green Cloud Architectures',
            'E-Waste Management in IT Infrastructure',
            'Sustainable DevOps and GreenOps',
            'Sustainable Blockchain Technologies',
            'Circular Economy in IT',
            'Sustainable Software Engineering',
            'Clean-Tech Innovation and Policies',
        ],
    },
    {
        id: 3,
        title: 'Green FinTech, Responsible AI & Digital Trust',
        topics: [
            'Green Finance and ESG Reporting',
            'AI for Sustainable Investment Decisions',
            'Digital Trust Frameworks',
            'AI-Driven Risk Assessment in Finance',
            'AI in Fraud Detection',
            'Ethical Fintech Products',
            'AI for Climate Risk Modelling',
            'Sustainable Digital Banking Solutions',
            'Green Bonds and AI-based Tracking',
            'Digital Financial Inclusion',
        ],
    },
    {
        id: 4,
        title: 'Resilient, Secure & Sustainable Digital Infrastructure',
        topics: [
            'Sustainable IoT and Edge Computing',
            'Green 5G/6G Communication',
            'Cybersecurity for Green Infrastructure',
            'Secure and Sustainable Smart Grids',
            'Resilient Cloud-Native Architectures',
            'Low Power Embedded Systems',
            'AI-Optimized Network Infrastructure',
            'Disaster-Resilient Digital Systems',
            'Digital Twins for Sustainability',
            'Energy-Efficient Wireless Networks',
        ],
    },
    {
        id: 5,
        title: 'AI-Driven Semiconductor & Next-Generation Computing',
        topics: [
            'Neuromorphic Computing',
            'Quantum-Assisted AI Computing',
            'AI for Semiconductor Manufacturing',
            'Low-Power AI Chip Design',
            'Hardware-Aware AI Optimization',
            'AI-Driven EDA Tools',
            'RISC-V and Open Hardware for AI',
            'AI Accelerators (TPUs, NPUs, FPGAs)',
            'Edge AI Chip Development',
            'AI for Yield Prediction in Chip Fabrication',
        ],
    },
];

function CallForPapers() {
    const [openTrack, setOpenTrack] = useState(null);

    const toggleTrack = (id) => {
        setOpenTrack(openTrack === id ? null : id);
    };

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero page-hero--short">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">Research Tracks</span>
                        <h1>Call for Papers</h1>
                    </div>
                </div>
            </section>

            {/* CFP Content */}
            <section className="section">
                <div className="container">
                    <div className="cfp-intro text-center mb-12">
                        <p className="lead">Papers are invited in the areas including but not limited to:</p>
                    </div>

                    {/* Track Accordion */}
                    <div className="tracks-accordion">
                        {tracks.map((track) => (
                            <div key={track.id} className={`track-item ${openTrack === track.id ? 'open' : ''}`}>
                                <button className="track-header" onClick={() => toggleTrack(track.id)}>
                                    <span className="track-number">{String(track.id).padStart(2, '0')}</span>
                                    <span className="track-title">{track.title}</span>
                                    <span className="track-toggle">+</span>
                                </button>
                                <div className="track-content">
                                    <ul className="topic-list">
                                        {track.topics.map((topic, index) => (
                                            <li key={index}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="cfp-cta text-center mt-16">
                        <h3>Ready to Submit?</h3>
                        <p className="text-muted mb-6">Share your research with the global community</p>
                        <Link to="/submit-paper" className="btn btn--primary btn--lg">Submit Your Paper</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CallForPapers;

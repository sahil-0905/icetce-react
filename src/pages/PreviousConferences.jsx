import { useState, useEffect } from 'react';

const conferences = [
    { year: 2025, theme: 'Artificial Intelligence and Smart Computing', papers: '180+', attendees: '400+', link: 'https://icetce.skit.ac.in/2025', image: '/2025.jpeg' },
    { year: 2024, theme: 'Machine Learning and Data Science', papers: '165+', attendees: '380+', link: 'https://icetce.skit.ac.in/2024', image: '/2024.jpeg' },
    { year: 2023, theme: 'Cloud Computing and Cybersecurity', papers: '150+', attendees: '350+', link: 'https://icetce.skit.ac.in/2023', image: '/2023.jpeg' },
    { year: 2022, theme: 'IoT and Smart Systems', papers: '140+', attendees: '320+', link: 'https://icetce.skit.ac.in/2022', image: '/2022.jpeg' },
    { year: 2021, theme: 'Virtual Conference - Digital Transformation', papers: '130+', attendees: '500+', link: 'https://icetce.skit.ac.in/2021', image: '/2021.jpeg' },
    { year: 2020, theme: 'Healthcare and Computing', papers: '120+', attendees: '300+', link: 'https://icetce.skit.ac.in/2020', image: '/2020.jpeg' },
    { year: 2019, theme: 'Big Data and Analytics', papers: '110+', attendees: '280+', link: 'https://icetce.skit.ac.in/2019', image: '/2019.jpeg' },
    { year: 2018, theme: 'Emerging Technologies', papers: '100+', attendees: '250+', link: 'https://icetce.skit.ac.in/pp.pdf', image: '2018.jpeg' },
];

const earlierConferences = [
    { year: 2016, name: 'NCETCE-2016', link: 'https://icetce.skit.ac.in/ce16.pdf' },
    { year: 2015, name: 'NCETCE-2015', link: 'https://icetce.skit.ac.in/ce15.pdf' },
    { year: 2014, name: 'NCETCE-2014', link: 'https://icetce.skit.ac.in/ce14.pdf' },
    { year: 2013, name: 'NCETCE-2013', link: 'https://icetce.skit.ac.in/ce13.pdf' },
    { year: 2012, name: 'NCETCE-2012', link: 'https://icetce.skit.ac.in/ce12.pdf' },
    { year: 2011, name: 'NCETCE-2011', link: 'https://icetce.skit.ac.in/ce11.pdf' },
];

function PreviousConferences() {
    const [counts, setCounts] = useState({ papers: 0, attendees: 0, countries: 0, universities: 0 });

    useEffect(() => {
        const targets = { papers: 1500, attendees: 5000, countries: 25, universities: 100 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
                papers: Math.round(targets.papers * progress),
                attendees: Math.round(targets.attendees * progress),
                countries: Math.round(targets.countries * progress),
                universities: Math.round(targets.universities * progress),
            });
            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <span className="page-hero__label">Our Journey</span>
                        <h1>Previous Conferences</h1>
                        <p>14 Years of Excellence in Computer Engineering</p>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">{counts.papers}+</div>
                            <div className="stat-label">Papers Published</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{counts.attendees}+</div>
                            <div className="stat-label">Total Attendees</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{counts.countries}+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{counts.universities}+</div>
                            <div className="stat-label">Universities</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="timeline-container">
                        {/* Year Navigation */}
                        <nav className="year-nav">
                            {conferences.map((conf) => (
                                <a key={conf.year} href={`#y${conf.year}`} className="year-nav__item">{conf.year}</a>
                            ))}
                        </nav>

                        {/* Timeline */}
                        <div className="timeline">
                            {conferences.map((conf, index) => (
                                <div
                                    key={conf.year}
                                    className={`timeline-item ${index % 2 === 1 ? 'timeline-item--right' : ''}`}
                                    id={`y${conf.year}`}
                                >
                                    <div className="timeline-marker">
                                        <span className="timeline-year">{conf.year}</span>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="timeline-card__image">
                                            <img src={conf.image} alt={`ICETCE ${conf.year}`} />
                                        </div>
                                        <div className="timeline-card__content">
                                            <h3>ICETCE-{conf.year}</h3>
                                            <p className="timeline-card__theme">{conf.theme}</p>
                                            <div className="timeline-card__stats">
                                                <span>📄 {conf.papers} Papers</span>
                                                <span>👥 {conf.attendees} Attendees</span>
                                            </div>
                                            <a href={conf.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Earlier Conferences */}
            <section className="section section--alt">
                <div className="container">
                    <div className="section-header text-center mb-12">
                        <h2>Earlier Editions</h2>
                        <p className="text-muted">The foundation years (2011-2016)</p>
                    </div>

                    <div className="early-grid">
                        {earlierConferences.map((conf) => (
                            <a key={conf.year} href={conf.link} target="_blank" rel="noopener noreferrer" className="early-card">
                                <span className="early-card__year">{conf.year}</span>
                                <span className="early-card__name">{conf.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PreviousConferences;

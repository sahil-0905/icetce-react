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
                    <div className="reg-card">
                        <div className="reg-card__header">
                            <h2>Conference Registration Fee & Policy</h2>
                        </div>
                        <div className="reg-card__body">
                            <p className="reg-note">
                                At least one of the authors of the paper has to register for the Conference. It is compulsory for one of the authors to present the paper at the conference to have it published.
                            </p>

                            {/* Registration Fee Table */}
                            <div className="reg-table-wrapper">
                                <table className="reg-table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Indian Author (Member IEEE) / Foreign Author (Member IEEE)</th>
                                            <th>Indian Author (Non-Member IEEE) / Foreign Author (Non-Member IEEE)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Faculty</td>
                                            <td>9000/- / (105 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-9k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                            <td>11000/- / (130 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-11k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>Research Scholar</td>
                                            <td>6000/- / (70 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-6k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                            <td>8000/- / (100 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-8k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>Industry</td>
                                            <td>12000/- / (145 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-12k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                            <td>15000/- / (180 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-15k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>Attendee / Participant</td>
                                            <td>4000/- / (50 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-4k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                            <td>5000/- / (60 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-5k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                        </tr>
                                        <tr>
                                            <td>Poster Presentation</td>
                                            <td>2000/- (20 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-2k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                            <td>3000/- (40 $) <a href="https://erp.skit.ac.in/register/r/ICETCE-2026-3k" target="_blank" rel="noopener noreferrer" className="reg-link">Click Here</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="reg-note reg-note--small">
                                Registration Fee may be paid through Online NEFT Transfer.
                            </p>

                            {/* Bank Details */}
                            <h3 className="reg-subtitle">Electronic (Online) Fund Transfer Details</h3>
                            <div className="reg-table-wrapper">
                                <table className="reg-table reg-table--bank">
                                    <tbody>
                                        <tr>
                                            <td className="reg-table__label">Bank Name</td>
                                            <td>HDFC BANK LTD</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">Branch address</td>
                                            <td>3 D Villa Station, Villa Station, Jaipur-302001, Rajasthan</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">Account Name</td>
                                            <td>SWAMI KESHVANAND INSTITUTE OF TECHNOLOGY MANAGEMENT & GRAMOTHAN</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">Account Number</td>
                                            <td>50100200092582</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">Account Type</td>
                                            <td>Saving Account</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">MICR Code</td>
                                            <td>302240008</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">IFSC Code</td>
                                            <td>HDFC0001329</td>
                                        </tr>
                                        <tr>
                                            <td className="reg-table__label">Email Id</td>
                                            <td><a href="mailto:icetce2026@skit.ac.in">icetce2026@skit.ac.in</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="reg-note reg-note--small">
                                or Registration fee may be paid through DD in favour of "Swami Keshvanand Institute of Technology, Management & Gramothan" payable at Jaipur or by Online Transfer/Cash.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;

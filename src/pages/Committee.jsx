const committeeData = {
    'Chief Patron': [
        { name: 'Shri Raja Ram Meel', org: 'Patron, SKIT' },
        { name: 'Shri Surja Ram Meel', org: 'Chairman, SKIT' },
    ],
    'Patron': [
        { name: 'Shri Jaipal Meel', org: 'Director, SKIT' },
    ],
    'General Chair': [
        { name: 'Prof. (Dr.) Seeram Ramakrishna', org: 'Chair Professor of Tsinghua University, Xinghua and Adjunct Professor, National University of Singapore' },
    ],
    'General Co-Chair': [
        { name: 'Prof. (Dr.) C. M. Choudhary', org: 'Professor, Department of Computer Science & Engineering, SKIT, Jaipur' },
    ],
    'Conference Chair': [
        { name: 'Prof. (Dr.) Anil Chaudhary', org: 'IEEE SM: 90508967, Professor, Department of Information Technology, SKIT, Jaipur' },
    ],
    'Technical Program Chair': [
        { name: 'Prof. (Dr.) Arun K. Somani', org: 'Associate Dean for Research, College of Engineering, Iowa State University, USA' },
        { name: 'Prof. (Dr.) Somitra Kumar Sanadhya', org: 'Professor, Indian Institute of Technology (IIT), Kanpur, India' },
        { name: 'Dr. Basant Agarwal', org: 'Associate Professor, Department of CSE, Central University of Rajasthan' },
        { name: 'Prof. (Dr.) Pankaj Dadheech', org: 'Professor, SKIT, Jaipur, Rajasthan, India' },
    ],
    'Honorary Chairs': [
        { name: 'Prof. M. N. Hoda', org: 'Chairperson-IEEE Delhi Section & Director, BVICAM, New Delhi' },
        { name: 'Prof. K. Subramanian', org: 'Ex-NIC, Chair, Computer Society Chapter, IEEE Delhi Section, India' },
        { name: 'Dr. Lava Bhargava', org: 'Chairperson, IEEE Rajasthan Subsection & Professor (ECE), MNIT, Jaipur' },
        { name: 'Dr. D. Boolchandani', org: 'MNIT, Jaipur, Immediate Past Chairman, IEEE Rajasthan Subsection, India' },
        { name: 'Prof. Mahesh M Bundele', org: 'Member, IEEE Delhi Section, India' },
    ],
    'Finance Chair': [
        { name: 'Dr. Loveleen Kumar', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Kailash Soni', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
    ],
    'Publication Chair': [
        { name: 'Dr. Mehul Mahrishi', org: 'Professor, Head-CSE Department, SKIT, Jaipur' },
        { name: 'Dr. Vipin Jain', org: 'Associate Professor, Head-IT Department, SKIT, Jaipur' },
        { name: 'Dr. Niketa Sharma', org: 'Associate Professor, CSE Department, SKIT, Jaipur' },
        { name: 'Dr. Vinay Kanungo', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Ms. Sanju Choudhary', org: 'Associate Professor, IT Department, SKIT, Jaipur' },
    ],
    'Advisory Committee': [
        { name: 'Prof. Dharm Singh Jat', org: 'Professor, Computer Science, Namibia University of Science and Technology (NUST), Namibia' },
        { name: 'Prof. Valentina E. Balas', org: 'Full Professor, "Aurel Vlaicu" University of Arad, Romania' },
        { name: 'Prof. San Murugesan', org: 'Adjunct Professor, Western Sydney University; Director, BRITE Professional Services' },
        { name: 'Prof. Alexander Chernikov', org: 'Head of Educational & Research Laboratory, Bauman Moscow State Technical University, Moscow' },
        { name: 'Dr. Ghasi Ram Verma', org: 'Professor Emeritus, Department of Mathematics, University of Rhode Island Kingston, USA' },
        { name: 'Prof. Raman M. Unnikrishnan', org: 'Dean Professor Fellow IEEE, California State University, United States' },
        { name: 'Dr. Mauro Conti', org: 'Professor, Department of Mathematics, University of Padua, Italy' },
        { name: 'Prof. Sanjeev Kumar', org: 'Indian Institute of Technology (IIT), Roorkee' },
        { name: 'Dr. Neeraj Goyal', org: 'Indian Institute of Technology (IIT), Ropar' },
        { name: 'Prof. Manju Khari', org: 'Jawahar Lal Nehru University, New Delhi' },
    ],
    'Steering Committee': [
        { name: 'Dr. Sunil Dhankhar', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Dr. Vinay Kanungo', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Dr. Megha Gupta', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Dr. Yogendra Gupta', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Dr. S.R. Dogiwal', org: 'Associate Professor, Department of IT, SKIT, Jaipur' },
        { name: 'Ms. Nidhi Srivastava', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. M. K. Beniwal', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Manish Kumar Sharma', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
    ],
    'Organizing Secretary': [
        { name: 'Dr. Niketa Sharma', org: 'Associate Professor, CSE Department, SKIT, Jaipur' },
        { name: 'Dr. Anjana Sangwan', org: 'Associate Professor, CSE Department, SKIT, Jaipur' },
        { name: 'Ms. Sanju Choudhary', org: 'Associate Professor, IT Department, SKIT, Jaipur' },
    ],
    'Publicity Committee': [
        { name: 'Dr. Aakriti Sharma', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Naveen Jain', org: 'Assistant Professor, Department of IT, SKIT, Jaipur' },
        { name: 'Ms. Sanju Choudhary', org: 'Associate Professor, Department of IT, SKIT, Jaipur' },
    ],
    'Logistic & Hospitality Committee': [
        { name: 'Dr. Loveleen Kumar', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Manish Kumar Sharma', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Shrish Nagar', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Sohan Lal Gupta', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Manoj Raman', org: 'Assistant Professor, Department of IT, SKIT, Jaipur' },
    ],
    'Accommodation Committee': [
        { name: 'Dr. Anjana Sangwan', org: 'Associate Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Ms. Shalini Singhal', org: 'Assistant Professor, Department of IT, SKIT, Jaipur' },
    ],
    'Transportation Committee': [
        { name: 'Mr. Naveen Jain', org: 'Assistant Professor, IT, SKIT, Jaipur' },
        { name: 'Mr. Vikram Khandelwal', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Rajesh Rajaan', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Praveen Kumar Yadav', org: 'Assistant Professor, Department of IT, SKIT, Jaipur' },
        { name: 'Mr. Jagendra Chaudhary', org: 'Assistant Professor, Department of IT, SKIT, Jaipur' },
    ],
    'Website Administration': [
        { name: 'Mr. Rajesh Rajaan', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
        { name: 'Mr. Milind Sharma', org: 'Assistant Professor, Department of CSE, SKIT, Jaipur' },
         { name: 'Sahil Kumar', org: 'Full Stack developer ,SKIT,Jaipur' },
        { name: 'Lov chaudhary', org: 'Full Stack developer, SKIT, Jaipur' },
    ],
};

function Committee() {
    return (
        <>
            {/* Page Hero */}
            <section className="committee-hero">
                <div className="committee-hero__bg"></div>
                <div className="container">
                    <div className="committee-hero__content">
                        <span className="committee-hero__label">Meet The Team</span>
                        <h1>Organizing Committee</h1>
                        <p>Distinguished leaders driving ICETCE-2026</p>
                    </div>
                </div>
            </section>

            {/* Committee Content */}
            <section className="committee-content">
                <div className="container">
                    {Object.entries(committeeData).map(([title, members]) => (
                        <div key={title} className="committee-block">
                            <h2 className="committee-block__title">{title}</h2>
                            <div className="committee-block__members">
                                {members.map((member, index) => (
                                    <div key={index} className="member-card">
                                        <h3 className="member-card__name">{member.name}</h3>
                                        <p className="member-card__org">{member.org}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Committee;

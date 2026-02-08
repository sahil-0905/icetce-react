

// const speakers = [
//     { name: 'Prof. Seeram Ramakrishna', title: 'Vice President Research Strategy', org: 'National University of Singapore', link: 'https://scholar.google.co.in/citations?user=a49NVmkAAAAJ&hl=en' },
//     { name: 'Prof. Arun K Somani', title: 'Associate Dean for Research, College of Engineering', org: 'Iowa State University, USA', link: 'http://class.ece.iastate.edu/arun/' },
//     { name: 'Dr. G R Sinha', title: 'PROVOST (Vice Chancellor)', org: 'GSFC University, Gujarat', link: 'https://scholar.google.co.in/citations?user=4L66jAsAAAAJ&hl=en' },
//     { name: 'Prof. Samira Hosseini', title: 'Director of Writing Lab, Institute for Future of Education', org: 'Technologico De Monterrey, Mexico', link: 'https://scholar.google.com/citations?user=-ln8q_sAAAAJ&hl=en&oi=sra' },
//     { name: 'Dr. Somitra Kumar Sanadhya', title: 'Professor (CSE)', org: 'IIT Kanpur, India', link: 'https://scholar.google.com/citations?user=SZD5gEoAAAAJ&hl=en&oi=sra' },
//     { name: 'Dr. Puneet Goyal', title: 'Associate Professor (CSE)', org: 'IIT Ropar, India', link: 'https://scholar.google.com/citations?user=VkREzegAAAAJ&hl=en&oi=sra' },
//     { name: 'Dr. Emmanuel S. Pilli', title: 'Associate Professor', org: 'MNIT Jaipur, India', link: 'https://scholar.google.co.in/citations?user=9-s5XjIAAAAJ&hl=en' },
//     { name: 'Mr. Daman Dev Sood', title: 'PoP', org: 'Chitkara University, Chandigarh', link: 'https://www.damandevsood.com/about' },
//     { name: 'Prof. K. Subramanian', title: 'Ex-NIC, Chair Computer Society Chapter', org: 'IEEE Delhi Section, India', link: 'https://www.linkedin.com/in/k-subramanian' },
//     { name: 'Dr. D Boolchandani', title: 'Immediate Past Chairman, IEEE Rajasthan Subsection', org: 'MNIT Jaipur, India' },
//     { name: 'Dr. S. Nanda', title: 'Associate Professor', org: 'MNIT Jaipur, India' },
//     { name: 'Mr. Harish Indouria', title: 'Executive Vice President', org: 'AU Small Finance Bank' },
//     { name: 'Mr. Amit Kumar Gupta', title: "Scientist 'F'", org: 'DRDO, Government of India' },
//     { name: 'Dr. Akash Saxena', title: 'Associate Professor', org: 'Central University of Haryana' },
//     { name: 'Dr. Poonam Goyal', title: 'Associate Professor', org: 'BITS Pilani, India' },
//     { name: 'Prof. M. N. Hoda', title: 'Chairperson-IEEE Delhi Section & Director', org: 'BVICAM, New Delhi' },
//     { name: 'Dr. S. S. Tyagi', title: 'Director', org: 'IIMT College, Greater Noida' },
//     { name: 'Dr. A Murali M Rao', title: 'Professor', org: 'IGNOU, New Delhi' },
// ];

// function Speakers() {
//     return (
//         <>
//             {/* Page Hero */}
//             <section className="page-hero">
//                 <div className="page-hero__bg"></div>
//                 <div className="container">
//                     <div className="page-hero__content">
//                         <span className="page-hero__label">ICETCE-2026</span>
//                         <h1>Keynote Speakers</h1>
//                         <p>Distinguished researchers and industry leaders from around the world</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Speakers List */}
//             <section className="section">
//                 <div className="container">
//                     <div className="speakers-grid">
//                         {speakers.map((speaker, index) => (
//                             <div key={index} className="speaker-card">
//                                 <h3>{speaker.name}</h3>
//                                 <p className="speaker-card__title">{speaker.title}</p>
//                                 <p className="speaker-card__org">{speaker.org}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Speakers;

import React from "react";
import seeram from "../assets/speakers/seeram.png";
import defaultImg from "../assets/speakers/defaultImg.png";
import teacher2 from "../assets/speakers/teacher2.jpg";
import teacher4 from "../assets/speakers/teacher4.jpg";

const speakers = [
  {
    name: "Prof. Seeram Ramakrishna",
    title: "Vice President Research Strategy",
    org: "National University of Singapore",
    image: seeram, 
  },
  {
    name: "Prof. Arun K Somani",
    title: "Associate Dean for Research, College of Engineering",
    org: "Iowa State University, USA",
    image: teacher2,
  },
  {
    name: "Dr. G R Sinha",
    title: "PROVOST (Vice Chancellor)",
    org: "GSFC University, Gujarat",
    image: teacher4,
  },
  {
    name: "Prof. Samira Hosseini",
    title: "Director of Writing Lab",
    org: "Tecnológico de Monterrey, Mexico",
    image: defaultImg,
  },
  {
    name: "Dr. Somitra Kumar Sanadhya",
    title: "Professor (CSE)",
    org: "IIT Kanpur, India",
    image: defaultImg,
  },
  {
    name: "Dr. Puneet Goyal",
    title: "Associate Professor (CSE)",
    org: "IIT Ropar, India",
    image: defaultImg,
  },
  {
    name: "Dr. Emmanuel S. Pilli",
    title: "Associate Professor",
    org: "MNIT Jaipur, India",
    image: defaultImg,
  },
  {
    name: "Mr. Daman Dev Sood",
    title: "Professor of Practice",
    org: "Chitkara University, Chandigarh",
    image: defaultImg,
  },
  {
    name: "Prof. K. Subramanian",
    title: "Chair, Computer Society Chapter",
    org: "IEEE Delhi Section, India",
    image: defaultImg,
  },
  {
    name: "Dr. D Boolchandani",
    title: "Immediate Past Chairman",
    org: "IEEE Rajasthan Subsection",
    image: defaultImg,
  },
  {
    name: "Dr. S. Nanda",
    title: "Associate Professor",
    org: "MNIT Jaipur, India",
    image: defaultImg,
  },
  {
    name: "Mr. Harish Indouria",
    title: "Executive Vice President",
    org: "AU Small Finance Bank",
    image: defaultImg,
  },
  {
    name: "Mr. Amit Kumar Gupta",
    title: "Scientist 'F'",
    org: "DRDO, Government of India",
    image: defaultImg,
  },
  {
    name: "Dr. Akash Saxena",
    title: "Associate Professor",
    org: "Central University of Haryana",
    image: defaultImg,
  },
  {
    name: "Dr. Poonam Goyal",
    title: "Associate Professor",
    org: "BITS Pilani, India",
    image: defaultImg,
  },
  {
    name: "Prof. M. N. Hoda",
    title: "Chairperson – IEEE Delhi Section",
    org: "BVICAM, New Delhi",
    image: defaultImg,
  },
  {
    name: "Dr. S. S. Tyagi",
    title: "Director",
    org: "IIMT College, Greater Noida",
    image: defaultImg,
  },
  {
    name: "Dr. A. Murali M. Rao",
    title: "Professor",
    org: "IGNOU, New Delhi",
    image: defaultImg,
  },
];

export default function Speakers() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__label">ICETCE-2026</span>
            <h1>Keynote Speakers</h1>
            <p>Distinguished researchers and industry leaders from around the world</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <div className="speaker-card__image">
                  <img src={speaker.image} alt={speaker.name} />
                </div>
                <h3>{speaker.name}</h3>
                <p className="speaker-card__title">{speaker.title}</p>
                <p className="speaker-card__org">{speaker.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


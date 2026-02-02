import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Committee from './pages/Committee';
import Registration from './pages/Registration';
import CallForPapers from './pages/CallForPapers';
import AuthorGuidelines from './pages/AuthorGuidelines';
import SubmitPaper from './pages/SubmitPaper';
import PreviousConferences from './pages/PreviousConferences';
import Contact from './pages/Contact';

// Import all styles
import './styles/styles.css';
import './styles/home.css';
import './styles/pages.css';
import './styles/speakers.css';
import './styles/committee.css';
import './styles/previous.css';
import './styles/registration.css';
import './styles/cfp.css';
import './styles/contact.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/author-guidelines" element={<AuthorGuidelines />} />
        <Route path="/submit-paper" element={<SubmitPaper />} />
        <Route path="/previous-conferences" element={<PreviousConferences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

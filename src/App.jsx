import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import ProjectList from './components/ProjectList.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import Codolio from './components/Codolio.jsx';
import BlogList from './components/BlogList.jsx';

import AnimatedBackground from './components/AnimatedBackground'; 
import { Color } from 'three'; // Trigger streak // // 

function App() {
  return (
    <>
      <AnimatedBackground />
      <Router>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/codolio" element={<Codolio />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

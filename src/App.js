import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import SocialDock from './components/SocialDock';
import CaseStudyHel from './pages/CaseStudyHel'; // Make sure this matches your file name
import './GlobalStyles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/helfi" element={<CaseStudyHel />} />
        </Routes>
        <Footer />
        <SocialDock />
      </div>
    </Router>
  );
}

export default App;

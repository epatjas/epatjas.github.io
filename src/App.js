import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NovaBrand from './pages/NovaBrand';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialDock from './components/SocialDock';
import HelFi from './pages/HelFi';
import FiraBrand from './pages/FiraBrand';
import Work from './pages/Work';
import About from './pages/About';
import NovaAI from './pages/Nova_ai'; 
import NovaPlatform from './pages/nova_platform'; 
import CodingCompany from './pages/CodingCompany';
import './GlobalStyles.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLightTheme = ['/work', '/work/NovaBrand', '/work/Hel_fi', '/work/FiraBrand', '/work/Nova_ai', '/work/nova_platform'].includes(location.pathname);

  React.useEffect(() => {
    document.body.className = isLightTheme ? 'light-theme' : 'dark-theme';
  }, [isLightTheme]);

  return (
    <div className={`app-wrapper ${isLightTheme ? 'light-theme' : 'dark-theme'}`} style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header currentPath={location.pathname} isLight={!isLightTheme} />
      <main style={{flex: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/NovaBrand" element={<NovaBrand />} />
          <Route path="/work/Hel_fi" element={<HelFi />} />
          <Route path="/work/FiraBrand" element={<FiraBrand />} />
          <Route path="/work/Nova_ai" element={<NovaAI />} />
          <Route path="/work/nova_platform" element={<NovaPlatform />} />
          <Route path="/work/CodingCompany" element={<CodingCompany />} />
        </Routes>
      </main>
      <Footer currentPath={location.pathname} isLight={!isLightTheme} />
      <SocialDock />
    </div>
  );
}

export default App;

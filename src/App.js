import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NovaBrand from './pages/NovaBrand';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialDock from './components/SocialDock';
import Hel_fi from './pages/Hel_fi';
import FiraBrand from './pages/FiraBrand';
import Work from './pages/Work';
import About from './pages/About';
import './GlobalStyles.css';

function App() {
  return (
    <Router basename="/pofo">
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLightTheme = ['/work', '/work/NovaBrand', '/work/Hel_fi', '/work/FiraBrand'].includes(location.pathname);

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
          <Route path="/work/Hel_fi" element={<Hel_fi />} />
          <Route path="/work/FiraBrand" element={<FiraBrand />} />
        </Routes>
      </main>
      <Footer currentPath={location.pathname} isLight={isLightTheme} />
      <SocialDock />
    </div>
  );
}

export default App;

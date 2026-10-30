import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import MichiCompanion from './components/MichiCompanion';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';

function PortfolioMain() {
  const { show404 } = usePortfolio();

  return (
    <div className="portfolio-app">
      {/* Enlace de accesibilidad para lectores y navegación por teclado */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        {show404 ? (
          <NotFoundPage />
        ) : (
          <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </>
        )}
      </main>

      <Footer />

      {/* Michi Companion Flotante Interactivo */}
      <MichiCompanion />

      <style>{`
        .skip-link {
          position: absolute;
          top: -100px;
          left: 16px;
          background-color: var(--accent-primary);
          color: #FFFFFF;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.9rem;
          border: 2px solid var(--border-color);
          z-index: 9999;
          transition: top 0.2s ease;
        }

        .skip-link:focus {
          top: 16px;
        }

        .portfolio-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-canvas);
          color: var(--text-main);
        }

        #main-content {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioMain />
    </PortfolioProvider>
  );
}

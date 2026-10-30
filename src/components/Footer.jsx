import React from 'react';
import { ArrowUp, Mail, Phone, AlertTriangle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { CuteCatAvatar } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { lang, open404 } = usePortfolio();
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-brand-block">
            <div className="footer-brand-header">
              <CuteCatAvatar size={24} />
              <h3 className="footer-name">Kevin Ariel Cano Chan</h3>
            </div>
            <p className="footer-role">
              {t.rights} · {t.location}
            </p>
            <p className="footer-motto">
              {t.motto}
            </p>
            <div className="footer-cat-stamp">
              <span>{t.catApproved}</span>
            </div>
          </div>

          <div className="footer-links-block">
            <div className="footer-nav-col">
              <span className="footer-col-title">{lang === 'en' ? 'Navigation' : 'Navegación'}</span>
              <ul className="footer-link-list">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#competencias">Conocimientos</a></li>
                <li><a href="#sobre-mi">Sobre Mí</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li>
                  <button type="button" onClick={open404} className="footer-404-link">
                    <AlertTriangle size={13} />
                    <span>{t.test404}</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">{lang === 'en' ? 'Direct Contact' : 'Contacto Directo'}</span>
              <ul className="footer-link-list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/kevin-a-cano-chan-32aba239a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KevinACano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:kevinacanochan@gmail.com">
                    kevinacanochan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+529983813313">
                    +52 998 381 3313
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Kevin Ariel Cano Chan. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Volver al inicio"
          >
            <span>{t.backToTop}</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-root {
          background-color: var(--border-color);
          color: var(--bg-canvas);
          padding: 60px 0 36px;
          border-top: 3px solid var(--accent-primary);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 36px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 40px;
        }

        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .footer-brand-block {
          max-width: 44ch;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--bg-canvas);
        }

        .footer-role {
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          font-weight: 600;
        }

        .footer-motto {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-cat-stamp {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          font-size: 0.76rem;
          font-weight: 800;
          padding: 3px 10px;
          background-color: var(--accent-secondary);
          color: #000000;
          border-radius: 999px;
          width: fit-content;
        }

        .footer-links-block {
          display: flex;
          gap: 48px;
        }

        .footer-col-title {
          display: block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          font-weight: 800;
          margin-bottom: 14px;
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link-list a, .footer-404-link {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .footer-link-list a:hover, .footer-404-link:hover {
          color: var(--accent-primary);
        }

        .footer-404-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--accent-amber);
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }

        @media (min-width: 600px) {
          .footer-bottom {
            flex-direction: row;
            align-items: center;
          }
        }

        .footer-copy {
          line-height: 1.5;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--bg-canvas);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          padding: 8px 16px;
          border-radius: 10px;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          transition: background-color 0.15s ease, transform 0.15s ease;
        }

        .back-to-top-btn:hover {
          background-color: var(--accent-primary);
          color: #FFFFFF;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

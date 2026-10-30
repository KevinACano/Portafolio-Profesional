import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, Terminal } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { CuteCatAvatar } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, show404, close404 } = usePortfolio();
  const t = translations[lang].nav;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const shouldHide = hidden && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.projects, href: '#proyectos' },
    { name: t.skills, href: '#competencias' },
    { name: t.about, href: '#sobre-mi' },
    { name: t.contact, href: '#contacto' }
  ];

  const handleLinkClick = () => {
    if (show404) {
      close404();
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}
      animate={{
        y: shouldHide ? -100 : 0,
        opacity: shouldHide ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div className="scroll-progress-line" style={{ scaleX }} />

      <div className="container navbar-container">
        {/* Brand */}
        <a href="#inicio" className="navbar-brand" onClick={handleLinkClick}>
          <div className="brand-logo-frame">
            <CuteCatAvatar size={24} />
          </div>
          <div className="brand-titles">
            <span className="brand-name">KEVIN ARIEL CANO</span>
            <span className="brand-subtitle">{t.brandSub}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Controles de Idioma y Modo Oscuro/Claro */}
          <div className="navbar-controls-group">
            {/* Toggle de Idioma ES / EN */}
            <motion.button
              type="button"
              className="control-pill-btn lang-toggle-btn"
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={t.langTitle}
              aria-label={t.langTitle}
            >
              <Globe size={15} className="control-icon" />
              <span className="lang-code-text">{lang.toUpperCase()}</span>
            </motion.button>

            {/* Toggle de Modo Oscuro / Claro */}
            <motion.button
              type="button"
              className="control-pill-btn theme-toggle-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={theme === 'dark' ? t.themeLight : t.themeDark}
              aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="theme-icon-wrap"
                  >
                    <Sun size={17} className="sun-icon" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="theme-icon-wrap"
                  >
                    <Moon size={16} className="moon-icon" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <motion.a
            href="#contacto"
            className="btn btn-primary nav-cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLinkClick}
          >
            <span>{t.cta}</span>
            <ArrowUpRight size={16} />
          </motion.a>
        </nav>

        {/* Mobile controls & toggle */}
        <div className="mobile-actions">
          <button
            type="button"
            className="control-pill-btn lang-toggle-btn mobile-quick-btn"
            onClick={toggleLang}
            aria-label={t.langTitle}
          >
            <span className="lang-code-text">{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            className="control-pill-btn theme-toggle-btn mobile-quick-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mobile-cta-item">
                <a
                  href="#contacto"
                  className="btn btn-primary"
                  onClick={handleLinkClick}
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  {t.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--bg-canvas);
          border-bottom: 2px solid var(--border-color);
          transition: background-color 0.25s ease, border-color 0.25s ease;
          padding: 16px 0;
        }

        .navbar-header.is-scrolled {
          box-shadow: var(--shadow-small);
          padding: 12px 0;
        }

        .scroll-progress-line {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: var(--accent-primary);
          transform-origin: 0%;
          z-index: 101;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo-frame {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          box-shadow: var(--shadow-small);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.01em;
          line-height: 1.15;
        }

        .brand-subtitle {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 28px;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 20px;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-display);
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: color 0.15s ease;
          padding: 6px 4px;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .navbar-controls-group {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--card-bg);
          padding: 4px 6px;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          box-shadow: var(--shadow-small);
        }

        .control-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 8px;
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--text-main);
          background-color: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .control-pill-btn:hover {
          background-color: var(--subtle-bg);
          border-color: var(--border-color);
        }

        .theme-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sun-icon {
          color: var(--accent-amber);
        }

        .moon-icon {
          color: var(--accent-secondary);
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .mobile-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mobile-quick-btn {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          box-shadow: 2px 2px 0px var(--border-color);
          padding: 6px 8px;
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          color: var(--text-main);
          border-radius: 10px;
          border: 2px solid var(--border-color);
          background-color: var(--card-bg);
          box-shadow: 2px 2px 0px var(--border-color);
        }

        .mobile-drawer {
          border-top: 2px solid var(--border-color);
          background-color: var(--bg-canvas);
          padding: 20px 24px 28px;
          overflow: hidden;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          display: block;
          padding: 8px 0;
          border-bottom: 1px dashed var(--border-subtle);
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-actions {
            display: none;
          }
          .mobile-drawer {
            display: none;
          }
        }
      `}</style>
    </motion.header>
  );
}

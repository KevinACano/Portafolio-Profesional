import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  // Tema: 'dark' o 'light' (por defecto 'dark' para un look maximalista moderno de alto contraste)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('kevin-portfolio-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // Idioma: 'es' o 'en'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('kevin-portfolio-lang');
    return saved === 'en' ? 'en' : 'es';
  });

  // Estado para la página 404
  const [show404, setShow404] = useState(() => {
    return window.location.hash === '#404';
  });

  useEffect(() => {
    localStorage.setItem('kevin-portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('kevin-portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleHash = () => {
      setShow404(window.location.hash === '#404');
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const open404 = () => {
    window.location.hash = '#404';
    setShow404(true);
  };

  const close404 = () => {
    window.location.hash = '#inicio';
    setShow404(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        show404,
        open404,
        close404
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio debe ser usado dentro de PortfolioProvider');
  }
  return context;
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CuteCatAvatar } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';

export default function MichiCompanion() {
  const { lang } = usePortfolio();
  const [petCount, setPetCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const michiQuotesEs = [
    "¡Miauuu! Gracias por visitarme, bienvenido al portafolio de Kevin.",
    "Purrrr... ¡Qué suave! Kevin escribe código tan limpio como mis bigotes.",
    "Si buscas a alguien comprometido para tu equipo, ¡Kevin es el indicado!",
    "¿Ya viste los proyectos de EcoCun y Mexplora? ¡Tienen mi sello de aprobación!",
    "Purrrr... ¡Que tengas un día lleno de deploys exitosos y cero bugs!"
  ];

  const michiQuotesEn = [
    "Meowww! Thanks for stopping by, welcome to Kevin's portfolio.",
    "Purrrr... So soft! Kevin writes code as clean as my whiskers.",
    "Looking for a dedicated engineer for your team? Kevin's your person!",
    "Checked out EcoCun and Mexplora? They have my full stamp of approval!",
    "Purrrr... May your day be filled with smooth deploys and zero bugs!"
  ];

  const handlePet = () => {
    const newCount = petCount + 1;
    setPetCount(newCount);
    const quotes = lang === 'en' ? michiQuotesEn : michiQuotesEs;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentMessage(randomQuote);
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 4500);
  };

  return (
    <aside className="michi-companion-root" aria-label="Michi Companion">
      <AnimatePresence>
        {isOpen && currentMessage && (
          <motion.div
            className="michi-speech-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
          >
            <div className="bubble-header">
              <span className="bubble-cat-tag">Michi Amigo</span>
              <button
                type="button"
                className="bubble-close"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar mensaje"
              >
                ✕
              </button>
            </div>
            <p className="bubble-text">{currentMessage}</p>
            <div className="bubble-stats">
              <span>{lang === 'en' ? 'Petted' : 'Caricias recibidas'}: <strong>{petCount}</strong></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="michi-avatar-btn"
        onClick={handlePet}
        whileHover={{ scale: 1.12, rotate: [-3, 3, -3] }}
        whileTap={{ scale: 0.9 }}
        title={lang === 'en' ? 'Pet me!' : '¡Acaríciame!'}
        aria-label={lang === 'en' ? 'Pet the cute cat' : 'Acariciar al gatito'}
      >
        <CuteCatAvatar size={34} className="cute-cat-icon" />
        <span className="michi-click-hint">
          {lang === 'en' ? 'Pet me' : '¡Acaríciame!'}
        </span>
      </motion.button>

      <style>{`
        .michi-companion-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .michi-speech-bubble {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 14px 16px;
          max-width: 280px;
          box-shadow: var(--shadow-pop);
          position: relative;
        }

        .bubble-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .bubble-cat-tag {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .bubble-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: 2px;
        }

        .bubble-text {
          font-size: 0.9rem;
          line-height: 1.45;
          color: var(--text-main);
          font-weight: 600;
        }

        .bubble-stats {
          margin-top: 8px;
          font-size: 0.74rem;
          color: var(--text-muted);
          border-top: 1px dashed var(--border-subtle);
          padding-top: 4px;
        }

        .michi-avatar-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--card-bg);
          border: 2.5px solid var(--border-color);
          box-shadow: var(--shadow-pop);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-main);
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .michi-avatar-btn:hover {
          border-color: var(--accent-primary);
        }

        .cute-cat-icon {
          color: var(--text-main);
        }

        .michi-click-hint {
          position: absolute;
          bottom: -8px;
          background-color: var(--accent-primary);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 999px;
          white-space: nowrap;
          border: 1px solid var(--border-color);
          box-shadow: 1px 1px 0px var(--border-color);
        }

        @media (max-width: 640px) {
          .michi-companion-root {
            bottom: 16px;
            right: 16px;
          }
          .michi-speech-bubble {
            max-width: 240px;
          }
        }
      `}</style>
    </aside>
  );
}

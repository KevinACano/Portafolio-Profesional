import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { BrokenCableCat } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function NotFoundPage() {
  const { lang, close404 } = usePortfolio();
  const t = translations[lang].notFound;

  return (
    <div className="not-found-container" role="main">
      <motion.div
        className="not-found-card"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Badge de error */}
        <div className="not-found-badge">
          <span className="error-code">404</span>
          <span className="badge-sep">/</span>
          <span>{t.badge}</span>
        </div>

        {/* Ilustración con Michi curioso y cable desconectado */}
        <div className="not-found-visual">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrokenCableCat size={140} className="broken-cable-cat-svg" />
          </motion.div>
        </div>

        <h1 className="not-found-title">{t.title}</h1>
        <p className="not-found-desc">{t.desc}</p>

        <div className="not-found-actions">
          <motion.button
            type="button"
            className="btn btn-primary"
            onClick={close404}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft size={18} />
            <span>{t.btnHome}</span>
          </motion.button>

          <motion.a
            href="https://wa.me/529983813313?text=Hola%20Kevin,%20estoy%20viendo%20tu%20p%C3%A1gina%20404!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageSquare size={18} className="text-whatsapp" />
            <span>{t.btnWhatsapp}</span>
          </motion.a>
        </div>
      </motion.div>

      <style>{`
        .not-found-container {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }

        .not-found-card {
          background-color: var(--card-bg);
          border: 3px solid var(--border-color);
          border-radius: 24px;
          padding: 48px 36px;
          max-width: 650px;
          width: 100%;
          text-align: center;
          box-shadow: var(--shadow-pop);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .not-found-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background-color: var(--accent-primary);
          color: #FFFFFF;
          border-radius: 999px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.9rem;
          border: 2px solid var(--border-color);
          box-shadow: var(--shadow-small);
        }

        .error-code {
          font-size: 1.1rem;
        }

        .badge-sep {
          opacity: 0.7;
        }

        .not-found-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
        }

        .broken-cable-cat-svg {
          color: var(--text-main);
        }

        .not-found-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-main);
        }

        .not-found-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 52ch;
          font-weight: 500;
        }

        .not-found-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: 10px;
        }

        .text-whatsapp {
          color: #0E7C4B;
        }
      `}</style>
    </div>
  );
}

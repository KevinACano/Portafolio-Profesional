import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, User, Code2, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function ProjectModal({ project, onClose }) {
  const { lang } = usePortfolio();
  const t = translations[lang].projects;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const title = project.title;
  const subtitle = lang === 'en' ? project.subtitleEn : project.subtitle;
  const fullDesc = lang === 'en' ? project.fullDescriptionEn : project.fullDescription;
  const highlights = lang === 'en' ? project.highlightsEn : project.highlights;
  const category = lang === 'en' ? project.categoryEn : project.category;

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Encabezado del Modal */}
        <div className="modal-header">
          <div>
            <div className="modal-badge-row">
              <span className="modal-category">{category}</span>
              {project.badge && (
                <span className="modal-trophy-badge">
                  <Trophy size={14} />
                  <span>{project.badge}</span>
                </span>
              )}
            </div>
            <h2 id="modal-title" className="modal-title">{title}</h2>
            <p className="modal-subtitle">{subtitle}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Metadatos Rápidos */}
        <div className="modal-meta-bar">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{t.modalYear}: <strong>{project.year}</strong></span>
          </div>
          <div className="meta-item">
            <User size={16} />
            <span>{t.modalRole}: <strong>{project.role}</strong></span>
          </div>
          {project.guitarVibe && (
            <div className="meta-item meta-rock">
              <span>{project.guitarVibe}</span>
            </div>
          )}
        </div>

        {/* Contenido Principal */}
        <div className="modal-body">
          <div className="modal-section">
            <h3 className="section-heading">{t.modalApproach}</h3>
            <p className="section-text">{fullDesc}</p>
          </div>

          <div className="modal-section">
            <h3 className="section-heading">{t.modalHighlights}</h3>
            <ul className="highlights-list">
              {highlights.map((item, idx) => (
                <li key={idx} className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3 className="section-heading">{t.modalTech}</h3>
            <div className="tech-tags-grid">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pie del Modal */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            {t.modalClose}
          </button>
          <a
            href="#contacto"
            className="btn btn-primary"
            onClick={onClose}
          >
            {t.modalCta}
          </a>
        </div>
      </motion.div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background-color: rgba(10, 11, 14, 0.75);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          background-color: var(--card-bg);
          border: 3px solid var(--border-color);
          border-radius: 24px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-large);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 28px 32px 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 2px solid var(--border-color);
          background-color: var(--subtle-bg);
        }

        .modal-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .modal-category {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 800;
          color: #FFFFFF;
          background-color: var(--accent-primary);
          padding: 3px 10px;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .modal-trophy-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 800;
          background-color: var(--accent-amber);
          color: #000000;
          padding: 3px 10px;
          border-radius: 6px;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .modal-close-btn {
          padding: 8px;
          border-radius: 10px;
          border: 2px solid var(--border-color);
          background-color: var(--card-bg);
          color: var(--text-main);
          box-shadow: 2px 2px 0px var(--border-color);
          transition: transform 0.15s ease;
        }

        .modal-close-btn:hover {
          transform: translate(-1px, -1px);
        }

        .modal-meta-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          padding: 12px 32px;
          background-color: var(--card-bg);
          border-bottom: 2px solid var(--border-subtle);
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .meta-rock {
          color: var(--accent-primary);
          font-weight: 700;
        }

        .modal-body {
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section-heading {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 10px;
        }

        .section-text {
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.55;
          font-weight: 500;
        }

        .highlight-icon {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .tech-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 6px 14px;
          background-color: var(--subtle-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          box-shadow: 2px 2px 0px var(--border-color);
        }

        .modal-footer {
          padding: 20px 32px;
          border-top: 2px solid var(--border-color);
          background-color: var(--subtle-bg);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        @media (max-width: 640px) {
          .modal-header, .modal-meta-bar, .modal-body, .modal-footer {
            padding-left: 20px;
            padding-right: 20px;
          }
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </motion.div>
  );
}

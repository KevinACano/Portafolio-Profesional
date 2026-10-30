import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  LinuxIcon,
  PostgresIcon,
  NodeIcon,
  DotNetIcon,
  DockerIcon,
  GitIcon,
  ApiRestIcon
} from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations, freeSkillsList } from '../data/translations';

export default function Skills() {
  const { lang } = usePortfolio();
  const t = translations[lang].skills;

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(freeSkillsList[0]);

  const iconComponentMap = {
    react: ReactIcon,
    nextjs: NextjsIcon,
    typescript: TypeScriptIcon,
    javascript: JavaScriptIcon,
    python: PythonIcon,
    linux: LinuxIcon,
    postgresql: PostgresIcon,
    nodejs: NodeIcon,
    dotnet: DotNetIcon,
    docker: DockerIcon,
    git: GitIcon,
    apis: ApiRestIcon
  };

  return (
    <section className="skills-section" id="competencias">
      <div className="container">
        
        {/* Encabezado limpio e idéntico a la referencia */}
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-heading-row">
            <h2 className="skills-heading">{t.sectionTitle}</h2>
            <motion.div
              className="michi-mini-sticker skills-michi-sticker"
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              title="Michi"
            >
              <img
                src="Imagenes/Michi2.jpg"
                alt="Michi decorativo"
                className="michi-sticker-img"
              />
            </motion.div>
          </div>
          <p className="skills-subheading">{t.sectionSubtitle}</p>
        </motion.div>

        {/* Rejilla de Iconos Libres Flotantes con Tooltips (Estilo Imagen de Referencia) */}
        <div className="free-icons-cluster" role="list" aria-label="Iconos de Tecnologías">
          {freeSkillsList.map((skill) => {
            const IconComponent = iconComponentMap[skill.id] || ReactIcon;
            const isHovered = hoveredSkill?.id === skill.id;
            const isSelected = selectedSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                className="free-icon-anchor"
                onMouseEnter={() => {
                  setHoveredSkill(skill);
                  setSelectedSkill(skill);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setSelectedSkill(skill)}
                tabIndex={0}
                role="listitem"
                aria-label={skill.name}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSkill(skill);
                  }
                }}
              >
                {/* Tooltip flotante con flecha (idéntico al de la imagen del usuario) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="floating-tech-tooltip"
                      initial={{ opacity: 0, y: 6, x: "-50%", scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                      exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="tooltip-text">{skill.name}</span>
                      <span className="tooltip-arrow"></span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icono Libre sin cajas pesadas */}
                <motion.div
                  className={`free-icon-glyph ${isSelected ? 'is-active-glyph' : ''}`}
                  whileHover={{ scale: 1.2, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                >
                  <IconComponent size={56} />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Panel Limpio de Contexto de Aplicación */}
        <AnimatePresence mode="wait">
          {selectedSkill && (
            <motion.div
              key={selectedSkill.id}
              className="tech-application-bar"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="app-bar-header">
                <span className="app-bar-tag">{t.activeContextTitle}</span>
                <strong className="app-bar-name">{selectedSkill.name}</strong>
              </div>
              <p className="app-bar-desc">
                {lang === 'en' ? selectedSkill.contextEn : selectedSkill.contextEs}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        .skills-section {
          padding: 80px 0 90px;
          border-bottom: 2px solid var(--border-color);
          background-color: var(--bg-canvas);
        }

        .section-intro {
          text-align: center;
          max-width: 65ch;
          margin: 0 auto 50px;
        }

        .skills-heading-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .skills-michi-sticker {
          width: 44px;
          height: 44px;
        }

        .skills-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.2vw, 2.9rem);
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 10px;
        }

        .skills-subheading {
          font-size: 1.05rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Cluster de Iconos Libres */
        .free-icons-cluster {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 36px 42px;
          max-width: 900px;
          margin: 0 auto 40px;
          padding: 20px 0 30px;
        }

        .free-icon-anchor {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          outline: none;
        }

        .free-icon-glyph {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
          transition: filter 0.2s ease;
        }

        .free-icon-anchor:focus-visible .free-icon-glyph {
          outline: 3px solid var(--accent-primary);
          outline-offset: 6px;
          border-radius: 12px;
        }

        /* Tooltip Flotante como en la imagen del usuario */
        .floating-tech-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 12px;
          background-color: #FFFFFF;
          color: #0A0B0E;
          padding: 5px 12px;
          border-radius: 6px;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          pointer-events: none;
          z-index: 50;
        }

        .tooltip-arrow {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #FFFFFF;
        }

        /* Barra de contexto inferior */
        .tech-application-bar {
          max-width: 780px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: var(--shadow-small);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .app-bar-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .app-bar-tag {
          font-family: var(--font-display);
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-primary);
        }

        .app-bar-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--text-main);
        }

        .app-bar-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .free-icons-cluster {
            gap: 26px 28px;
          }
          .tech-application-bar {
            padding: 16px 18px;
          }
        }
      `}</style>
    </section>
  );
}

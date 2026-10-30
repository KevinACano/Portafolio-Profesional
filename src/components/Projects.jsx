import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsDatabase, translations } from '../data/translations';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { lang } = usePortfolio();
  const t = translations[lang].projects;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { key: 'all', label: t.filterAll },
    { key: 'pwa', label: t.filterPwa },
    { key: 'data', label: t.filterData },
    { key: 'backend', label: t.filterBackend }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsDatabase
    : projectsDatabase.filter((p) => p.categoryKey === selectedCategory);

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        
        {/* Encabezado de Sección Maximalista */}
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge-row">
            <div className="projects-top-badge">
              <Sparkles size={15} />
              <span>{lang === 'en' ? 'FEATURED WORK & HACKATHONS' : 'PROYECTOS DESTACADOS & HACKATHONS'}</span>
            </div>
            <motion.div
              className="michi-mini-sticker projects-michi-sticker"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              title="Michi"
            >
              <img
                src="Imagenes/Michi3.jpg"
                alt="Michi decorativo"
                className="michi-sticker-img"
              />
            </motion.div>
          </div>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <p className="section-description">{t.sectionSubtitle}</p>
        </motion.div>

        {/* Filtros de Categoría con Indicador Deslizante */}
        <div className="filter-bar" role="tablist" aria-label="Filtrar proyectos">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <span className="filter-label">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cuadrícula de Proyectos Animada con Estilo Neo-Brutalista */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const subtitle = lang === 'en' ? project.subtitleEn : project.subtitle;
              const desc = lang === 'en' ? project.descriptionEn : project.description;
              const category = lang === 'en' ? project.categoryEn : project.category;

              return (
                <motion.article
                  layout
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                >
                  <div className="card-top">
                    <span className="project-tag">{category}</span>
                    {project.badge && (
                      <span className="project-badge">
                        <Trophy size={13} className="badge-icon" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                    <span className="project-year">{project.year}</span>
                  </div>

                  <div className="card-content">
                    <h3 className="project-heading">{project.title}</h3>
                    <p className="project-sub">{subtitle}</p>
                    <p className="project-desc">{desc}</p>
                  </div>

                  {/* Vibe de Guitarra & Michi */}
                  <div className="project-vibes-strip">
                    <span className="vibe-item">{project.guitarVibe}</span>
                  </div>

                  <div className="card-tech">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="card-tech-pill">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="card-tech-pill more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="card-footer">
                    <motion.button
                      type="button"
                      className="btn btn-secondary btn-detail"
                      onClick={() => setActiveProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t.btnExplore}</span>
                      <ArrowUpRight size={17} />
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal de Detalle */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key="active-project-modal"
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .projects-section {
          padding: 80px 0 90px;
          border-bottom: 2px solid var(--border-color);
        }

        .section-intro {
          max-width: 68ch;
          margin-bottom: 36px;
        }

        .projects-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .section-title {
          margin-bottom: 12px;
        }

        .section-description {
          font-size: 1.1rem;
        }

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          padding-bottom: 14px;
          border-bottom: 2px solid var(--border-color);
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: 10px;
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-secondary);
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          box-shadow: 2px 2px 0px var(--border-color);
          transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease;
          cursor: pointer;
        }

        .filter-btn:hover {
          background-color: var(--subtle-bg);
          color: var(--text-main);
        }

        .filter-btn.active {
          color: #FFFFFF;
          background-color: var(--accent-primary);
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px var(--border-color);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .project-card {
          background-color: var(--card-bg);
          border: 3px solid var(--border-color);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-pop);
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project-card:hover {
          box-shadow: var(--shadow-large);
          border-color: var(--accent-primary);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .project-tag {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 800;
          color: #FFFFFF;
          background-color: var(--border-color);
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-display);
          font-size: 0.76rem;
          padding: 4px 10px;
          border-radius: 6px;
          background-color: var(--accent-amber);
          color: #000000;
          font-weight: 800;
          border: 1px solid var(--border-color);
        }

        .badge-icon {
          color: #000000;
        }

        .project-year {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-muted);
          margin-left: auto;
        }

        .card-content {
          margin-bottom: 14px;
        }

        .project-heading {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--text-main);
          line-height: 1.15;
        }

        .project-sub {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 14px;
        }

        .project-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          font-weight: 500;
        }

        .project-vibes-strip {
          padding: 8px 12px;
          background-color: var(--subtle-bg);
          border-radius: 8px;
          border: 1px dashed var(--border-subtle);
          margin-bottom: 18px;
        }

        .vibe-item {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .card-tech-pill {
          padding: 4px 10px;
          background-color: var(--card-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-main);
          font-weight: 700;
          box-shadow: 1.5px 1.5px 0px var(--border-color);
        }

        .card-tech-pill.more {
          color: var(--accent-primary);
        }

        .card-footer {
          border-top: 2px solid var(--border-subtle);
          padding-top: 18px;
        }

        .btn-detail {
          width: 100%;
          justify-content: space-between;
          padding: 12px 18px;
          font-size: 0.94rem;
        }

        .btn-detail:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}

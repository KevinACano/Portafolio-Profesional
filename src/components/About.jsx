import React from 'react';
import { GraduationCap, Award, Languages, CheckCircle2, Terminal, Code2, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { educationDatabase, languagesDatabase, translations } from '../data/translations';
import { experienceData } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function About() {
  const { lang } = usePortfolio();
  const t = translations[lang].about;

  return (
    <section className="about-section" id="sobre-mi">
      <div className="container">
        
        {/* Encabezado Profesional */}
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge-row">
            <span className="about-badge-tag">{lang === 'en' ? 'PROFESSIONAL PROFILE & EDUCATION' : 'PERFIL PROFESIONAL & FORMACIÓN'}</span>
            <motion.div
              className="michi-mini-sticker about-michi-sticker"
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              title="Michi"
            >
              <img
                src="Imagenes/Michi4.jpg"
                alt="Michi decorativo"
                className="michi-sticker-img"
              />
            </motion.div>
          </div>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <p className="section-description">{t.sectionSubtitle}</p>
        </motion.div>

        {/* Pilares Técnicos para Empleo y Proyectos */}
        <div className="competencies-hire-grid">
          <div className="hire-card">
            <div className="hire-icon-box box-frontend">
              <Code2 size={24} />
            </div>
            <h3 className="hire-title">{t.compFrontend.title}</h3>
            <p className="hire-desc">{t.compFrontend.desc}</p>
          </div>

          <div className="hire-card">
            <div className="hire-icon-box box-backend">
              <Server size={24} />
            </div>
            <h3 className="hire-title">{t.compBackend.title}</h3>
            <p className="hire-desc">{t.compBackend.desc}</p>
          </div>

          <div className="hire-card">
            <div className="hire-icon-box box-infra">
              <Terminal size={24} />
            </div>
            <h3 className="hire-title">{t.compInfra.title}</h3>
            <p className="hire-desc">{t.compInfra.desc}</p>
          </div>
        </div>

        {/* Sección de Experiencia y Hackathons */}
        <div className="experience-block">
          <h3 className="sub-heading">
            <Award size={22} className="icon-accent" />
            <span>{t.expTitle}</span>
          </h3>

          <div className="experience-cards-grid">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                className="experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="exp-top">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-loc">{exp.location}</span>
                </div>
                <h4 className="exp-role">{exp.role}</h4>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-desc">{exp.description}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="exp-h-item">
                      <CheckCircle2 size={16} className="h-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="exp-tech-row">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rejilla de Educación e Idiomas */}
        <div className="edu-lang-grid">
          {/* Educación */}
          <div className="education-column">
            <h3 className="sub-heading">
              <GraduationCap size={22} className="icon-accent" />
              <span>{t.eduTitle}</span>
            </h3>

            <div className="timeline-list">
              {educationDatabase.map((item, idx) => {
                const degree = lang === 'en' ? item.degreeEn : item.degreeEs;
                const status = lang === 'en' ? item.statusEn : item.statusEs;
                const detail = lang === 'en' ? item.detailEn : item.detailEs;
                const specialty = lang === 'en' ? item.specialtyEn : item.specialtyEs;

                return (
                  <motion.div
                    key={idx}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="timeline-header">
                      <span className="timeline-period">{item.period}</span>
                      <span className="timeline-status">{status}</span>
                    </div>
                    <h4 className="timeline-degree">{degree}</h4>
                    {specialty && (
                      <div className="timeline-specialty">{specialty}</div>
                    )}
                    <div className="timeline-inst">{item.institution}</div>
                    <p className="timeline-detail">{detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Idiomas */}
          <div className="side-column">
            <div className="lang-box">
              <h3 className="sub-heading">
                <Languages size={22} className="icon-accent" />
                <span>{t.langTitle}</span>
              </h3>

              <div className="lang-items-list">
                {languagesDatabase.map((langItem, idx) => {
                  const name = lang === 'en' ? langItem.languageEn : langItem.languageEs;
                  const level = lang === 'en' ? langItem.levelEn : langItem.levelEs;

                  return (
                    <motion.div
                      key={idx}
                      className="lang-item"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="lang-name">{name}</span>
                      <span className="lang-level">{level}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Disponibilidad Inmediata Box */}
            <div className="availability-card">
              <h4 className="avail-title">
                {lang === 'en' ? 'Open for Opportunities' : 'Disponibilidad Inmediata'}
              </h4>
              <p className="avail-desc">
                {lang === 'en'
                  ? 'Ready to contribute as a Junior Software Engineer, Frontend Developer, or IT Infrastructure Intern. Hybrid or remote availability.'
                  : 'Listo para incorporarme a equipos como Desarrollador Frontend, Desarrollador Full-Stack o Residente de Ingeniería en TI. Modalidad presencial o remota.'}
              </p>
              <a href="#contacto" className="btn btn-primary avail-btn">
                {lang === 'en' ? 'Get in Touch' : 'Contactar Ahora'}
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-section {
          padding: 80px 0 90px;
          border-bottom: 2px solid var(--border-color);
          background-color: var(--bg-canvas);
        }

        .section-intro {
          max-width: 68ch;
          margin-bottom: 40px;
        }

        .about-badge-tag {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-primary);
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

        /* Pilares de Competencias para el empleo */
        .competencies-hire-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 56px;
        }

        @media (min-width: 800px) {
          .competencies-hire-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .hire-card {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 18px;
          padding: 24px;
          box-shadow: var(--shadow-small);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hire-card:hover {
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-pop);
        }

        .hire-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-color);
          box-shadow: 2px 2px 0px var(--border-color);
        }

        .box-frontend {
          background-color: var(--accent-primary);
          color: #FFFFFF;
        }

        .box-backend {
          background-color: var(--accent-secondary);
          color: #FFFFFF;
        }

        .box-infra {
          background-color: var(--accent-amber);
          color: #000000;
        }

        .hire-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.2;
        }

        .hire-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 500;
        }

        .sub-heading {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .icon-accent {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        /* Experiencia */
        .experience-block {
          margin-bottom: 56px;
        }

        .experience-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 860px) {
          .experience-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .experience-card {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-small);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .experience-card:hover {
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-pop);
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .exp-role {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.25;
          margin-bottom: 4px;
        }

        .exp-company {
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 800;
          margin-bottom: 12px;
        }

        .exp-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
          font-weight: 500;
        }

        .exp-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .exp-h-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.45;
          font-weight: 500;
        }

        .h-icon {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          border-top: 2px solid var(--border-subtle);
          padding-top: 14px;
        }

        .exp-tech-tag {
          font-size: 0.76rem;
          padding: 3px 8px;
          background-color: var(--subtle-bg);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-main);
          font-weight: 700;
        }

        /* Educación e Idiomas */
        .edu-lang-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }

        @media (min-width: 860px) {
          .edu-lang-grid {
            grid-template-columns: 1.25fr 0.75fr;
          }
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .timeline-item {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 22px;
          box-shadow: var(--shadow-small);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .timeline-period {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .timeline-status {
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: 999px;
          background-color: var(--subtle-bg);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 800;
        }

        .timeline-degree {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .timeline-specialty {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-secondary);
          margin-bottom: 4px;
        }

        .timeline-inst {
          font-size: 0.86rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .timeline-detail {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          font-weight: 500;
        }

        .side-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .lang-box {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 22px;
          box-shadow: var(--shadow-small);
        }

        .lang-items-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lang-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background-color: var(--subtle-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 8px;
          box-shadow: 2px 2px 0px var(--border-color);
        }

        .lang-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .lang-level {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .availability-card {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: var(--shadow-small);
        }

        .avail-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .avail-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          font-weight: 500;
        }

        .avail-btn {
          margin-top: 4px;
          padding: 10px 18px;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
}

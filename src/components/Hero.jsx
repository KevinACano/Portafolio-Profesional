import React from 'react';
import { ArrowDown, Mail, MapPin, Phone, Award, MessageSquare, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SleepingMichi } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { lang } = usePortfolio();
  const t = translations[lang].hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-container">
        
        {/* Columna de Texto */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badges Profesionales */}
          <motion.div className="hero-badges-row" variants={itemVariants}>
            <div className="badge-pill badge-student">
              <GraduationCap size={15} className="badge-icon" />
              <span>{t.studentBadge}</span>
            </div>

            <div className="badge-pill badge-award">
              <Award size={15} className="badge-icon" />
              <span>{t.awardBadge}</span>
            </div>

            <div className="badge-pill badge-location">
              <MapPin size={14} className="badge-icon" />
              <span>{t.location}</span>
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            {t.titlePre} <span className="title-highlight">{t.titleHighlight}</span> {t.titlePost}
          </motion.h1>

          {/* Descripción con foco en oportunidades laborales y proyectos */}
          <motion.p className="hero-description" variants={itemVariants}>
            {t.description}
          </motion.p>

          {/* Botones de Acción */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#proyectos"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{t.btnProjects}</span>
              <ArrowDown size={17} />
            </motion.a>

            <motion.a
              href="#contacto"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{t.btnContact}</span>
              <Mail size={17} />
            </motion.a>

            <motion.a
              href="https://wa.me/529983813313?text=Hola%20Kevin,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-whatsapp-direct"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              title="Chat directo en WhatsApp"
            >
              <MessageSquare size={17} className="text-whatsapp" />
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Accesos Rápidos de Contacto */}
          <motion.div className="hero-contact-strip" variants={itemVariants}>
            <a
              href={`mailto:${t.directEmail}`}
              className="strip-item"
              title="Enviar correo a Kevin"
            >
              <Mail size={16} className="strip-icon" />
              <span>{t.directEmail}</span>
            </a>
            <span className="strip-divider">·</span>
            <a
              href="tel:+529983813313"
              className="strip-item"
              title="Llamar o escribir"
            >
              <Phone size={15} className="strip-icon" />
              <span>{t.phone}</span>
            </a>
          </motion.div>

          {/* Enlaces a Redes Profesionales con GitHub corregido */}
          <motion.div className="hero-social-links" variants={itemVariants}>
            <span className="social-label">{lang === 'en' ? 'Direct links:' : 'Perfiles:'}</span>
            <motion.a
              href="https://www.linkedin.com/in/kevin-a-cano-chan-32aba239a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-anchor"
              aria-label="Perfil oficial de LinkedIn de Kevin Ariel Cano Chan"
              whileHover={{ y: -2 }}
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </motion.a>
            <span className="divider-dot">/</span>
            <motion.a
              href={t.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-anchor"
              aria-label="Perfil oficial de GitHub de Kevin Ariel Cano Chan"
              whileHover={{ y: -2 }}
            >
              <GithubIcon size={17} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Columna Visual con el Michi Recostado plácidamente de fondo */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-super-card">
            {/* Michi Recostado en la parte superior del marco */}
            <motion.div
              className="michi-recostado-badge"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              title="Michi descansando"
            >
              <SleepingMichi size={110} className="sleeping-cat-svg" />
            </motion.div>

            {/* Michi 1 Mini Sticker */}
            <motion.div
              className="michi-mini-sticker hero-corner-sticker"
              whileHover={{ scale: 1.18, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              title="Michi"
            >
              <img
                src="Imagenes/Michi1.png"
                alt="Michi decorativo"
                className="michi-sticker-img"
              />
            </motion.div>

            {/* Imagen Principal: yo.jpeg */}
            <div className="portrait-image-wrapper">
              <img
                src="Imagenes/yo.jpeg"
                alt="Fotografía profesional de Kevin Ariel Cano Chan, Estudiante de Ingeniería en TI en Cancún"
                className="portrait-img"
                loading="eager"
                onError={(e) => {
                  if (!e.target.dataset.triedFallback) {
                    e.target.dataset.triedFallback = "true";
                    e.target.src = "Imagenes/yo.jpg";
                  }
                }}
              />
            </div>

            {/* Pie del marco con disponibilidad activa */}
            <div className="portrait-caption">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">{t.availability}</span>
              </div>
            </div>
          </div>

          {/* Tarjetas de Logros Clave */}
          <div className="hero-stats-panel">
            {t.stats.map((item, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.15 }}
              >
                <div className="stat-badge-top">{item.badge}</div>
                <div className="stat-val">{item.value}</div>
                <div className="stat-lbl">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
          padding: 60px 0 70px;
          border-bottom: 2px solid var(--border-color);
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 960px) {
          .hero-section {
            padding-top: 80px;
            padding-bottom: 90px;
          }
          .hero-container {
            grid-template-columns: 1.18fr 0.82fr;
            gap: 60px;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .hero-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 999px;
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 800;
          border: 2px solid var(--border-color);
          box-shadow: 2px 2px 0px var(--border-color);
        }

        .badge-student {
          background-color: var(--card-bg);
          color: var(--accent-primary);
        }

        .badge-award {
          background-color: var(--accent-amber);
          color: #000000;
        }

        .badge-location {
          background-color: var(--subtle-bg);
          color: var(--text-main);
        }

        .badge-icon {
          flex-shrink: 0;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 4.6vw, 3.6rem);
          font-weight: 800;
          line-height: 1.12;
          color: var(--text-main);
          letter-spacing: -0.025em;
        }

        .title-highlight {
          color: var(--accent-primary);
          text-decoration: underline;
          text-decoration-color: var(--accent-amber);
          text-decoration-thickness: 4px;
          text-underline-offset: 6px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 62ch;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 6px;
        }

        .btn-whatsapp-direct {
          border-color: #0E7C4B;
        }

        .text-whatsapp {
          color: #0E7C4B;
        }

        .hero-contact-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-secondary);
          padding-top: 4px;
        }

        .strip-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }

        .strip-item:hover {
          color: var(--accent-primary);
        }

        .strip-icon {
          color: var(--accent-primary);
        }

        .strip-divider {
          color: var(--border-subtle);
          font-weight: 800;
        }

        .hero-social-links {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .social-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-anchor {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-main);
          padding: 4px 10px;
          background-color: var(--card-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 8px;
          box-shadow: 2px 2px 0px var(--border-color);
          transition: transform 0.15s ease, background-color 0.15s ease;
        }

        .social-anchor:hover {
          background-color: var(--subtle-bg);
          color: var(--accent-primary);
        }

        .divider-dot {
          color: var(--border-subtle);
        }

        /* Columna Visual */
        .hero-visual {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .portrait-super-card {
          position: relative;
          background-color: var(--card-bg);
          border: 3px solid var(--border-color);
          border-radius: 24px;
          padding: 16px;
          box-shadow: var(--shadow-large);
        }

        .michi-recostado-badge {
          position: absolute;
          top: -38px;
          right: 12px;
          z-index: 10;
          color: var(--text-main);
          pointer-events: none;
        }

        .hero-corner-sticker {
          position: absolute;
          bottom: -14px;
          right: -14px;
          width: 54px;
          height: 54px;
          z-index: 10;
        }

        .sleeping-cat-svg {
          filter: drop-shadow(2px 2px 0px var(--border-color));
        }

        .portrait-image-wrapper {
          width: 100%;
          aspect-ratio: 4 / 4.4;
          border-radius: 16px;
          overflow: hidden;
          background-color: var(--subtle-bg);
          border: 2px solid var(--border-color);
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.4s ease;
        }

        .portrait-super-card:hover .portrait-img {
          transform: scale(1.02);
        }

        .portrait-caption {
          padding-top: 14px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background-color: var(--subtle-bg);
          border: 1.5px solid var(--border-color);
          border-radius: 10px;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background-color: var(--accent-green);
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(14, 124, 75, 0.25);
        }

        .status-text {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .hero-stats-panel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .stat-card {
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 14px;
          padding: 14px;
          box-shadow: var(--shadow-small);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-badge-top {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
        }

        .stat-val {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.2;
        }

        .stat-lbl {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .hero-stats-panel {
            grid-template-columns: 1fr;
          }
          .michi-recostado-badge {
            top: -30px;
            right: 0;
            transform: scale(0.85);
          }
        }
      `}</style>
    </section>
  );
}

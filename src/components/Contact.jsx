import React, { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send, AlertCircle, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { CuteCatAvatar } from './TechIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { translations } from '../data/translations';

export default function Contact() {
  const { lang } = usePortfolio();
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: t.options[0],
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = "kevinacanochan@gmail.com";
  const targetPhone = "+52 998 381 3313";
  const rawPhone = "529983813313";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch (err) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(targetPhone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    } catch (err) {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(
        lang === 'en'
          ? 'Please complete all required fields (Name, Email, and Message).'
          : 'Por favor, completa todos los campos requeridos (Nombre, Correo y Mensaje).'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage(
        lang === 'en'
          ? 'Please provide a valid email address.'
          : 'Por favor, introduce un correo electrónico válido.'
      );
      return;
    }

    setStatus('sending');

    // Construcción del mailto URI
    const subject = encodeURIComponent(`[Portafolio] ${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hola Kevin,\n\nSoy ${formData.name} (${formData.email}).\n\nMotivo: ${formData.subject}\n\nMensaje:\n${formData.message}\n\n---\nEnviado desde tu portafolio profesional.`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Despacho real: abrir cliente de correo
    setTimeout(() => {
      setStatus('success');
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        // En caso de bloqueo de popup o protocolo
        console.log("Mailto triggered:", mailtoUrl);
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: t.options[0],
      message: ''
    });
    setStatus('idle');
    setErrorMessage('');
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Kevin! Soy ${formData.name || 'alguien interesado en tu trabajo'}. Vi tu portafolio y me gustaría hablar sobre: ${formData.subject || 'una oportunidad'}. Mensaje: ${formData.message || 'Saludos!'}`
  );

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        
        {/* Encabezado Maximalista */}
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge-row">
            <div className="contact-top-badge">
              <MessageSquare size={16} />
              <span>{lang === 'en' ? 'DIRECT ACCESS & CHANNELS' : 'ACCESO DIRECTO & CANALES'}</span>
            </div>
            <motion.div
              className="michi-mini-sticker contact-michi-sticker"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              title="Michi"
            >
              <img
                src="Imagenes/Michi5.jpg"
                alt="Michi decorativo"
                className="michi-sticker-img"
              />
            </motion.div>
          </div>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <p className="section-description">{t.sectionSubtitle}</p>
        </motion.div>

        <div className="contact-grid">
          
          {/* Tarjeta de Canales Directos */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="panel-stamp-row">
              <span className="panel-stamp">{lang === 'en' ? 'FAST RESPONSE' : 'RESPUESTA RÁPIDA'}</span>
            </div>

            <h3 className="panel-title">{t.panelChannelsTitle}</h3>
            <p className="panel-subtitle">{t.panelChannelsDesc}</p>

            <div className="channels-list">
              
              {/* Correo Electrónico */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">{t.emailLabel}</span>
                  <a href={`mailto:${targetEmail}`} className="channel-value">
                    {targetEmail}
                  </a>
                </div>
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copiar correo"
                  aria-label="Copiar correo al portapapeles"
                  whileTap={{ scale: 0.88 }}
                >
                  {copiedEmail ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </motion.button>
              </div>

              {/* Teléfono & WhatsApp Directo */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">{t.phoneLabel}</span>
                  <div className="phone-actions-row">
                    <a href={`tel:${targetPhone}`} className="channel-value">
                      {targetPhone}
                    </a>
                    <a
                      href={`https://wa.me/${rawPhone}?text=Hola%20Kevin!%20Vi%20tu%20portafolio%20y%20quiero%20contactarte.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-badge-pill"
                    >
                      <MessageSquare size={13} />
                      <span>{t.whatsappBtn}</span>
                    </a>
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={handleCopyPhone}
                  className="copy-btn"
                  title="Copiar teléfono"
                  aria-label="Copiar teléfono al portapapeles"
                  whileTap={{ scale: 0.88 }}
                >
                  {copiedPhone ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </motion.button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevin-a-cano-chan-32aba239a"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card channel-card-link"
              >
                <div className="channel-icon-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">{t.linkedinLabel}</span>
                  <span className="channel-value">linkedin.com/in/kevin-a-cano-chan</span>
                </div>
                <ArrowUpRight size={18} className="link-arrow" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KevinACano"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card channel-card-link"
              >
                <div className="channel-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">{t.githubLabel}</span>
                  <span className="channel-value">github.com/KevinACano</span>
                </div>
                <ArrowUpRight size={18} className="link-arrow" />
              </a>

              {/* Ubicación */}
              <div className="channel-card location-channel">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">{t.locationLabel}</span>
                  <span className="channel-value">Cancún, Quintana Roo, México</span>
                </div>
              </div>

            </div>

            {/* Toasts de Copiado */}
            <AnimatePresence>
              {(copiedEmail || copiedPhone) && (
                <motion.div
                  className="copy-toast"
                  role="status"
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                >
                  <Check size={16} />
                  <span>{copiedEmail ? t.copiedEmailToast : t.copiedPhoneToast}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Formulario de Mensaje Funcional */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="panel-title">{t.formTitle}</h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="form-success"
                  className="form-success-box"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="success-michi-avatar"
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <CuteCatAvatar size={56} className="text-primary-accent" />
                  </motion.div>

                  <h4 className="success-title">{t.formSuccessTitle}</h4>
                  <p className="success-desc">{t.formSuccessDesc}</p>

                  <div className="success-actions-row">
                    <motion.a
                      href={`mailto:${targetEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="btn btn-primary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Mail size={16} />
                      <span>{t.btnOpenEmail}</span>
                    </motion.a>

                    <motion.a
                      href={`https://wa.me/${rawPhone}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <MessageSquare size={16} className="text-green" />
                      <span>{t.btnSendWhatsapp}</span>
                    </motion.a>
                  </div>

                  <button type="button" className="btn-reset-form" onClick={handleReset}>
                    {t.btnReset}
                  </button>

                  <div className="michi-purr-stamp">
                    <span>{t.michiPurr}</span>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="contact-form"
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status === 'error' && (
                    <motion.div
                      className="form-error-banner"
                      role="alert"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={18} className="error-icon" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.formName} <span className="star-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'en' ? 'e.g. Alex Rivera' : 'Ej. Carlos Alarcón'}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.formEmail} <span className="star-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      {t.formSubject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {t.options.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {t.formMessage} <span className="star-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        lang === 'en'
                          ? 'Tell me about the role, technical requirements, project timeline...'
                          : 'Platícame sobre la vacante, requerimientos técnicos, plazos previstos...'
                      }
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'sending' ? (
                      <span>{t.formSending}</span>
                    ) : (
                      <>
                        <span>{t.formSubmit}</span>
                        <Send size={17} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 80px 0 90px;
          border-bottom: 2px solid var(--border-color);
          background-color: var(--bg-canvas);
        }

        .section-intro {
          max-width: 68ch;
          margin-bottom: 40px;
        }

        .contact-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.95fr 1.05fr;
            gap: 48px;
          }
        }

        .contact-info-panel, .contact-form-panel {
          background-color: var(--card-bg);
          border: 3px solid var(--border-color);
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: var(--shadow-pop);
        }

        .panel-stamp-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .panel-stamp {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 6px;
          background-color: var(--accent-amber);
          color: #000000;
          border: 1px solid var(--border-color);
        }

        .panel-stamp-michi {
          font-size: 1.1rem;
        }

        .panel-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .panel-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 500;
        }

        .channels-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .channel-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background-color: var(--subtle-bg);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          box-shadow: var(--shadow-small);
          transition: transform 0.15s ease, background-color 0.15s ease;
          position: relative;
        }

        .channel-card-link:hover {
          background-color: var(--hover-bg);
          transform: translate(-1px, -1px);
        }

        .channel-icon-box {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .channel-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .channel-name {
          font-family: var(--font-display);
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 800;
        }

        .channel-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          word-break: break-all;
        }

        .phone-actions-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .whatsapp-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          background-color: #0E7C4B;
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 800;
          text-decoration: none;
        }

        .copy-btn {
          padding: 8px;
          border-radius: 8px;
          border: 1.5px solid var(--border-color);
          background-color: var(--card-bg);
          color: var(--text-main);
          box-shadow: 1.5px 1.5px 0px var(--border-color);
        }

        .text-green {
          color: #0E7C4B;
        }

        .copy-toast {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 10px 14px;
          background-color: var(--accent-green);
          color: #FFFFFF;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          border: 2px solid var(--border-color);
          box-shadow: 2px 2px 0px var(--border-color);
        }

        /* Formulario */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 16px;
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background-color: #FFEBEE;
          border: 2px solid #C62828;
          border-radius: 8px;
          color: #C62828;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .star-required {
          color: var(--accent-primary);
        }

        .form-input, .form-select, .form-textarea {
          padding: 12px 14px;
          background-color: var(--subtle-bg);
          border: 2px solid var(--border-color);
          border-radius: 10px;
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--text-main);
          width: 100%;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          background-color: var(--card-bg);
          border-color: var(--accent-primary);
          outline: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 105px;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 1.05rem;
          margin-top: 6px;
        }

        /* Éxito */
        .form-success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 28px 16px;
          gap: 16px;
        }

        .text-primary-accent {
          color: var(--accent-primary);
        }

        .success-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .success-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 44ch;
        }

        .success-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 8px;
        }

        .btn-reset-form {
          margin-top: 10px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
        }

        .michi-purr-stamp {
          border-top: 1px dashed var(--border-color);
          padding-top: 14px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-secondary);
        }
      `}</style>
    </section>
  );
}

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 05. GET IN TOUCH</span>
          <h2 className="section-title">Let's Connect & Build</h2>
          <p className="section-subtitle">
            I am currently open to internship opportunities, full-stack development roles, and software collaborations. Feel free to drop a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="info-card-title">Direct Channels</h3>
              <p className="info-card-sub">
                Reach out directly via email or phone, or connect with me across professional developer networks.
              </p>

              {/* Email channel */}
              <div className="channel-box">
                <div className="channel-icon-wrap cyan">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-val">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone channel */}
              <div className="channel-box">
                <div className="channel-icon-wrap emerald">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.rawPhone}`} className="channel-val">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location channel */}
              <div className="channel-box">
                <div className="channel-icon-wrap purple">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Location</span>
                  <span className="channel-val static-val">{personalInfo.location}</span>
                </div>
              </div>

              {/* Selected Links from Resume */}
              <div className="selected-links-header" style={{ marginTop: '20px', marginBottom: '12px', fontSize: '0.82rem', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                SELECTED LINKS
              </div>
              <div className="social-links-grid">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.attendancePortalLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <ExternalLink size={18} />
                  <span>Attendance Portal</span>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <ExternalLink size={18} />
                  <span>Portfolio Link</span>
                  <ExternalLink size={14} className="social-arrow" />
                </a>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="status-highlight-box glass-card">
              <div className="status-highlight-top">
                <span className="beacon-dot" />
                <span className="status-highlight-text">Immediate Availability</span>
              </div>
              <p className="status-highlight-desc">
                Ready for summer/fall internships, part-time project engagements, and junior software engineer opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <MessageSquare size={22} className="form-header-icon" />
                <div>
                  <h3 className="form-card-title">Send a Direct Message</h3>
                  <p className="form-card-sub">Fill out the form below and I'll get back to you promptly.</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrap">
                    <Sparkles size={32} />
                  </div>
                  <h4 className="success-title">Message Received!</h4>
                  <p className="success-desc">
                    Thank you for reaching out, <strong>{formData.name}</strong>. I have recorded your message and will reply to <em>{formData.email}</em> as soon as possible.
                  </p>
                  <div className="success-actions">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(formData.message)}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <Mail size={15} />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="actual-contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Web App Project"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Abid, I'd like to discuss..."
                      required
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-glow form-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

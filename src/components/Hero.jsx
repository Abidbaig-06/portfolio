import React, { useState } from "react";
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Sparkles, 
  Check, 
  Copy,
  Terminal,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background ambient glowing orbs */}
      <div className="hero-glow-orb hero-orb-cyan" />
      <div className="hero-glow-orb hero-orb-purple" />
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top availability badge */}
          <div className="hero-badge-row">
            <div className="status-beacon">
              <span className="beacon-dot" />
              <span>Available for Internships & Projects</span>
            </div>
            <div className="location-pill">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>
            <span className="wave-emoji"> 👋</span>
          </h1>

          <h2 className="hero-role-title">
            <span className="role-prefix">Computer Science Student | </span>
            <span className="role-highlight">Software Developer</span>
          </h2>

          <p className="hero-bio">
            {personalInfo.summary}
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-glow">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <button type="button" className="btn btn-secondary" onClick={onOpenResume}>
              <FileText size={18} />
              <span>View Resume</span>
            </button>

            <a href="#contact" className="btn btn-secondary">
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Socials & Fast copy link */}
          <div className="hero-social-bar">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={19} />
              <span className="social-label">GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={19} />
              <span className="social-label">LinkedIn</span>
            </a>

            <button
              type="button"
              className="social-icon-btn copy-email-btn"
              onClick={handleCopyEmail}
              title="Copy Email"
              aria-label="Copy Email address"
            >
              {copiedEmail ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
              <span className="social-label">{copiedEmail ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card / Portrait */}
        <div className="hero-visual-col">
          <div className="profile-card-wrapper">
            {/* Outer neon border frame */}
            <div className="profile-card glass-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-title">
                  <Terminal size={13} />
                  <span>abid-baig ~ dev</span>
                </div>
                <div className="terminal-chip">React 19</div>
              </div>

              <div className="profile-image-container">
                <img
                  src={personalInfo.photo}
                  alt="Abid Baig - Software Developer"
                  className="profile-photo"
                  onError={(e) => {
                    // Fallback to placeholder avatar if image fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-photo-fallback" style={{ display: 'none' }}>
                  <span>AB</span>
                </div>
                <div className="profile-photo-overlay" />
              </div>

              <div className="profile-card-footer">
                <div className="profile-info-block">
                  <div className="profile-name">{personalInfo.name}</div>
                  <div className="profile-degree">B.Tech CSE @ VFSTR (2024-2028)</div>
                </div>
                <div className="profile-status-chip">
                  <span className="status-ping" />
                  <span>Actively Coding</span>
                </div>
              </div>
            </div>

            {/* Floating feature pills */}
            <div className="floating-badge badge-top-right">
              <Sparkles size={16} className="badge-sparkle" />
              <div>
                <span className="badge-title">Full-Stack MERN</span>
                <span className="badge-desc">React & Node.js</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="cgpa-pill">7.1</div>
              <div>
                <span className="badge-title">CGPA VFSTR</span>
                <span className="badge-desc">Current: 7.1 / 10.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="container hero-stats-container">
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

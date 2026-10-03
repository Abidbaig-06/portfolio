import React, { useState } from "react";
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Download
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  personalInfo, 
  technicalSkills, 
  projectExperience, 
  developmentExperience, 
  educationList, 
  additionalInformation,
  selectedLinks 
} from "../data/portfolioData";
import "./ResumeModal.css";

export default function ResumeModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(personalInfo.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="resume-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-control-bar no-print">
          <div className="control-bar-left">
            <span className="resume-doc-tag">RESUME</span>
            <span className="resume-doc-name">{personalInfo.uppercaseName}</span>
          </div>

          <div className="control-bar-actions">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleCopySummary}
              title="Copy Summary"
            >
              {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              <span>{copied ? "Copied" : "Copy Summary"}</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Resume"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Canvas matching PDF layout */}
        <div className="resume-paper" id="printable-resume">
          {/* Top colored accent line */}
          <div className="resume-top-bar" />

          {/* Header */}
          <header className="pdf-resume-header">
            <div className="pdf-header-info">
              <h1 className="pdf-name">{personalInfo.uppercaseName}</h1>
              <div className="pdf-title">{personalInfo.headline}</div>
              
              <div className="pdf-contact-line">
                <span>{personalInfo.location}</span>
                <span className="pdf-sep">|</span>
                <a href={`tel:${personalInfo.rawPhone}`} className="pdf-link">{personalInfo.phone}</a>
                <span className="pdf-sep">|</span>
                <a href={`mailto:${personalInfo.email}`} className="pdf-link">{personalInfo.email}</a>
              </div>

              <div className="pdf-links-line">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="pdf-link">
                  {personalInfo.githubDisplay}
                </a>
                <span className="pdf-sep">|</span>
                <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="pdf-link">
                  {personalInfo.portfolioDisplay}
                </a>
                <span className="pdf-sep">|</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="pdf-link">
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
            </div>

            <div className="pdf-photo-box">
              <img src={personalInfo.photo} alt={personalInfo.name} className="pdf-photo" />
            </div>
          </header>

          {/* Professional Summary */}
          <section className="pdf-section">
            <div className="pdf-section-title-bar">
              <h2 className="pdf-section-title">PROFESSIONAL SUMMARY</h2>
            </div>
            <p className="pdf-summary-text">{personalInfo.summary}</p>
          </section>

          {/* Two-Column Body */}
          <div className="pdf-two-col">
            {/* Left Column */}
            <div className="pdf-col-left">
              {/* Project Experience */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">PROJECT EXPERIENCE</h2>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">AI Infrastructure Inspection & Maintenance</h3>
                  <ul className="pdf-bullets">
                    <li>Developed frontend screens for image-based inspection, defect review, risk prioritization and maintenance information.</li>
                  </ul>
                  <div className="pdf-entry-link">
                    <strong>GitHub:</strong>{" "}
                    <a href="https://github.com/Abidbaig-06/ai-infrastructure-inspection" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      github.com/Abidbaig-06/ai-infrastructure-inspection
                    </a>
                  </div>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">Attendance Portal</h3>
                  <ul className="pdf-bullets">
                    <li>Built a practical attendance application with formatted absentee reporting and deployment.</li>
                  </ul>
                  <div className="pdf-entry-link">
                    <strong>Live:</strong>{" "}
                    <a href="https://attendance-portal-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      attendance-portal-nu.vercel.app
                    </a>
                  </div>
                </div>
              </section>

              {/* Development Experience */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">DEVELOPMENT EXPERIENCE</h2>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">Independent Software Projects <span className="pdf-regular">| Present</span></h3>
                  <ul className="pdf-bullets">
                    <li>Build responsive interfaces and manage code with Git and GitHub.</li>
                    <li>Develop and deploy practical student-focused applications.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">EDUCATION</h2>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">B.Tech — Computer Science & Engineering</h3>
                  <p className="pdf-entry-inst">
                    Vignan's Foundation for Science, Technology and Research (VFSTR), Guntur, Andhra Pradesh | 2024–2028 (Expected)
                  </p>
                  <p className="pdf-entry-score">
                    Current CGPA: 7.1 / 10.0 (up to 4th Semester)
                  </p>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">Intermediate — MPC</h3>
                  <p className="pdf-entry-inst">
                    SR Junior College, Guntur, Andhra Pradesh | 2022–2024
                  </p>
                  <p className="pdf-entry-score">
                    Board of Intermediate Education, Andhra Pradesh | 55.1% | B Grade
                  </p>
                </div>

                <div className="pdf-entry">
                  <h3 className="pdf-entry-name">Secondary School Examination — Class X</h3>
                  <p className="pdf-entry-inst">
                    Vignan High School, LIC Colony, Guntur | 2022
                  </p>
                  <p className="pdf-entry-score">
                    CBSE | 60.6%
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="pdf-col-right">
              {/* Technical Skills */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">TECHNICAL SKILLS</h2>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Languages</div>
                  <div className="pdf-skill-list">Python, JavaScript, HTML, CSS, SQL.</div>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Frontend</div>
                  <div className="pdf-skill-list">React.</div>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Backend</div>
                  <div className="pdf-skill-list">Node.js, Express.</div>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Databases</div>
                  <div className="pdf-skill-list">MongoDB, SQL.</div>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Tools</div>
                  <div className="pdf-skill-list">Git, GitHub, VS Code, NPM.</div>
                </div>

                <div className="pdf-skill-block">
                  <div className="pdf-skill-category">Core Subjects</div>
                  <div className="pdf-skill-list">DSA, DBMS, OS, OOP.</div>
                </div>
              </section>

              {/* Selected Links */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">SELECTED LINKS</h2>
                </div>

                <div className="pdf-links-list">
                  <div className="pdf-link-entry">
                    <span className="pdf-link-label">GitHub</span>
                    <a href="https://github.com/Abidbaig-06" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      github.com/Abidbaig-06
                    </a>
                  </div>

                  <div className="pdf-link-entry">
                    <span className="pdf-link-label">Portfolio</span>
                    <a href="https://abidbaig-06.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      abidbaig-06.github.io/portfolio/
                    </a>
                  </div>

                  <div className="pdf-link-entry">
                    <span className="pdf-link-label">Attendance Portal</span>
                    <a href="https://attendance-portal-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      attendance-portal-nu.vercel.app
                    </a>
                  </div>

                  <div className="pdf-link-entry">
                    <span className="pdf-link-label">LinkedIn</span>
                    <a href="https://linkedin.com/in/abid-baig-92610b37b/" target="_blank" rel="noopener noreferrer" className="pdf-link">
                      linkedin.com/in/abid-baig-92610b37b/
                    </a>
                  </div>
                </div>
              </section>

              {/* Additional Information */}
              <section className="pdf-section">
                <div className="pdf-section-title-bar">
                  <h2 className="pdf-section-title">ADDITIONAL INFORMATION</h2>
                </div>

                <ul className="pdf-bullets">
                  {additionalInformation.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

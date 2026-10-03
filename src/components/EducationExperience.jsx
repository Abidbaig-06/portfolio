import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar, Award, CheckCircle, Info, Sparkles } from "lucide-react";
import { educationList, developmentExperience, additionalInformation } from "../data/portfolioData";
import "./EducationExperience.css";

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="education" className="section ed-exp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 04. BACKGROUND & EXPERIENCE</span>
          <h2 className="section-title">Education & Development Experience</h2>
          <p className="section-subtitle">
            Academic qualifications from VFSTR alongside practical software development experience.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="ed-exp-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Details
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <GraduationCap size={16} />
            <span>Education</span>
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <Briefcase size={16} />
            <span>Development Experience</span>
          </button>
        </div>

        {/* Dual Column Layout */}
        <div className="ed-exp-layout">
          {/* Education Column */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="ed-column">
              <div className="col-header">
                <div className="col-icon-box cyan">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="col-title">Education</h3>
                  <span className="col-sub">Academic degrees & qualifications</span>
                </div>
              </div>

              <div className="timeline-container">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="timeline-card glass-card">
                    <div className="timeline-top">
                      <div className="timeline-period">
                        <Calendar size={13} />
                        <span>{edu.period}</span>
                      </div>
                      <span className="timeline-badge">Verified</span>
                    </div>

                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <div className="timeline-inst">{edu.institution}, {edu.location}</div>

                    <div className="timeline-score-pill">
                      <Award size={14} className="score-icon" />
                      <span>{edu.score}</span>
                    </div>

                    {edu.bullets && (
                      <ul className="timeline-points">
                        {edu.bullets.map((point, pIdx) => (
                          <li key={pIdx}>
                            <CheckCircle size={13} className="pt-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Column */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="exp-column">
              <div className="col-header">
                <div className="col-icon-box purple">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="col-title">Development Experience</h3>
                  <span className="col-sub">Hands-on software building</span>
                </div>
              </div>

              <div className="timeline-container">
                {developmentExperience.map((exp, idx) => (
                  <div key={idx} className="timeline-card glass-card">
                    <div className="timeline-top">
                      <div className="timeline-period">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="timeline-badge exp-badge">Ongoing</span>
                    </div>

                    <h4 className="timeline-degree">{exp.title}</h4>

                    <ul className="timeline-points">
                      {exp.bullets.map((pt, ptIdx) => (
                        <li key={ptIdx}>
                          <CheckCircle size={13} className="pt-icon" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Additional Information Box directly from resume */}
                <div className="timeline-card glass-card highlight-card">
                  <div className="highlight-tag">ADDITIONAL INFORMATION</div>
                  <h4 className="timeline-degree">Focus & Career Objectives</h4>
                  <ul className="timeline-points" style={{ marginTop: '12px' }}>
                    {additionalInformation.map((info, iIdx) => (
                      <li key={iIdx}>
                        <Sparkles size={14} className="pt-icon" />
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

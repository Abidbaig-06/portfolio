import React from "react";
import { GraduationCap, MapPin, Sparkles, CheckCircle2, Terminal, Code, Cpu } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./About.css";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={22} className="about-hl-icon cyan" />,
      title: "Academic Background",
      detail: "B.Tech CSE at Vignan's Foundation for Science, Technology and Research (VFSTR), 2024–2028."
    },
    {
      icon: <Code size={22} className="about-hl-icon purple" />,
      title: "Modern Web Craftsmanship",
      detail: "Deep passion for React component hierarchies, modular CSS, semantic HTML, and responsive UI."
    },
    {
      icon: <Cpu size={22} className="about-hl-icon emerald" />,
      title: "Full-Stack & Systems",
      detail: "End-to-end full-stack capabilities utilizing Node.js, Express, MongoDB, SQL, and RESTful APIs."
    },
    {
      icon: <Sparkles size={22} className="about-hl-icon amber" />,
      title: "Practical Innovation",
      detail: "Building student-facing applications, AI infrastructure inspection screens, and hackathon prototypes."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">Driven by Curiosity & Pragmatic Code</h2>
          <p className="section-subtitle">
            A developer who bridges the gap between clean frontend aesthetics and robust backend architecture.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Narrative text & philosophy */}
          <div className="about-narrative glass-card">
            <h3 className="narrative-heading">
              Hello! I'm <span className="gradient-text">{personalInfo.name}</span>, a software developer based in {personalInfo.location}.
            </h3>
            
            <p className="narrative-p">
              Currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> at <em>VFSTR (Vignan's Foundation for Science, Technology and Research)</em>, Guntur with a <strong>Current CGPA: 7.1 / 10.0 (up to 4th Semester)</strong>.
            </p>

            <p className="narrative-p">
              My core focus is on <strong>project-based software development, UI design and deployment</strong>. I specialize in building practical web applications using <strong>React, JavaScript, HTML and CSS</strong>, with hands-on experience in attendance reporting systems, dashboard interfaces, Git/GitHub, and foundational backend development with <strong>Node.js and Express</strong>.
            </p>

            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>React frontend screens for dashboards & image-based inspection tools</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Attendance reporting, absentee formatting & practical student workflows</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Backend development with Node.js, Express, MongoDB, and SQL</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Interested in software engineering and full-stack development roles</span>
              </div>
            </div>

            <div className="about-quote">
              <Terminal size={18} className="quote-icon" />
              <span>"I believe the best way to master computer science is to build software people actually use."</span>
            </div>
          </div>

          {/* Right: Pillars & Highlights */}
          <div className="about-pillars">
            {highlights.map((hl, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-box">{hl.icon}</div>
                <div className="pillar-info">
                  <h4 className="pillar-title">{hl.title}</h4>
                  <p className="pillar-detail">{hl.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

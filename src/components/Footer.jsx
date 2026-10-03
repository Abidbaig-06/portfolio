import React from "react";
import { ArrowUp, Code2, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={20} className="footer-logo-icon" />
              <span>Abid <span className="logo-accent">Baig</span></span>
            </div>
            <p className="footer-bio">
              Computer Science & Engineering student at VFSTR. Developing practical web apps, attendance platforms, and intelligent user interfaces.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education & Exp</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Abid Baig. All rights reserved.
          </p>

          <p className="footer-tech">
            Crafted with React 19, Vite & Modern Semantic CSS
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

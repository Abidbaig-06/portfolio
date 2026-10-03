import React, { useState, useEffect } from "react";
import { Code2, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["hero", "about", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education & Exp", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, "#hero")}>
          <div className="logo-icon-wrapper">
            <Code2 size={20} className="logo-icon" />
          </div>
          <span className="logo-text">
            Abid <span className="logo-accent">Baig</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-pill" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="btn btn-secondary btn-sm resume-btn"
            onClick={onOpenResume}
            aria-label="View Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm hire-btn"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-content">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? "mobile-nav-active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn btn-secondary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

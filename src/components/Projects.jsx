import React, { useState } from "react";
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowUpRight,
  Code2,
  Terminal,
  Activity
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectExperience } from "../data/portfolioData";
import "./Projects.css";

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "AI & Web Development", "Full-Stack Web Application"];

  const filteredProjects = projectExperience.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 03. PORTFOLIO & CODE</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of practical web applications, deployed campus portals, AI defect systems, and open-source software.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`project-filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <article 
              key={project.id} 
              className={`project-card glass-card ${project.featured ? "project-featured" : ""}`}
            >
              <div className="project-card-inner">
                {/* Header */}
                <div className="project-card-header">
                  <div className="project-index-category">
                    <span className="project-index">0{idx + 1}</span>
                    <span className="project-category-tag">{project.category}</span>
                  </div>

                  <div className="project-status-badge">
                    {project.live ? (
                      <span className="status-live">
                        <span className="live-ping" />
                        Live App
                      </span>
                    ) : (
                      <span className="status-repo">
                        <Terminal size={12} />
                        GitHub
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Content */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-desc">{project.description}</p>

                  {/* Highlights / Bullets */}
                  {(project.bullets || project.highlights) && (
                    <div className="project-highlights">
                      <div className="highlights-label">Project Details:</div>
                      <ul className="highlights-list">
                        {(project.bullets || project.highlights).map((item, hIdx) => (
                          <li key={hIdx} className="highlight-item">
                            <Check size={14} className="highlight-check" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="project-footer">
                  <div className="project-tech-tags">
                    {project.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn btn-repo"
                        aria-label={`View ${project.title} code on GitHub`}
                      >
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn btn-live"
                        aria-label={`Open ${project.title} live application`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="project-link-btn btn-details"
                        onClick={() => onSelectProject(project)}
                      >
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="github-sync-banner glass-card">
          <div className="banner-left">
            <div className="git-icon-circle">
              <GithubIcon size={28} />
            </div>
            <div>
              <h4 className="git-banner-title">Explore All Repositories on GitHub</h4>
              <p className="git-banner-desc">
                Check out active commits, code experiments, and ongoing branches on my profile <strong>@Abidbaig-06</strong>.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Abidbaig-06"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

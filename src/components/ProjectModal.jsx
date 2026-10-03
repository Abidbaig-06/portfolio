import React from "react";
import { X, ExternalLink, Check, Terminal, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-tagline">{project.tagline}</p>
          <p className="modal-desc">{project.description}</p>

          {(project.bullets || project.highlights) && (
            <div className="modal-section">
              <h4 className="modal-section-title">Implementation Details</h4>
              <ul className="modal-highlights">
                {(project.bullets || project.highlights).map((item, idx) => (
                  <li key={idx}>
                    <Check size={16} className="modal-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="modal-tech-pills">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Launch Live App</span>
              <ExternalLink size={16} />
            </a>
          )}
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

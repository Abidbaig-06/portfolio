import React, { useState } from "react";
import { 
  Layout, 
  Server, 
  Code, 
  Wrench, 
  Brain, 
  Database,
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { technicalSkills } from "../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools", "Core Subjects"];

  const filteredSkills = technicalSkills.filter((group) => {
    if (activeCategory === "All") return true;
    return group.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Languages": return <Code size={20} className="cat-icon text-blue" />;
      case "Frontend": return <Layout size={20} className="cat-icon text-cyan" />;
      case "Backend": return <Server size={20} className="cat-icon text-purple" />;
      case "Databases": return <Database size={20} className="cat-icon text-emerald" />;
      case "Tools": return <Wrench size={20} className="cat-icon text-amber" />;
      case "Core Subjects": return <Brain size={20} className="cat-icon text-indigo" />;
      default: return <Layers size={20} className="cat-icon" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 02. TECHNICAL SKILLS</span>
          <h2 className="section-title">Technical Skills & Core Stack</h2>
          <p className="section-subtitle">
            Languages, libraries, and core computer science subjects from my curriculum and projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-tab ${activeCategory === cat ? "filter-tab-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Groups */}
        <div className="skills-group-container">
          <div className="skills-cards-grid">
            {filteredSkills.map((group, idx) => (
              <div key={idx} className="skills-category-block glass-card">
                <div className="category-block-header">
                  <div className="category-icon-title">
                    {getCategoryIcon(group.category)}
                    <h3 className="category-title">{group.category}</h3>
                  </div>
                  <span className="skill-count-chip">{group.skills.length} skills</span>
                </div>

                <p className="category-desc-text">{group.desc}</p>

                <div className="skill-tags-flex">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="resume-skill-pill">
                      <CheckCircle2 size={15} className="skill-pill-icon" />
                      <span className="skill-pill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights Banner */}
        <div className="skills-banner glass-card">
          <div className="banner-content">
            <Sparkles size={24} className="banner-sparkle" />
            <div>
              <h4 className="banner-title">Project-Based Software Development</h4>
              <p className="banner-sub">
                Building practical student applications, attendance platforms, defect inspection tools, and continuously strengthening DSA and system fundamentals.
              </p>
            </div>
          </div>
          <a href="#projects" className="btn btn-secondary btn-sm">
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

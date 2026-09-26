"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { featuredProjects, categories } from "../../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  const openCaseStudy = (project) => {
    setActiveModalProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeCaseStudy = () => {
    setActiveModalProject(null);
    document.body.style.overflow = "auto";
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI / Intelligent Systems":
        return "🤖";
      case "Machine Learning":
        return "🧠";
      case "Computer Vision":
        return "👁️";
      case "Recommendation Systems":
        return "🎯";
      case "Full-Stack Systems":
        return "⚡";
      default:
        return "💻";
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="03 // PROOF OF WORK"
            title="FEATURED PROJECTS"
            subtitle="Autonomous AI agents, specialized machine learning architectures, real-time computer vision pipelines, recommendation engines, and high-concurrency software systems."
          />
        </AnimateOnScroll>

        {/* Filter Navigation */}
        <AnimateOnScroll delay={100}>
          <div className={styles.filterContainer}>
            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterChip} ${
                    activeFilter === cat ? styles.filterActive : ""
                  }`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Editorial Project Showcase */}
        <div className={styles.projectList}>
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <AnimateOnScroll key={project.id} delay={index * 100}>
                <div className={`${styles.projectRow} ${isEven ? styles.rowReverse : ""}`}>
                  {/* Left: Project Visual / Interactive Schematic */}
                  <div
                    className={styles.visualColumn}
                    onClick={() => openCaseStudy(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openCaseStudy(project);
                      }
                    }}
                  >
                    <div className={styles.visualCard}>
                      {/* Technical Header */}
                      <div className={styles.visualHeader}>
                        <div className={styles.visualBadge}>
                          <span className={styles.visualDot}></span>
                          <span className={styles.visualCategory}>{project.category}</span>
                        </div>
                        <span className={styles.projectIndex}>{"SYSTEM // "}{project.number}</span>
                      </div>

                      {/* Schematic Display */}
                      <div className={styles.schematicCanvas}>
                        <div className={styles.schematicGrid}></div>
                        
                        {/* Custom visual icons / schematics based on project */}
                        <div className={styles.schematicContent}>
                          <div className={styles.systemIconBadge}>
                            {getCategoryIcon(project.category)}
                          </div>
                          <span className={styles.schematicTitle}>{project.title}</span>
                          <span className={styles.schematicSubtitle}>{project.subtitle}</span>

                          {project.metrics && (
                            <div className={styles.schematicMetrics}>
                              {project.metrics.map((m) => (
                                <div key={m.label} className={styles.schematicMetricItem}>
                                  <span className={styles.metricVal}>{m.value}</span>
                                  <span className={styles.metricLbl}>{m.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Interactive Hover Overlay */}
                        <div className={styles.hoverOverlay}>
                          <span className={styles.hoverText}>Click to Inspect Case Study</span>
                          <span className={styles.hoverArrow}>↗</span>
                        </div>
                      </div>

                      {/* Bottom Visual Bar */}
                      <div className={styles.visualFooter}>
                        <span className={styles.statusIndicator}>
                          {project.category.includes("AI") ? "● AI AGENT / ENGINE" : 
                           project.category.includes("Vision") ? "● REAL-TIME VISION" : 
                           project.category.includes("Recommendation") ? "● ML RECOMMENDER" : "● PRODUCTION SYSTEM"}
                        </span>
                        <span className={styles.viewPrompt}>CASE STUDY {project.number} →</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Project Narrative & Stack */}
                  <div className={styles.infoColumn}>
                    <div className={styles.numberRow}>
                      <span className={styles.projectNumber}>{project.number}</span>
                      <span className={styles.projectCategoryLabel}>{"// "}{project.category}</span>
                    </div>

                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                    <p className={styles.projectDescription}>{project.shortDescription}</p>

                    {/* Tech Stack Chips */}
                    <div className={styles.techStack}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className={styles.projectActions}>
                      <button
                        className={styles.caseStudyBtn}
                        onClick={() => openCaseStudy(project)}
                      >
                        <span>Deep Dive Case Study</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryActionBtn}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Source</span>
                        </a>
                      )}

                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryActionBtn}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal / Drawer */}
      {activeModalProject && (
        <div className={styles.modalBackdrop} onClick={closeCaseStudy}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderInfo}>
                <span className={styles.modalNumber}>{"CASE STUDY // "}{activeModalProject.number}</span>
                <h3 className={styles.modalTitle}>{activeModalProject.title}</h3>
                <p className={styles.modalSubtitle}>{activeModalProject.subtitle}</p>
              </div>
              <button
                className={styles.modalCloseBtn}
                onClick={closeCaseStudy}
                aria-label="Close Case Study"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* Problem Section */}
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionHeading}>
                  <span className={styles.modalSectionIcon}>⚠️</span> 01. The Problem
                </h4>
                <p className={styles.modalSectionText}>
                  {activeModalProject.caseStudy?.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionHeading}>
                  <span className={styles.modalSectionIcon}>💡</span> 02. Architectural Solution
                </h4>
                <p className={styles.modalSectionText}>
                  {activeModalProject.caseStudy?.solution}
                </p>
              </div>

              {/* System Architecture Breakdown */}
              {activeModalProject.caseStudy?.architecture && (
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionHeading}>
                    <span className={styles.modalSectionIcon}>⚙️</span> 03. System Architecture &amp; Implementation
                  </h4>
                  <div className={styles.archSteps}>
                    {activeModalProject.caseStudy.architecture.map((arch, i) => (
                      <div key={i} className={styles.archStepItem}>
                        <span className={styles.archStepNum}>0{i + 1}</span>
                        <p className={styles.archStepText}>{arch}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results & Verification */}
              {activeModalProject.caseStudy?.results && (
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionHeading}>
                    <span className={styles.modalSectionIcon}>📊</span> 04. Verified Results
                  </h4>
                  <div className={styles.resultsBox}>
                    <p>{activeModalProject.caseStudy.results}</p>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionHeading}>
                  <span className={styles.modalSectionIcon}>🛠️</span> 05. Technology Stack
                </h4>
                <div className={styles.modalTechGrid}>
                  {activeModalProject.techStack.map((tech) => (
                    <span key={tech} className={styles.modalTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.modalDoneBtn} onClick={closeCaseStudy}>
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import styles from "./Research.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { researchData } from "../../data/research";

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedJournal, setExpandedJournal] = useState(true);

  const { ongoingJournal, forthcomingConference, timeline } = researchData;

  return (
    <section id="research" className={styles.research}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="03 // ACADEMIC & LAB RESEARCH"
            title="RESEARCH &amp; SCIENTIFIC SYSTEMS"
            subtitle="Deep empirical research in risk-aware clinical NLP, hierarchical transformer architectures, and context-aware decision systems."
          />
        </AnimateOnScroll>

        {/* Filter / Category Selector */}
        <AnimateOnScroll delay={100}>
          <div className={styles.categoryFilterRow}>
            <div className={styles.filterGroup}>
              <button
                className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Research
              </button>
              <button
                className={`${styles.filterBtn} ${activeCategory === "journal" ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory("journal")}
              >
                Ongoing Journal Research
              </button>
              <button
                className={`${styles.filterBtn} ${activeCategory === "conference" ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory("conference")}
              >
                Forthcoming Conference Work
              </button>
              <button
                className={`${styles.filterBtn} ${activeCategory === "timeline" ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory("timeline")}
              >
                Research Timeline
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 1. ONGOING JOURNAL RESEARCH: HRA Mental-RoBERTa */}
        {(activeCategory === "all" || activeCategory === "journal") && (
          <AnimateOnScroll delay={150}>
            <div className={styles.academicCard}>
              <div className={styles.academicCardHeader}>
                <div className={styles.headerTop}>
                  <div className={styles.statusPill}>
                    <span className={styles.pulseDot}></span>
                    <span className={styles.statusText}>{ongoingJournal.status}</span>
                  </div>
                  <span className={styles.paperBadge}>{ongoingJournal.statusBadge}</span>
                </div>

                <h3 className={styles.paperTitle}>{ongoingJournal.title}</h3>

                {/* Author Block */}
                <div className={styles.authorsRow}>
                  <span className={styles.authorLabel}>{"AUTHORS //"}</span>
                  <div className={styles.authorNames}>
                    {ongoingJournal.authors.map((author, i) => (
                      <span key={author} className={styles.authorName}>
                        {author}
                        {i < ongoingJournal.authors.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Abstract & Scientific Narrative */}
              <div className={styles.paperBody}>
                <div className={styles.abstractBlock}>
                  <h4 className={styles.abstractLabel}>STRUCTURED ABSTRACT</h4>
                  <p className={styles.abstractText}>{ongoingJournal.abstract}</p>
                </div>

                {/* Architecture Highlights Grid */}
                <div className={styles.highlightsGrid}>
                  {ongoingJournal.highlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightCard}>
                      <div className={styles.highlightNum}>0{idx + 1}</div>
                      <h5 className={styles.highlightTitle}>{item.title}</h5>
                      <p className={styles.highlightDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Two-Stage Architecture Pipeline Visual */}
                <div className={styles.pipelineSchematic}>
                  <div className={styles.pipelineTitle}>
                    <span>HIERARCHICAL RISK-AWARE PIPELINE SCHEMATIC</span>
                    <span className={styles.telemetryTag}>ROBERTA TRANSFORMER ENCODER</span>
                  </div>

                  <div className={styles.schematicFlow}>
                    <div className={styles.flowNode}>
                      <span className={styles.nodeIndex}>STAGE 01</span>
                      <strong className={styles.nodeName}>Binary Triage</strong>
                      <span className={styles.nodeDesc}>Normal vs. At-Risk</span>
                    </div>

                    <div className={styles.flowArrow}>→</div>

                    <div className={styles.flowNode}>
                      <span className={styles.nodeIndex}>STAGE 02</span>
                      <strong className={styles.nodeName}>Multi-Class Screening</strong>
                      <span className={styles.nodeDesc}>Depression / Anxiety / Bipolar / Suicidal</span>
                    </div>

                    <div className={styles.flowArrow}>→</div>

                    <div className={`${styles.flowNode} ${styles.flowNodeActive}`}>
                      <span className={styles.nodeIndex}>STAGE 03</span>
                      <strong className={styles.nodeName}>Decision Layer</strong>
                      <span className={styles.nodeDesc}>Rule-Based Sensitivity &amp; Bootstrap CI</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className={styles.techStackRow}>
                  {ongoingJournal.techStack.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className={styles.academicFooter}>
                <a
                  href={ongoingJournal.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryResearchBtn}
                  aria-label="View HRA Mental-RoBERTa GitHub repository"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Repository ↗</span>
                </a>

                <a
                  href={ongoingJournal.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryResearchBtn}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>Read Research Documentation</span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {/* 2. FORTHCOMING CONFERENCE WORK */}
        {(activeCategory === "all" || activeCategory === "conference") && (
          <AnimateOnScroll delay={200}>
            <div className={`${styles.academicCard} ${styles.forthcomingCard}`}>
              <div className={styles.academicCardHeader}>
                <div className={styles.headerTop}>
                  <div className={styles.statusPillAmber}>
                    <span className={styles.pulseDotAmber}></span>
                    <span className={styles.statusText}>{forthcomingConference.status}</span>
                  </div>
                  <span className={styles.paperBadge}>{forthcomingConference.statusBadge}</span>
                </div>

                <h3 className={styles.paperTitle}>{forthcomingConference.title}</h3>

                <div className={styles.authorsRow}>
                  <span className={styles.authorLabel}>{"RESEARCHER //"}</span>
                  <div className={styles.authorNames}>
                    <span className={styles.authorName}>Ayush Raj</span>
                  </div>
                </div>
              </div>

              <div className={styles.paperBody}>
                <div className={styles.abstractBlock}>
                  <h4 className={styles.abstractLabel}>RESEARCH FOCUS</h4>
                  <p className={styles.abstractText}>{forthcomingConference.abstract}</p>
                </div>

                <div className={styles.highlightsGrid}>
                  {forthcomingConference.highlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightCard}>
                      <div className={styles.highlightNum}>0{idx + 1}</div>
                      <h5 className={styles.highlightTitle}>{item.title}</h5>
                      <p className={styles.highlightDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.techStackRow}>
                  {forthcomingConference.techStack.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {/* 3. RESEARCH TIMELINE */}
        {(activeCategory === "all" || activeCategory === "timeline") && (
          <AnimateOnScroll delay={250}>
            <div className={styles.timelineSection}>
              <div className={styles.timelineHeader}>
                <h4 className={styles.timelineSectionTitle}>RESEARCH &amp; ACADEMIC TIMELINE</h4>
                <span className={styles.timelineSectionSubtitle}>Milestone progression from international research to clinical NLP</span>
              </div>

              <div className={styles.timelineContainer}>
                <div className={styles.timelineTrackLine}></div>
                {timeline.map((item, index) => (
                  <div key={index} className={styles.timelineNode}>
                    <div className={styles.timelineYearBadge}>{item.year}</div>
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContentCard}>
                      <span className={styles.timelineCategoryBadge}>{item.badge}</span>
                      <h5 className={styles.timelineTitle}>{item.title}</h5>
                      <p className={styles.timelineSubtitle}>{item.subtitle}</p>
                      <p className={styles.timelineDetails}>{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}

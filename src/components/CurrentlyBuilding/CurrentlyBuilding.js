"use client";

import styles from "./CurrentlyBuilding.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { currentlyBuilding } from "../../data/projects";

export default function CurrentlyBuilding() {
  if (!currentlyBuilding || currentlyBuilding.length === 0) return null;

  return (
    <section id="currently-building" className={styles.section}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="02 // ACTIVE ENGINEERING LAB"
            title="CURRENTLY BUILDING"
            subtitle="Systems, pipelines, and architectural experiments under active development."
          />
        </AnimateOnScroll>

        <div className={styles.panelsContainer}>
          {currentlyBuilding.map((item, index) => (
            <AnimateOnScroll key={item.id || index} delay={index * 120}>
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <div className={styles.statusGroup}>
                    <div className={styles.statusIndicator}>
                      <span className={styles.statusPulse}></span>
                      <span className={styles.statusDot}></span>
                    </div>
                    <span className={styles.statusLabel}>{item.status}</span>
                    <span className={styles.categoryBadge}>{item.category}</span>
                  </div>

                  {item.metrics && (
                    <div className={styles.telemetryTag}>
                      <span className={styles.telemetryIcon}>⚡</span>
                      <span className={styles.telemetryText}>{item.metrics}</span>
                    </div>
                  )}
                </div>

                <div className={styles.panelBody}>
                  <h3 className={styles.panelTitle}>{item.title}</h3>
                  <p className={styles.panelDescription}>{item.description}</p>
                </div>

                <div className={styles.panelFooter}>
                  <div className={styles.techStack}>
                    {item.techStack?.map((tech) => (
                      <span key={tech} className={styles.techChip}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sourceBtn}
                      aria-label={`View repository for ${item.title}`}
                    >
                      <span>Lab Source</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  )}
                </div>

                <div className={styles.scannerLine}></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

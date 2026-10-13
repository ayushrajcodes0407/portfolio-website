"use client";

import styles from "./Resume.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { experience } from "../../data/experience";

export default function Resume() {
  const workExperience = experience.filter((e) => e.type === "work");
  const education = experience.filter((e) => e.type === "education");

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="05 // TRACK RECORD"
            title="EXPERIENCE & EDUCATION"
            subtitle="Industrial engineering internships, applied computer vision & ML systems, and rigorous computer science foundations."
          />
        </AnimateOnScroll>

        <div className={styles.timelineGrid}>
          {/* Engineering Experience Column */}
          <div className={styles.timelineColumn}>
            <AnimateOnScroll>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>💼</span>
                <h3 className={styles.columnTitle}>Engineering &amp; AI Internships</h3>
              </div>
            </AnimateOnScroll>

            <div className={styles.timeline}>
              <div className={styles.timelineTrack}></div>
              {workExperience.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineDot} ${item.status === "ONGOING" ? styles.dotOngoing : ""}`}></div>
                    <div className={styles.timelineCard}>
                      <div className={styles.cardTopRow}>
                        <div className={styles.badgeGroup}>
                          <span className={styles.periodBadge}>{item.period}</span>
                          {item.status && (
                            <span className={item.status === "ONGOING" ? styles.statusOngoing : styles.statusCompleted}>
                              {item.status === "ONGOING" && <span className={styles.pulseDot}></span>}
                              {item.status}
                            </span>
                          )}
                        </div>
                        <span className={styles.locationText}>{item.location}</span>
                      </div>

                      <h4 className={styles.roleTitle}>{item.title}</h4>
                      <p className={styles.orgName}>{item.organization}</p>
                      
                      {item.description && (
                        <p className={styles.roleSummary}>{item.description}</p>
                      )}

                      <ul className={styles.highlightsList}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className={styles.highlightItem}>
                            <span className={styles.highlightBullet}>▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {item.skills && item.skills.length > 0 && (
                        <div className={styles.skillChips}>
                          {item.skills.map((skill) => (
                            <span key={skill} className={styles.skillChip}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.certificateUrl && (
                        <div style={{ marginTop: "0.85rem" }}>
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontSize: "0.74rem",
                              fontFamily: "var(--font-mono)",
                              color: "var(--accent-blue-light)",
                              textDecoration: "none",
                              background: "rgba(59, 130, 246, 0.08)",
                              padding: "0.3rem 0.65rem",
                              borderRadius: "4px",
                              border: "1px solid rgba(59, 130, 246, 0.25)",
                            }}
                          >
                            <span>Verify Credential</span>
                            <span style={{ fontSize: "0.8rem" }}>↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Education & Academic Column */}
          <div className={styles.timelineColumn}>
            <AnimateOnScroll delay={100}>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>🎓</span>
                <h3 className={styles.columnTitle}>Academic Foundations</h3>
              </div>
            </AnimateOnScroll>

            <div className={styles.timeline}>
              <div className={styles.timelineTrack}></div>
              {education.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 150 + 150}>
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineDot} ${styles.dotAmber}`}></div>
                    <div className={styles.timelineCard}>
                      <div className={styles.cardTopRow}>
                        <div className={styles.badgeGroup}>
                          <span className={styles.periodBadge}>{item.period}</span>
                          {item.status && (
                            <span className={styles.statusAcademic}>
                              {item.status}
                            </span>
                          )}
                        </div>
                        <span className={styles.locationText}>{item.location}</span>
                      </div>

                      <h4 className={styles.roleTitle}>{item.title}</h4>
                      <p className={styles.orgName}>{item.organization}</p>

                      {item.description && (
                        <p className={styles.roleSummary}>{item.description}</p>
                      )}

                      <ul className={styles.highlightsList}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className={styles.highlightItem}>
                            <span className={styles.highlightBullet}>▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {item.skills && item.skills.length > 0 && (
                        <div className={styles.skillChips}>
                          {item.skills.map((skill) => (
                            <span key={skill} className={styles.skillChip}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

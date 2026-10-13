"use client";

import styles from "./About.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { personalData } from "../../data/personal";
import { getAssetPath } from "../../utils/basePath";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="01 // PROFILE & VISION"
            title="ABOUT"
            subtitle="Bridging theoretical computer science with high-impact product engineering."
          />
        </AnimateOnScroll>

        <div className={styles.contentGrid}>
          {/* Main Statement & Narrative */}
          <AnimateOnScroll delay={100}>
            <div className={styles.narrativeBox}>
              <div className={styles.quoteBar}></div>
              <div className={styles.textContainer}>
                <h3 className={styles.statement}>
                  &ldquo;{personalData.aboutStatement}&rdquo;
                </h3>
                <p className={styles.bioText}>
                  I am a Computer Science &amp; Engineering undergraduate (2024–2028) at{" "}
                  <strong className={styles.highlightText}>Birla Institute of Technology, Mesra</strong>. 
                  My engineering practice centers on building real-world AI/ML systems, high-accuracy computer-vision models, and robust full-stack web platforms.
                </p>
                <p className={styles.bioText}>
                  Rather than stopping at isolated models or prototype notebooks, I engineer end-to-end software: from rigorous data curation and system architecture to high-throughput backend APIs and polished, responsive user interfaces.
                </p>

                {/* Pipeline Flow Visualization */}
                <div className={styles.lifecyclePill}>
                  <div className={styles.lifecycleStep}>
                    <span className={styles.stepNum}>01</span>
                    <span className={styles.stepTitle}>Idea</span>
                  </div>
                  <span className={styles.arrowIcon}>→</span>
                  <div className={styles.lifecycleStep}>
                    <span className={styles.stepNum}>02</span>
                    <span className={styles.stepTitle}>Architecture</span>
                  </div>
                  <span className={styles.arrowIcon}>→</span>
                  <div className={styles.lifecycleStep}>
                    <span className={styles.stepNum}>03</span>
                    <span className={styles.stepTitle}>Implementation</span>
                  </div>
                  <span className={styles.arrowIcon}>→</span>
                  <div className={`${styles.lifecycleStep} ${styles.stepDeploy}`}>
                    <span className={styles.stepNum}>04</span>
                    <span className={styles.stepTitle}>Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Metadata Cards Grid */}
          <div className={styles.cardsGrid}>
            {personalData.metadataCards.map((card, idx) => (
              <AnimateOnScroll key={card.label} delay={idx * 100 + 150}>
                <div className={styles.metaCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>{card.icon}</span>
                    <span className={styles.cardLabel}>{card.label}</span>
                  </div>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                  <div className={styles.cardBorderSheen}></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* HIGH-PRIORITY RESUME DOWNLOAD & VIEW CTA */}
        <AnimateOnScroll delay={250}>
          <div className={styles.resumeCtaBanner}>
            <div className={styles.resumeCtaContent}>
              <div className={styles.resumeIconBadge}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.resumeText}>
                <h4 className={styles.resumeHeading}>Want the complete profile?</h4>
                <p className={styles.resumeSubheading}>CV · Research Track · Full-Stack &amp; AI/ML Engineering Experience</p>
              </div>
            </div>

            <div className={styles.resumeActions}>
              <a
                href={getAssetPath("/resume.pdf")}
                download="Ayush_Raj_Resume.pdf"
                className={styles.resumeDownloadBtn}
                aria-label="Download Ayush Raj Resume PDF"
              >
                <svg className={styles.downloadIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href={getAssetPath("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeViewBtn}
                aria-label="View Ayush Raj Resume in new tab"
              >
                <span>View Resume</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            
            <div className={styles.bannerSheen}></div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

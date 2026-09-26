"use client";

import styles from "./Github.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { socialLinks } from "../../data/social";

const selectedRepos = [
  {
    name: "be11-sports-platform",
    description: "Sports venue booking platform with match scheduling, slot allocation algorithms, and Prisma/PostgreSQL backend.",
    language: "TypeScript",
    langColor: "#3178c6",
    tags: ["React", "Express", "PostgreSQL"],
    url: "https://github.com/ayushrajcodes0407",
  },
  {
    name: "vision-ppe-compliance",
    description: "YOLO computer-vision detection pipeline for industrial PPE compliance, trained on 5,000+ domain-specific frames.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["YOLO", "OpenCV", "Flask"],
    url: "https://github.com/ayushrajcodes0407",
  },
  {
    name: "artificial-wisdom",
    description: "Context-aware reasoning framework combining tabular gradient-boosted models with FAISS dense vector retrieval and SHAP.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["XGBoost", "RAG", "FAISS"],
    url: "https://github.com/ayushrajcodes0407",
  },
  {
    name: "vacation-mantra-crm",
    description: "Enterprise CRM platform with role-based lead distribution, real-time analytics, and customer conversion pipelines.",
    language: "TypeScript",
    langColor: "#3178c6",
    tags: ["React", "Prisma", "Tailwind"],
    url: "https://github.com/ayushrajcodes0407",
  },
];

export default function Github() {
  const githubUrl = socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/ayushrajcodes0407";

  return (
    <section id="github" className={styles.github}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="08 // REPOSITORY ARCHIVE"
            title="OPEN SOURCE &amp; CODEBASES"
            subtitle="Explore curated repositories, system implementations, and open-source contributions."
          />
        </AnimateOnScroll>

        <div className={styles.repoGrid}>
          {selectedRepos.map((repo, idx) => (
            <AnimateOnScroll key={repo.name} delay={idx * 100}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoCard}
              >
                <div className={styles.repoHeader}>
                  <div className={styles.repoIconRow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={styles.gitIcon}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className={styles.repoName}>{repo.name}</span>
                  </div>
                  <span className={styles.externalArrow}>↗</span>
                </div>

                <p className={styles.repoDesc}>{repo.description}</p>

                <div className={styles.repoFooter}>
                  <div className={styles.langIndicator}>
                    <span className={styles.langDot} style={{ backgroundColor: repo.langColor }}></span>
                    <span className={styles.langName}>{repo.language}</span>
                  </div>
                  <div className={styles.tagGroup}>
                    {repo.tags.map((t) => (
                      <span key={t} className={styles.smallTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <AnimateOnScroll delay={300}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubCta}
            >
              <span>Explore Full GitHub Profile</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

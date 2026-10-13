"use client";

import styles from "./Github.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { socialLinks } from "../../data/social";

const selectedRepos = [
  {
    name: "HRA-Mental-Roberta-2026",
    description: "Hierarchical Risk-Aware Mental-RoBERTa framework for early multi-class screening of mental-health conditions.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["RoBERTa", "PyTorch", "Hugging Face", "Clinical NLP"],
    url: "https://github.com/ayushrajcodes0407/HRA-Mental-Roberta-2026",
  },
  {
    name: "data_sarthi",
    description: "AI-powered data quality, issue detection & smart exploratory data analysis (EDA) interactive platform.",
    language: "JavaScript",
    langColor: "#f7df1e",
    tags: ["React", "EDA", "Data Quality", "Analytics"],
    url: "https://github.com/ayushrajcodes0407/data_sarthi",
  },
  {
    name: "twitter-sentiment-analysis",
    description: "Real-time Twitter/X sentiment classification & polarity scoring with VADER social NLP, TF-IDF, and Streamlit.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["NLP", "VADER", "Scikit-learn", "Streamlit"],
    url: "https://github.com/ayushrajcodes0407/twitter-sentiment-analysis",
  },
  {
    name: "Spotify-Content-Based-Recommendation-System",
    description: "Content-based music recommendation engine built with acoustic audio feature similarity and vector clustering.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["Machine Learning", "Cosine Similarity", "Pandas"],
    url: "https://github.com/ayushrajcodes0407/Spotify-Content-Based-Recommendation-System",
  },
  {
    name: "Sarcasm_Analysis_NLP_Project",
    description: "NLP-based sarcasm detection pipeline using text preprocessing, feature extraction, and ML classification baselines.",
    language: "Python",
    langColor: "#3572A5",
    tags: ["NLP", "Classification", "Feature Engineering", "Python"],
    url: "https://github.com/ayushrajcodes0407/Sarcasm_Analysis_NLP_Project",
  },
  {
    name: "portfolio-website",
    description: "Modern dark editorial portfolio website engineered with Next.js, custom canvas physics, and responsive design.",
    language: "JavaScript",
    langColor: "#f7df1e",
    tags: ["Next.js", "React", "CSS Modules", "Performance"],
    url: "https://github.com/ayushrajcodes0407/portfolio-website",
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

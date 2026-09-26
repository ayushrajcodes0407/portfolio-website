"use client";

import styles from "./Impact.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { personalData } from "../../data/personal";

export default function Impact() {
  return (
    <section id="impact" className={styles.impact}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="07 // VERIFIED METRICS"
            title="SYSTEM IMPACT & BENCHMARKS"
            subtitle="Ground truth metrics from industrial computer-vision deployments and full-stack software architectures."
          />
        </AnimateOnScroll>

        <div className={styles.statsGrid}>
          {personalData.verifiedStats.map((stat, idx) => (
            <AnimateOnScroll key={stat.label} delay={idx * 100}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <span className={styles.statIndex}>METRIC 0{idx + 1}</span>
                  <div className={styles.statPulse}></div>
                </div>
                <div className={styles.statNumber}>{stat.value}</div>
                <h4 className={styles.statLabel}>{stat.label}</h4>
                <p className={styles.statDescription}>{stat.description}</p>
                <div className={styles.statBottomLine}></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

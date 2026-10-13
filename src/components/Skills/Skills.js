"use client";

import styles from "./Skills.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="06 // TECHNICAL CAPABILITIES"
            title="CORE ENGINEERING STACK"
            subtitle="Curated toolsets and technical frameworks engineered for production AI and scalable web applications."
          />
        </AnimateOnScroll>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((cat, idx) => (
            <AnimateOnScroll key={cat.name} delay={idx * 100}>
              <div className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.headerLeft}>
                    <span className={styles.categoryIndex}>0{idx + 1}</span>
                    <h3 className={styles.categoryTitle}>{cat.name}</h3>
                  </div>
                  <div className={styles.categoryDot}></div>
                </div>

                <p className={styles.categoryDesc}>{cat.description}</p>

                <div className={styles.skillsList}>
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className={styles.skillTag}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.level && <span className={styles.skillLevel}>{skill.level}</span>}
                    </div>
                  ))}
                </div>

                <div className={styles.cardBorderSheen}></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

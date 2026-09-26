import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`${styles.heading} ${styles[align] || ""}`}>
      {eyebrow && (
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrowDot}></span>
          <span className={styles.eyebrow}>{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.lineAccent}>
        <div className={styles.lineGlow}></div>
      </div>
    </div>
  );
}

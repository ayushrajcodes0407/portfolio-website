import styles from "./Footer.module.css";
import { socialLinks } from "../../data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.monogram}>AR</div>
            <div className={styles.brandInfo}>
              <span className={styles.name}>AYUSH RAJ</span>
              <span className={styles.tagline}>AI / ML · SOFTWARE · RESEARCH</span>
            </div>
          </div>

          <div className={styles.linksRow}>
            {socialLinks.map((link) => {
              const isExternal = link.url.startsWith("http");
              const isPhone = link.name === "Phone" || link.url.startsWith("tel:");
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={styles.footerLink}
                  aria-label={isPhone ? "Call Ayush Raj" : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ayush Raj. Designed &amp; Engineered with Precision.
          </p>
          <div className={styles.securityPill}>
            <span className={styles.secureDot}></span>
            <span>PROD // VERCEL EDGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

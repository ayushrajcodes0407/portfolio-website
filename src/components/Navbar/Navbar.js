"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { socialLinks } from "../../data/social";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Building", href: "#currently-building" },
  { label: "Research", href: "#research" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme");
    const currentTheme = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = [
        "hero",
        "about",
        "currently-building",
        "research",
        "credentials",
        "projects",
        "experience",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const githubLink =
    socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/ayushrajcodes0407";
  const linkedinLink =
    socialLinks.find((s) => s.name === "LinkedIn")?.url ||
    "https://www.linkedin.com/in/ayushraj-tech/";

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left: Brand Monogram */}
        <a
          href="#hero"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Ayush Raj Home"
        >
          <div className={styles.monogram}>
            <span>AR</span>
            <div className={styles.onlineDot}></div>
          </div>
          <div className={styles.brandText}>
            <span className={styles.name}>AYUSH RAJ</span>
            <span className={styles.roleTitle}>AI/ML · CSE</span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = activeSection === linkId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.active : ""
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                    {isActive && <span className={styles.activePill}></span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Quick External Actions, Theme Toggle, & Let's Talk CTA */}
        <div className={styles.actionsDesktop}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggleBtn}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <>
                <span className={styles.themeIcon}>◐</span>
                <span className={styles.themeLabel}>LIGHT</span>
              </>
            ) : (
              <>
                <span className={styles.themeIcon}>☾</span>
                <span className={styles.themeLabel}>DARK</span>
              </>
            )}
          </button>

          {/* Let's Talk Pill Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={styles.letsTalkBtn}
            aria-label="Let's Talk — Contact Ayush"
          >
            <span className={styles.talkText}>LET&apos;S TALK</span>
            <svg
              className={styles.talkArrow}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <span className={styles.btnShine} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Header Right Controls: Theme + Hamburger */}
        <div className={styles.mobileActions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggleBtnMobile}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "◐" : "☾"}
          </button>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            id="nav-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${
          mobileOpen ? styles.drawerOpen : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>NAVIGATION</span>
          <button
            className={styles.closeDrawerBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile Let's Talk CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className={styles.mobileLetsTalkBtn}
        >
          <span>LET&apos;S TALK</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <ul className={styles.mobileLinks}>
          {navLinks.map((link, index) => {
            const linkId = link.href.replace("#", "");
            const isActive = activeSection === linkId;
            return (
              <li
                key={link.href}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <a
                  href={link.href}
                  className={`${styles.mobileLink} ${
                    isActive ? styles.mobileActive : ""
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className={styles.mobileIndex}>0{index + 1}</span>
                  <span className={styles.mobileLabel}>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.mobileSocials}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialBtn}
          >
            GitHub
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialBtn}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div className={styles.backdrop} onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}


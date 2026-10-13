"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Button from "../shared/Button";
import { personalData } from "../../data/personal";
import { socialLinks } from "../../data/social";

const AI_CAPABILITIES = [
  {
    id: "01",
    title: "LLM & RAG ARCHITECTURES",
    context: "Contextual Retrieval & Semantic Search · Artificial Wisdom",
    tag: "LLMs / FAISS",
  },
  {
    id: "02",
    title: "REAL-TIME COMPUTER VISION",
    context: "Sub-second PPE compliance detection pipeline",
    tag: "YOLOv8 / Edge",
  },
  {
    id: "03",
    title: "AUTONOMOUS AI AGENTS",
    context: "Multi-step tool execution, reasoning & decision workflows",
    tag: "Tool Use / Planning",
  },
  {
    id: "04",
    title: "EXPLAINABLE AI & ML PIPELINES",
    context: "Interpretable feature attribution & production models",
    tag: "SHAP / PyTorch",
  },
];

export default function Hero() {
  const visualRef = useRef(null);
  const coreRef = useRef(null);

  // Mouse-responsive 3D tilt & parallax for AI Neural Core
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        window.innerWidth < 1024);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || isTouch) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = visualRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) / (window.innerWidth / 2);
      targetY = (e.clientY - centerY) / (window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const updateMotion = () => {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      if (visualRef.current) {
        const rotY = currentX * 14;
        const rotX = -currentY * 12;
        visualRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${currentX * 10}px, ${currentY * 8}px, 0)`;
      }

      if (coreRef.current) {
        const proximity = Math.max(0, 1 - Math.sqrt(currentX * currentX + currentY * currentY) * 0.8);
        coreRef.current.style.filter = `drop-shadow(0 0 ${25 + proximity * 30}px rgba(59, 130, 246, ${0.45 + proximity * 0.35}))`;
      }

      rafId = requestAnimationFrame(updateMotion);
    };

    rafId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const githubUrl =
    socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/ayushrajcodes0407";

  return (
    <section id="hero" className={styles.hero} aria-label="AI Systems & Research Lab">
      {/* Subtle Atmospheric Depth Background */}
      <div className={styles.ambientCanvas} aria-hidden="true">
        <div className={styles.glowBlue} />
        <div className={styles.glowDeep} />
        <div className={styles.radialHaze} />
        <div className={styles.fineGrid} />
      </div>

      <div className={styles.container}>
        {/* Main 2-Column Editorial & Visual Composition */}
        <div className={styles.mainGrid}>
          {/* Left Column: Editorial Statement & Capabilities */}
          <div className={styles.editorialCol}>
            {/* Minimal Eyebrow Label */}
            <div className={styles.eyebrowTag}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.eyebrowText}>AI / LLM SYSTEMS</span>
            </div>

            {/* Display Typography */}
            <h2 className={styles.displayHeadline}>
              <span className={styles.headlinePrimary}>INTELLIGENCE,</span>
              <span className={styles.headlineSecondary}>ENGINEERED.</span>
            </h2>

            {/* Concise Mission Statement */}
            <p className={styles.statementText}>
              I build intelligent systems that combine machine learning, large
              language models, retrieval, computer vision, and real-world data.
            </p>

            {/* Minimal Capability Architecture Rows */}
            <div className={styles.capabilityList}>
              {AI_CAPABILITIES.map((cap) => (
                <div key={cap.id} className={styles.capabilityRow}>
                  <div className={styles.capIndex}>{cap.id}</div>
                  <div className={styles.capBody}>
                    <div className={styles.capTitleRow}>
                      <span className={styles.capTitle}>{cap.title}</span>
                      <span className={styles.capTag}>{cap.tag}</span>
                    </div>
                    <span className={styles.capContext}>{cap.context}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Restrained Action CTAs */}
            <div className={styles.actionsRow}>
              <Button
                href="#projects"
                variant="primary"
                onClick={(e) => handleScrollTo(e, "#projects")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Explore My Work
              </Button>

              <Button
                href={githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: Luminous AI Neural Core & Orbital Visualization */}
          <div className={styles.visualCol}>
            <div ref={visualRef} className={styles.aiLabVisualStage}>
              {/* Outer Atmospheric Aura */}
              <div className={styles.coreAmbientAura} aria-hidden="true" />

              {/* Concentric Orbital Rings with Depth & Motion */}
              <div className={styles.orbitalSystem} aria-hidden="true">
                {/* Orbital Ring 1 (Inner: Fast subtle rotation) */}
                <div className={`${styles.orbitTrack} ${styles.orbitTrackInner}`}>
                  <div className={`${styles.orbitNode} ${styles.nodeLlm}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>LLMs</span>
                  </div>
                  <div className={`${styles.orbitNode} ${styles.nodeRag}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>RAG</span>
                  </div>
                </div>

                {/* Orbital Ring 2 (Middle: Counter rotation) */}
                <div className={`${styles.orbitTrack} ${styles.orbitTrackMiddle}`}>
                  <div className={`${styles.orbitNode} ${styles.nodeVision}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>VISION</span>
                  </div>
                  <div className={`${styles.orbitNode} ${styles.nodeAgents}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>AGENTS</span>
                  </div>
                </div>

                {/* Orbital Ring 3 (Outer: Slow expansive rotation) */}
                <div className={`${styles.orbitTrack} ${styles.orbitTrackOuter}`}>
                  <div className={`${styles.orbitNode} ${styles.nodeReasoning}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>REASONING</span>
                  </div>
                  <div className={`${styles.orbitNode} ${styles.nodeMl}`}>
                    <span className={styles.nodePhoton} />
                    <span className={styles.nodeText}>ML</span>
                  </div>
                </div>

                {/* Vector Rays connecting Core to Orbits */}
                <svg className={styles.orbitVectorRays} viewBox="0 0 500 500">
                  <circle
                    cx="250"
                    cy="250"
                    r="120"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="185"
                    stroke="rgba(96, 165, 250, 0.15)"
                    strokeWidth="1"
                    strokeDasharray="3 8"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="235"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Central Luminous AI Intelligence Core */}
              <div ref={coreRef} className={styles.neuralCore}>
                <div className={styles.coreGlowPuff} aria-hidden="true" />
                <div className={styles.corePulseRing1} aria-hidden="true" />
                <div className={styles.corePulseRing2} aria-hidden="true" />

                <div className={styles.coreCenterOrb}>
                  <span className={styles.coreMonogram}>AI</span>
                  <span className={styles.coreSubLabel}>INTELLIGENCE</span>
                </div>
              </div>

              {/* Minimal Bottom Lab Status Tag */}
              <div className={styles.labStatusPill}>
                <span className={styles.labPulseDot} />
                <span className={styles.labStatusText}>
                  NEURAL &amp; REASONING ARCHITECTURE // ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Sophisticated Editorial Metrics (No Boxy Cards) */}
        <div className={styles.metricsStrip}>
          <div className={styles.metricBlock}>
            <span className={styles.metricNumber}>5,000+</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Annotated Frames</span>
              <span className={styles.metricDesc}>
                Curated industrial vision dataset (BCCL safety)
              </span>
            </div>
          </div>

          <div className={styles.metricDivider} aria-hidden="true" />

          <div className={styles.metricBlock}>
            <span className={styles.metricNumber}>~77%</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Vision mAP</span>
              <span className={styles.metricDesc}>
                PPE safety compliance detection accuracy
              </span>
            </div>
          </div>

          <div className={styles.metricDivider} aria-hidden="true" />

          <div className={styles.metricBlock}>
            <span className={styles.metricNumber}>&lt; 1s</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Edge Latency</span>
              <span className={styles.metricDesc}>
                Real-time sub-second live inference speed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className={styles.scrollCue}>
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "#about")}
          className={styles.scrollLink}
          aria-label="Scroll to About Section"
        >
          <div className={styles.scrollTrack}>
            <div className={styles.scrollBead} />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  );
}

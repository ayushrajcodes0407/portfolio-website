"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAssetPath } from "../../utils/basePath";
import styles from "./IntroCover.module.css";

const COVER_ROLES = [
  "AI/ML ENGINEER",
  "MACHINE LEARNING ENGINEER",
  "DATA SCIENTIST",
  "AI RESEARCHER",
  "NLP & LLM ENGINEER",
  "COMPUTER VISION ENGINEER",
];

export default function IntroCover() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleState, setRoleState] = useState("active");
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const portraitRef = useRef(null);
  const nameLayerRef = useRef(null);
  const buttonRef = useRef(null);

  // Rotating editorial titles
  useEffect(() => {
    let timeoutId;

    if (roleState === "active") {
      timeoutId = setTimeout(() => {
        setRoleState("exiting");
      }, 2800);
    } else if (roleState === "exiting") {
      timeoutId = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % COVER_ROLES.length);
        setRoleState("entering");
      }, 400);
    } else if (roleState === "entering") {
      timeoutId = setTimeout(() => {
        setRoleState("active");
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [roleState]);

  // Procedural Cinematic Smoke Engine on HTML5 Canvas with Mouse Fluid Disturbance & Idle Motion
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        window.innerWidth < 1024);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let animId = null;

    // Mouse state with smooth spring-damper interpolation
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      prevX: 0,
      prevY: 0,
      velX: 0,
      velY: 0,
      cursorPixelX: 0,
      cursorPixelY: 0,
      targetPixelX: 0,
      targetPixelY: 0,
    };

    // Pre-render rich, multi-lobe organic smoke cluster stamps for 60fps cinematic fluidity
    const createSmokeStamp = (type, isLightMode) => {
      const stamp = document.createElement("canvas");
      const size = 380;
      stamp.width = size;
      stamp.height = size;
      const sCtx = stamp.getContext("2d");
      const center = size / 2;

      // Seeded multi-lobe distribution for organic smoke curls & wisps
      const lobes = [
        { ox: 0, oy: 0, r: size * 0.42, a: 1.0 },
        { ox: size * 0.12, oy: -size * 0.08, r: size * 0.34, a: 0.85 },
        { ox: -size * 0.14, oy: size * 0.1, r: size * 0.32, a: 0.8 },
        { ox: size * 0.08, oy: size * 0.14, r: size * 0.28, a: 0.75 },
        { ox: -size * 0.1, oy: -size * 0.12, r: size * 0.3, a: 0.7 },
        { ox: size * 0.18, oy: size * 0.06, r: size * 0.22, a: 0.65 },
      ];

      lobes.forEach((lobe) => {
        const lx = center + lobe.ox;
        const ly = center + lobe.oy;
        const lr = lobe.r;
        const grad = sCtx.createRadialGradient(lx, ly, 0, lx, ly, lr);

        if (isLightMode) {
          if (type === "deep") {
            grad.addColorStop(0, `rgba(148, 163, 184, ${0.18 * lobe.a})`);
            grad.addColorStop(0.4, `rgba(203, 213, 225, ${0.1 * lobe.a})`);
            grad.addColorStop(1, "rgba(241, 245, 249, 0)");
          } else if (type === "mid") {
            grad.addColorStop(0, `rgba(100, 116, 139, ${0.15 * lobe.a})`);
            grad.addColorStop(0.45, `rgba(148, 163, 184, ${0.08 * lobe.a})`);
            grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          } else {
            grad.addColorStop(0, `rgba(71, 85, 105, ${0.12 * lobe.a})`);
            grad.addColorStop(0.5, `rgba(148, 163, 184, ${0.05 * lobe.a})`);
            grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          }
        } else {
          // Dark Mode: Deep black atmosphere + volumetric charcoal/slate vapor & soft white/silver highlights
          if (type === "deep") {
            // Deep charcoal / shadow smoke
            grad.addColorStop(0, `rgba(20, 26, 38, ${0.65 * lobe.a})`);
            grad.addColorStop(0.35, `rgba(14, 18, 28, ${0.42 * lobe.a})`);
            grad.addColorStop(0.75, `rgba(8, 11, 18, ${0.16 * lobe.a})`);
            grad.addColorStop(1, "rgba(3, 4, 6, 0)");
          } else if (type === "mid") {
            // Volumetric slate smoke
            grad.addColorStop(0, `rgba(38, 48, 68, ${0.48 * lobe.a})`);
            grad.addColorStop(0.35, `rgba(24, 32, 48, ${0.3 * lobe.a})`);
            grad.addColorStop(0.75, `rgba(12, 16, 26, ${0.1 * lobe.a})`);
            grad.addColorStop(1, "rgba(3, 4, 6, 0)");
          } else if (type === "highlight") {
            // Soft illuminated silver / gray vapor highlight
            grad.addColorStop(0, `rgba(150, 170, 200, ${0.32 * lobe.a})`);
            grad.addColorStop(0.35, `rgba(95, 115, 150, ${0.18 * lobe.a})`);
            grad.addColorStop(0.7, `rgba(45, 60, 90, ${0.06 * lobe.a})`);
            grad.addColorStop(1, "rgba(3, 4, 6, 0)");
          } else {
            // Subtle dark navy atmospheric wisp (very low opacity, not dominant)
            grad.addColorStop(0, `rgba(40, 70, 125, ${0.22 * lobe.a})`);
            grad.addColorStop(0.4, `rgba(25, 45, 85, ${0.12 * lobe.a})`);
            grad.addColorStop(0.8, `rgba(12, 22, 45, ${0.03 * lobe.a})`);
            grad.addColorStop(1, "rgba(3, 4, 6, 0)");
          }
        }

        sCtx.fillStyle = grad;
        sCtx.beginPath();
        sCtx.arc(lx, ly, lr, 0, Math.PI * 2);
        sCtx.fill();
      });

      return stamp;
    };

    let isLightMode =
      document.documentElement.getAttribute("data-theme") === "light";

    let stamps = {
      deep: createSmokeStamp("deep", isLightMode),
      mid: createSmokeStamp("mid", isLightMode),
      highlight: createSmokeStamp("highlight", isLightMode),
      blue: createSmokeStamp("blue", isLightMode),
    };

    // Smoke particle cloud definition
    class SmokePuff {
      constructor(relX, relY, baseRadius, depth, stampType) {
        this.relX = relX; // 0 to 1 across screen width
        this.relY = relY; // 0 to 1 across screen height
        this.baseRadius = baseRadius;
        this.depth = depth; // 0.15 (deep background) to 0.95 (foreground haze)
        this.stampType = stampType;

        // Idle harmonic drift parameters (25-40s cycles)
        this.harmonicFreqX = 0.00012 + Math.random() * 0.00018;
        this.harmonicFreqY = 0.00015 + Math.random() * 0.00018;
        this.harmonicAmpX = 35 + Math.random() * 60;
        this.harmonicAmpY = 25 + Math.random() * 50;
        this.phaseX = Math.random() * Math.PI * 2;
        this.phaseY = Math.random() * Math.PI * 2;

        // Slow organic rotation & breathing
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.0006;
        this.scaleBreathFreq = 0.0002 + Math.random() * 0.00018;
        this.scaleAspect = 0.88 + Math.random() * 0.35;

        // Local displacement from mouse interaction
        this.dispX = 0;
        this.dispY = 0;
        this.velDispX = 0;
        this.velDispY = 0;
      }

      update(time, mouseState, w, h) {
        // Idle organic harmonic drift
        const idleX =
          Math.sin(time * this.harmonicFreqX + this.phaseX) * this.harmonicAmpX;
        const idleY =
          Math.cos(time * this.harmonicFreqY + this.phaseY) * this.harmonicAmpY;

        // Slow continuous rotation
        this.rotation += this.rotSpeed;

        // Dynamic mouse interaction based on depth & proximity
        if (!isTouch && !prefersReducedMotion) {
          const originX = this.relX * w + idleX;
          const originY = this.relY * h + idleY;

          // Parallax camera translation based on depth
          const targetParallaxX = mouseState.currentX * (this.depth * 52);
          const targetParallaxY = mouseState.currentY * (this.depth * 38);

          // Proximity fluid swirl / disturbance from cursor
          const distToCursorX = originX - mouseState.cursorPixelX;
          const distToCursorY = originY - mouseState.cursorPixelY;
          const dist = Math.sqrt(
            distToCursorX * distToCursorX + distToCursorY * distToCursorY
          );
          const influenceRadius = 360;

          if (dist < influenceRadius && dist > 1) {
            const force = (1 - dist / influenceRadius) * this.depth * 15;
            // Disturbance along mouse velocity + gentle radial push
            this.velDispX += (mouseState.velX * 0.35 + (distToCursorX / dist) * 0.65) * force * 0.1;
            this.velDispY += (mouseState.velY * 0.35 + (distToCursorY / dist) * 0.65) * force * 0.1;
          }

          // Damping & spring back to target parallax
          this.dispX += (targetParallaxX - this.dispX) * 0.045 + this.velDispX;
          this.dispY += (targetParallaxY - this.dispY) * 0.045 + this.velDispY;

          this.velDispX *= 0.88;
          this.velDispY *= 0.88;
        } else {
          this.dispX = 0;
          this.dispY = 0;
        }

        // Breathing scale
        const breath =
          1 + Math.sin(time * this.scaleBreathFreq + this.phaseX) * 0.1;
        this.currentRadius = this.baseRadius * breath;
      }

      draw(context, time, w, h) {
        const idleX =
          Math.sin(time * this.harmonicFreqX + this.phaseX) * this.harmonicAmpX;
        const idleY =
          Math.cos(time * this.harmonicFreqY + this.phaseY) * this.harmonicAmpY;

        const posX = this.relX * w + idleX + this.dispX;
        const posY = this.relY * h + idleY + this.dispY;

        const stamp = stamps[this.stampType] || stamps.mid;
        const radius = this.currentRadius;

        context.save();
        context.translate(posX, posY);
        context.rotate(this.rotation);
        context.scale(this.scaleAspect, 1 / this.scaleAspect);

        context.drawImage(
          stamp,
          -radius,
          -radius,
          radius * 2,
          radius * 2
        );
        context.restore();
      }
    }

    // Generate multi-depth cloud of puffs concentrated behind portrait & drifting across background
    let puffs = [];
    const initPuffs = (w, h) => {
      puffs = [];
      const baseScale = Math.min(Math.max(w / 1400, 0.75), 1.35);

      // Layer 1: Deep Background Charcoal Clouds (spread across scene, subtle)
      const deepConfigs = [
        { x: 0.52, y: 0.48, r: 480, d: 0.18, t: "deep" },
        { x: 0.68, y: 0.42, r: 440, d: 0.22, t: "deep" },
        { x: 0.36, y: 0.55, r: 500, d: 0.16, t: "deep" },
        { x: 0.58, y: 0.66, r: 460, d: 0.2, t: "deep" },
        { x: 0.82, y: 0.36, r: 420, d: 0.18, t: "deep" },
        { x: 0.24, y: 0.46, r: 450, d: 0.14, t: "deep" },
        { x: 0.62, y: 0.28, r: 400, d: 0.2, t: "deep" },
      ];

      // Layer 2: Mid-level Volumetric Slate Smoke Body
      const midConfigs = [
        { x: 0.54, y: 0.45, r: 380, d: 0.42, t: "mid" },
        { x: 0.64, y: 0.38, r: 340, d: 0.48, t: "mid" },
        { x: 0.44, y: 0.52, r: 360, d: 0.4, t: "mid" },
        { x: 0.72, y: 0.52, r: 350, d: 0.46, t: "mid" },
        { x: 0.56, y: 0.64, r: 340, d: 0.44, t: "mid" },
        { x: 0.40, y: 0.36, r: 320, d: 0.36, t: "mid" },
        { x: 0.78, y: 0.44, r: 310, d: 0.42, t: "mid" },
        { x: 0.32, y: 0.62, r: 330, d: 0.38, t: "mid" },
      ];

      // Layer 3: Highlighted Vapor & Atmospheric Rim Wisps behind portrait silhouette
      const highlightConfigs = [
        { x: 0.56, y: 0.38, r: 290, d: 0.68, t: "highlight" },
        { x: 0.66, y: 0.34, r: 260, d: 0.72, t: "blue" },
        { x: 0.46, y: 0.42, r: 270, d: 0.65, t: "highlight" },
        { x: 0.62, y: 0.48, r: 280, d: 0.7, t: "highlight" },
        { x: 0.50, y: 0.56, r: 300, d: 0.62, t: "highlight" },
        { x: 0.72, y: 0.38, r: 250, d: 0.75, t: "blue" },
        { x: 0.42, y: 0.58, r: 260, d: 0.6, t: "highlight" },
      ];

      // Layer 4: Foreground Atmospheric Haze (lightest, responds most dynamically to cursor)
      const hazeConfigs = [
        { x: 0.58, y: 0.42, r: 230, d: 0.9, t: "highlight" },
        { x: 0.48, y: 0.36, r: 220, d: 0.85, t: "mid" },
        { x: 0.68, y: 0.50, r: 240, d: 0.92, t: "highlight" },
        { x: 0.42, y: 0.48, r: 210, d: 0.82, t: "mid" },
        { x: 0.74, y: 0.44, r: 220, d: 0.88, t: "highlight" },
      ];

      const allConfigs = [
        ...deepConfigs,
        ...midConfigs,
        ...highlightConfigs,
        ...hazeConfigs,
      ];

      allConfigs.forEach((cfg) => {
        puffs.push(
          new SmokePuff(
            cfg.x,
            cfg.y,
            cfg.r * baseScale,
            cfg.d,
            cfg.t
          )
        );
      });
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      isLightMode =
        document.documentElement.getAttribute("data-theme") === "light";
      stamps = {
        deep: createSmokeStamp("deep", isLightMode),
        mid: createSmokeStamp("mid", isLightMode),
        highlight: createSmokeStamp("highlight", isLightMode),
        blue: createSmokeStamp("blue", isLightMode),
      };

      initPuffs(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Track theme changes dynamically
    const observer = new MutationObserver(() => {
      const currentThemeIsLight =
        document.documentElement.getAttribute("data-theme") === "light";
      if (currentThemeIsLight !== isLightMode) {
        isLightMode = currentThemeIsLight;
        stamps = {
          deep: createSmokeStamp("deep", isLightMode),
          mid: createSmokeStamp("mid", isLightMode),
          highlight: createSmokeStamp("highlight", isLightMode),
          blue: createSmokeStamp("blue", isLightMode),
        };
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Mouse listener with normalized coordinates
    const onMouseMove = (e) => {
      if (isTouch) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      mouse.targetPixelX = px;
      mouse.targetPixelY = py;

      const halfW = width / 2;
      const halfH = height / 2;
      mouse.targetX = (px - halfW) / halfW;
      mouse.targetY = (py - halfH) / halfH;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      // Damped mouse interpolation
      mouse.prevX = mouse.currentX;
      mouse.prevY = mouse.currentY;

      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.055;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.055;

      mouse.cursorPixelX += (mouse.targetPixelX - mouse.cursorPixelX) * 0.08;
      mouse.cursorPixelY += (mouse.targetPixelY - mouse.cursorPixelY) * 0.08;

      mouse.velX = mouse.currentX - mouse.prevX;
      mouse.velY = mouse.currentY - mouse.prevY;

      // Deep Black Canvas Background
      if (isLightMode) {
        ctx.fillStyle = "#f8fafc";
      } else {
        ctx.fillStyle = "#030406";
      }
      ctx.fillRect(0, 0, width, height);

      // Draw all procedural smoke puffs
      for (let i = 0; i < puffs.length; i++) {
        puffs[i].update(time, mouse, width, height);
        puffs[i].draw(ctx, time, width, height);
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    // If reduced motion, render single atmospheric static frame
    if (prefersReducedMotion) {
      render(0);
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Parallax camera push on portrait & typography
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        window.innerWidth < 1024);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      if (isTouch) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (e.clientX - centerX) / centerX;
      targetY = (e.clientY - centerY) / centerY;
    };

    const handleScroll = () => {
      const vh = window.innerHeight || 800;
      const sy = window.scrollY;
      scrollProgress = Math.min(Math.max(sy / (vh * 0.9), 0), 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (!isTouch) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const updateMotion = () => {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      const scrollFade = Math.max(0, 1 - scrollProgress * 1.15);
      const typoTranslateY = -scrollProgress * 90;
      const portraitScale = Math.max(0.9, 1 - scrollProgress * 0.06);
      const portraitTranslateY = scrollProgress * 40;

      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${currentX * 12}px, ${currentY * 8 + portraitTranslateY}px, 0) scale(${portraitScale})`;
        portraitRef.current.style.opacity = `${scrollFade}`;
      }

      if (nameLayerRef.current) {
        nameLayerRef.current.style.transform = `translate3d(${currentX * -6}px, ${currentY * -4 + typoTranslateY}px, 0)`;
        nameLayerRef.current.style.opacity = `${scrollFade}`;
      }

      if (buttonRef.current) {
        const btnFade = Math.max(0, 1 - scrollProgress * 2.2);
        buttonRef.current.style.transform = `translate3d(calc(-50% + ${currentX * 3}px), ${currentY * 2 + scrollProgress * 30}px, 0)`;
        buttonRef.current.style.opacity = `${btnFade}`;
      }

      rafId = requestAnimationFrame(updateMotion);
    };

    rafId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (!isTouch) window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleEnterPortfolio = (e) => {
    e.preventDefault();
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const offset = 70;
      const top = heroEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const getRoleClass = () => {
    if (roleState === "exiting") return styles.roleTextExiting;
    if (roleState === "entering") return styles.roleTextPending;
    return styles.roleTextEntering;
  };

  return (
    <section
      id="cover"
      ref={sectionRef}
      className={styles.coverSection}
      aria-label="Ayush Raj Portfolio Cover"
    >
      {/* High Performance Procedural Atmospheric Smoke Canvas */}
      <canvas
        ref={canvasRef}
        className={styles.smokeCanvas}
        aria-hidden="true"
      />

      {/* Subtle Cinematic Film Grain Overlay */}
      <div className={styles.filmGrainLayer} aria-hidden="true" />

      {/* Background Tech Grid */}
      <div className={styles.coverGrid} aria-hidden="true" />

      {/* Atmospheric Floating Light Particles */}
      <div className={styles.particleField} aria-hidden="true">
        <span className={`${styles.particle} ${styles.p1}`} />
        <span className={`${styles.particle} ${styles.p2}`} />
        <span className={`${styles.particle} ${styles.p3}`} />
        <span className={`${styles.particle} ${styles.p4}`} />
        <span className={`${styles.particle} ${styles.p5}`} />
        <span className={`${styles.particle} ${styles.p6}`} />
      </div>

      {/* Central Portrait Visual Stage: Integrated Depth */}
      <div className={styles.portraitStage}>
        <div ref={portraitRef} className={styles.portraitContainer}>
          {/* Subtle rim light bloom behind silhouette */}
          <div className={styles.portraitBacklight} aria-hidden="true" />

          <Image
            src={getAssetPath("/images/ayush-hero-transparent.png")}
            alt="Ayush Raj | AI/ML Engineer"
            width={1145}
            height={1374}
            priority
            className={styles.portraitImg}
            draggable="false"
          />
        </div>
      </div>

      {/* Editorial Name Typography & Rotating Engineering Roles */}
      <div ref={nameLayerRef} className={styles.nameLayer}>
        <div className={styles.nameGroup}>
          <h1 className={styles.editorialName}>
            <span className={styles.nameMaskWrapper}>
              <span className={styles.nameFirst}>AYUSH</span>
            </span>
            <span className={styles.nameMaskWrapper}>
              <span className={styles.nameLast}>RAJ</span>
            </span>
          </h1>

          <div className={styles.roleTrack}>
            <span className={styles.roleDot} aria-hidden="true">
              ◆
            </span>
            <div className={styles.roleTextWrapper}>
              <span className={`${styles.roleText} ${getRoleClass()}`}>
                {COVER_ROLES[currentRoleIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Enter Portfolio Action Button */}
      <button
        ref={buttonRef}
        onClick={handleEnterPortfolio}
        className={styles.enterCue}
        aria-label="Enter Portfolio"
      >
        <span className={styles.enterGlow} aria-hidden="true" />
        <span className={styles.enterText}>
          ENTER PORTFOLIO
          <svg
            className={styles.enterIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
        <span className={styles.enterShine} aria-hidden="true" />
      </button>

      {/* Subtle bottom separator gradient line */}
      <div className={styles.endLine} aria-hidden="true" />
    </section>
  );
}



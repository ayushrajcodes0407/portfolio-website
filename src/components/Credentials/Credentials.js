"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Credentials.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { certifications, academicCourses } from "../../data/credentials";
import { getAssetPath } from "../../utils/basePath";

export default function Credentials() {
  const [activeModal, setActiveModal] = useState(null); // { type: 'image' | 'pdf', title, institution, src, images, activeImgIndex }
  const [isZoomed, setIsZoomed] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeModal) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const openImageModal = (cert, initialIndex = 0) => {
    setActiveModal({
      type: "image",
      title: cert.title,
      institution: cert.issuer,
      images: cert.images,
      activeImgIndex: initialIndex,
    });
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const openPdfModal = (cert) => {
    setActiveModal({
      type: "pdf",
      title: cert.title,
      institution: cert.issuer,
      fileUrl: cert.fileUrl,
    });
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsZoomed(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (activeModal && activeModal.images) {
      setActiveModal((prev) => ({
        ...prev,
        activeImgIndex: (prev.activeImgIndex + 1) % prev.images.length,
      }));
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (activeModal && activeModal.images) {
      setActiveModal((prev) => ({
        ...prev,
        activeImgIndex:
          (prev.activeImgIndex - 1 + prev.images.length) % prev.images.length,
      }));
      setIsZoomed(false);
    }
  };

  return (
    <section id="credentials" className={styles.credentials}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="04 // VERIFIED CREDENTIALS"
            title="CERTIFICATIONS & CREDENTIALS"
            subtitle="Verified industrial internship credentials, international research fellowships, specialized certifications, and rigorous academic coursework."
          />
        </AnimateOnScroll>

        {/* Section 1: Industrial & Research Credentials */}
        <div className={styles.sectionBlock}>
          <div className={styles.subHeadingRow}>
            <span className={styles.subHeadingIcon}>🏛️</span>
            <h3 className={styles.subHeading}>Industrial &amp; Research Fellowships</h3>
          </div>

          <div className={styles.primaryGrid}>
            {/* BCCL Internship Card */}
            {certifications
              .filter((c) => c.id === "bccl-internship-cert")
              .map((cert) => (
                <AnimateOnScroll key={cert.id} delay={100}>
                  <div className={styles.featuredCredentialCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.badgeRow}>
                        <span className={styles.liveDot}></span>
                        <span className={styles.badgeText}>{cert.type}</span>
                      </div>
                      <span className={styles.periodText}>{cert.period}</span>
                    </div>

                    <div className={styles.cardMain}>
                      <div className={styles.issuerRow}>
                        <div className={styles.sealIcon}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className={styles.issuerName}>{cert.issuer}</h4>
                          <p className={styles.roleTitle}>{cert.role}</p>
                        </div>
                      </div>

                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <p className={styles.certDesc}>{cert.description}</p>

                      {/* BCCL Certificate Image Previews */}
                      <div className={styles.imagePreviewGrid}>
                        {cert.images.map((imgSrc, idx) => (
                          <div
                            key={idx}
                            className={styles.certThumbWrapper}
                            onClick={() => openImageModal(cert, idx)}
                          >
                            <Image
                              src={getAssetPath(imgSrc)}
                              alt={`BCCL Certificate Document ${idx + 1}`}
                              width={320}
                              height={220}
                              className={styles.certThumbImg}
                            />
                            <div className={styles.thumbOverlay}>
                              <span className={styles.thumbZoomIcon}>🔍 Click to Enlarge ({idx + 1}/2)</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={styles.skillsRow}>
                        {cert.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardActions}>
                      <button
                        className={styles.primaryActionBtn}
                        onClick={() => openImageModal(cert, 0)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <span>View BCCL Certificates (Lightbox)</span>
                      </button>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}

            {/* NTNU Research Internship Card */}
            {certifications
              .filter((c) => c.id === "ntnu-research-cert")
              .map((cert) => (
                <AnimateOnScroll key={cert.id} delay={200}>
                  <div className={styles.featuredCredentialCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.badgeRow}>
                        <span className={styles.liveDotAmber}></span>
                        <span className={styles.badgeText}>{cert.type}</span>
                      </div>
                      <span className={styles.periodText}>{cert.period}</span>
                    </div>

                    <div className={styles.cardMain}>
                      <div className={styles.issuerRow}>
                        <div className={styles.sealIconAmber}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className={styles.issuerName}>{cert.issuer}</h4>
                          <p className={styles.roleTitle}>{cert.role}</p>
                        </div>
                      </div>

                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <p className={styles.certDesc}>{cert.description}</p>

                      {/* PDF Interactive Trigger Card */}
                      <div
                        className={styles.pdfCardPlaceholder}
                        onClick={() => openPdfModal(cert)}
                      >
                        <div className={styles.pdfIconGraphic}>
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <div className={styles.pdfCardInfo}>
                          <span className={styles.pdfDocTitle}>Official NTNU Research Credential Document</span>
                          <span className={styles.pdfDocSubtitle}>Verified PDF · Click to open fullscreen reader</span>
                        </div>
                        <span className={styles.pdfOpenIcon}>↗</span>
                      </div>

                      <div className={styles.skillsRow}>
                        {cert.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardActions}>
                      <button
                        className={styles.primaryActionBtn}
                        onClick={() => openPdfModal(cert)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <span>View NTNU Certificate (Reader)</span>
                      </button>

                      <a
                        href={getAssetPath(cert.fileUrl)}
                        download="Ayush_Raj_NTNU_Research_Certificate.pdf"
                        className={styles.secondaryActionBtn}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
          </div>
        </div>

        {/* Section 2: Specialized Technical Certifications */}
        <div className={styles.sectionBlock}>
          <div className={styles.subHeadingRow}>
            <span className={styles.subHeadingIcon}>⚡</span>
            <h3 className={styles.subHeading}>Specialized Technical Certifications</h3>
          </div>

          <div className={styles.udemyGrid}>
            {certifications
              .filter((c) => c.issuer === "Udemy")
              .map((cert, index) => (
                <AnimateOnScroll key={cert.id} delay={index * 120 + 100}>
                  <div className={styles.udemyCard}>
                    <div className={styles.udemyTop}>
                      <div className={styles.certBadge}>
                        <span className={styles.certDot}></span>
                        <span>{cert.issuer} Verified</span>
                      </div>
                      <span className={styles.certIdBadge}>ID: {cert.certificateId}</span>
                    </div>

                    <h4 className={styles.udemyTitle}>{cert.title}</h4>
                    <p className={styles.udemyDesc}>{cert.description}</p>

                    <div className={styles.skillsRow}>
                      {cert.skills.map((skill) => (
                        <span key={skill} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className={styles.udemyBottom}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.udemyVerifyBtn}
                      >
                        <span>View Official Certificate</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
          </div>
        </div>

        {/* Section 3: Rigorous Academic Coursework */}
        <div className={styles.sectionBlock}>
          <div className={styles.subHeadingRow}>
            <span className={styles.subHeadingIcon}>🎓</span>
            <h3 className={styles.subHeading}>Academic Curricula &amp; Advanced Coursework</h3>
          </div>

          <div className={styles.courseworkGrid}>
            {academicCourses.map((course, idx) => (
              <AnimateOnScroll key={course.courseId + idx} delay={idx * 80}>
                <div className={styles.courseCard}>
                  <div className={styles.courseTop}>
                    <span className={styles.courseInst}>{course.institution}</span>
                    <span className={styles.courseCode}>{course.courseId}</span>
                  </div>
                  <h4 className={styles.courseTitle}>{course.title}</h4>
                  <p className={styles.courseFocus}>{course.focus}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX (IMAGE OR PDF) */}
      {activeModal && (
        <div className={styles.lightboxBackdrop} onClick={closeModal}>
          <div
            className={`${styles.lightboxContainer} ${isZoomed ? styles.zoomed : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate Modal"
          >
            <div className={styles.lightboxHeader}>
              <div className={styles.lightboxTitleGroup}>
                <span className={styles.lightboxSubtitle}>{activeModal.institution}</span>
                <h3 className={styles.lightboxTitle}>
                  {activeModal.title}
                  {activeModal.type === "image" && activeModal.images && (
                    <span className={styles.imageCounter}>
                      {" "}(Page {activeModal.activeImgIndex + 1} of {activeModal.images.length})
                    </span>
                  )}
                </h3>
              </div>

              <div className={styles.lightboxControls}>
                {activeModal.type === "image" && activeModal.images && activeModal.images.length > 1 && (
                  <div className={styles.navControls}>
                    <button className={styles.ctrlBtn} onClick={prevImage} aria-label="Previous image">
                      ‹ Prev
                    </button>
                    <button className={styles.ctrlBtn} onClick={nextImage} aria-label="Next image">
                      Next ›
                    </button>
                  </div>
                )}

                <button
                  className={styles.zoomBtn}
                  onClick={() => setIsZoomed(!isZoomed)}
                  aria-label={isZoomed ? "Reset zoom" : "Zoom view"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>{isZoomed ? "Reset" : "Zoom"}</span>
                </button>

                {activeModal.type === "pdf" && (
                  <a
                    href={getAssetPath(activeModal.fileUrl)}
                    download="Ayush_Raj_NTNU_Research_Certificate.pdf"
                    className={styles.ctrlBtnLink}
                  >
                    Download PDF
                  </a>
                )}

                <button
                  className={styles.closeBtn}
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className={styles.lightboxBody}>
              {activeModal.type === "image" && activeModal.images && (
                <div className={styles.imageViewerWrapper}>
                  <Image
                    src={getAssetPath(activeModal.images[activeModal.activeImgIndex])}
                    alt={`${activeModal.title} Document ${activeModal.activeImgIndex + 1}`}
                    width={1200}
                    height={850}
                    className={`${styles.fullCertImg} ${isZoomed ? styles.imgZoomed : ""}`}
                    priority
                  />
                </div>
              )}

              {activeModal.type === "pdf" && (
                <div className={styles.pdfFrameWrapper}>
                  <object
                    data={getAssetPath(activeModal.fileUrl)}
                    type="application/pdf"
                    className={styles.pdfObject}
                    aria-label="Certificate Document"
                  >
                    <div className={styles.pdfFallback}>
                      <p>Your browser does not support embedded PDF viewing.</p>
                      <a
                        href={getAssetPath(activeModal.fileUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.fallbackLink}
                      >
                        Open Certificate PDF in New Tab ↗
                      </a>
                    </div>
                  </object>
                </div>
              )}
            </div>

            <div className={styles.lightboxFooter}>
              <span className={styles.footerNote}>
                Press <strong>Esc</strong> or click outside to dismiss preview
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

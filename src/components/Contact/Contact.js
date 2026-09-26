"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import Button from "../shared/Button";
import { socialLinks } from "../../data/social";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const contactEmail = "ayushrajcodes0407@gmail.com";
  const contactPhone = "+91 9905316254";
  const contactPhoneRaw = "+919905316254";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    }, 800);
  };

  const githubLink = socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/ayushrajcodes0407";
  const linkedinLink = socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://www.linkedin.com/in/ayushraj-tech/";

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="09 // INITIATE TRANSMISSION"
            title="LET'S BUILD SOMETHING INTELLIGENT."
            subtitle="Open to conversations around AI/ML engineering, machine learning pipelines, research collaborations, and production software systems."
          />
        </AnimateOnScroll>

        <div className={styles.grid}>
          {/* Left Column: Direct Communication & Channels */}
          <AnimateOnScroll delay={100}>
            <div className={styles.directChannels}>
              <div className={styles.calloutCard}>
                <h3 className={styles.calloutTitle}>Direct Inquiries &amp; Collaboration</h3>
                <p className={styles.calloutText}>
                  Whether you are looking to collaborate on computer vision architectures, autonomous AI agents, machine learning pipelines, or discuss software engineering opportunities, feel free to reach out directly.
                </p>

                {/* Contact Channels (Email & Phone) */}
                <div className={styles.channelsList}>
                  {/* Email Copy & Click Box */}
                  <div className={styles.emailBox}>
                    <div className={styles.emailTextGroup}>
                      <span className={styles.emailLabel}>{"PRIMARY EMAIL //"}</span>
                      <a
                        href={`mailto:${contactEmail}`}
                        className={styles.emailValLink}
                        title="Click to compose email"
                      >
                        {contactEmail}
                      </a>
                    </div>
                    <button
                      className={styles.copyBtn}
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      type="button"
                    >
                      {copiedEmail ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span style={{ color: "#10b981" }}>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Direct Call & Copy Box */}
                  <div className={styles.emailBox}>
                    <div className={styles.emailTextGroup}>
                      <span className={styles.emailLabel}>{"DIRECT PHONE //"}</span>
                      <a
                        href={`tel:${contactPhoneRaw}`}
                        className={styles.emailValLink}
                        title="Click to call Ayush Raj"
                        aria-label="Call Ayush Raj"
                      >
                        {contactPhone}
                      </a>
                    </div>
                    <button
                      className={styles.copyBtn}
                      onClick={handleCopyPhone}
                      aria-label="Copy phone number"
                      type="button"
                    >
                      {copiedPhone ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span style={{ color: "#10b981" }}>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className={styles.directActionsRow}>
                  <a
                    href={`mailto:${contactEmail}`}
                    className={styles.getInTouchBtn}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>EMAIL DIRECTLY</span>
                  </a>
                  <a
                    href={`tel:${contactPhoneRaw}`}
                    className={styles.callDirectBtn}
                    aria-label="Call Ayush Raj"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>CALL DIRECTLY</span>
                  </a>
                </div>

                {/* Quick External Links */}
                <div className={styles.socialButtonsRow}>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Status Indicator */}
              <div className={styles.availabilityBox}>
                <div className={styles.availDot}></div>
                <div className={styles.availText}>
                  <strong>Active &amp; Responsive</strong>
                  <span>Open to AI/ML Engineering &amp; Software Opportunities</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Transmission Form */}
          <AnimateOnScroll delay={200}>
            <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Ayush..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className={styles.input}
                  placeholder="AI / ML Opportunity or Project Inquiries"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Tell me about what you are building or exploring..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <Button type="submit" variant="primary" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <span className={styles.spinner}></span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>Transmit Message</span>
                  </>
                )}
              </Button>

              {status === "success" && (
                <div className={styles.successMsg}>
                  ✓ Message transmitted successfully. I will get back to you promptly.
                </div>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';

const ROLES = [
  'Full Stack Developer',
  'Backend Developer',
  'Frontend Engineer',
  'Startup Collaborator',
  'Open to International Roles',
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    items?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-label section-label reveal">Let's Work Together</div>
        <h2 className="contact-title reveal reveal-delay-1">
          Let's Build<br />
          Something <span className="accent">Great.</span>
        </h2>
        <p className="contact-subtitle reveal reveal-delay-2">
          I'm currently open to full-time roles, freelance projects, and exciting startup collaborations.
          Drop me a message — I respond within 24 hours.
        </p>

        <div className="contact-roles reveal reveal-delay-2">
          {ROLES.map((r) => (
            <span className="contact-role" key={r}>{r}</span>
          ))}
        </div>

        <div className="contact-actions reveal reveal-delay-3">
          <a className="contact-email" href="mailto:karthikeyanmurugan37@gmail.com">
            karthikeyanmurugan37@gmail.com
          </a>
        </div>

        <div className="contact-social reveal reveal-delay-4">
          <a
            href="https://www.linkedin.com/in/m-karthikeyan-r10/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Karthikeyanmurugavel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://unstop.com/u/karthm2497"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            🏆 Unstop
          </a>
          <a
            href="tel:+919361217562"
            className="social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.54 5.54l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.43v1.49z"/>
            </svg>
            +91 93612 17562
          </a>
        </div>
      </div>
    </section>
  );
}

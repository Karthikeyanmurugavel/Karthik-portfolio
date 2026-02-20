import { useEffect, useRef } from 'react';
import SectionMatrixBg from './SectionMatrixBg';

const ACHIEVEMENTS = [
  { icon: '🎓', title: 'QSpiders Training', desc: 'Completed Java Full Stack Development Program' },
  { icon: '💼', title: 'Zidio Internship', desc: '3-month internship at Zidio Software Development' },
  { icon: '⚽', title: 'Professional Football', desc: 'Tambaram 1st Division — competing at district level' },
  { icon: '💻', title: '280+ Problems Solved', desc: 'Competitive coding on Unstop platform' },
  { icon: '🚀', title: '5+ Projects Built', desc: 'Full stack & automation projects built independently' },
];

export default function About() {
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
    <section className="section about" id="about" ref={sectionRef}>
      <SectionMatrixBg blurPx={5} opacity={0.20} />
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label about-label reveal">About Me</div>
            <h2 className="about-heading reveal reveal-delay-1">
              Engineer by choice.<br />
              <span style={{ color: 'var(--accent)' }}>Footballer</span> by passion.
            </h2>
            <p className="about-text reveal reveal-delay-2">
              I'm a <span className="about-highlight">B.Tech Civil Engineering graduate</span> who made a deliberate pivot
              into software development — driven by a genuine passion for problem-solving and building systems that matter.
            </p>
            <p className="about-text reveal reveal-delay-2">
              After completing a structured <span className="about-highlight">Java Full Stack program at QSpiders</span>,
              I took my skills into a real-world environment through a{' '}
              <span className="about-highlight">3-month internship at Zidio Software Development</span>, contributing to
              a production task management application across both frontend and backend layers.
            </p>
            <p className="about-text reveal reveal-delay-3">
              I've solved <span className="about-highlight">280+ coding problems on Unstop</span>,
              sharpening my logical thinking, algorithmic speed, and ability to write efficient code
              under pressure. I approach software the same way I approach sport: with discipline,
              consistency, and a relentless drive to improve.
            </p>
            <p className="about-text reveal reveal-delay-3">
              Outside of code, I'm a <span className="about-highlight">professional football player</span> competing
              in the Tambaram 1st Division — where I've developed the teamwork, strategic thinking,
              and resilience that I bring directly into engineering.
            </p>
            <div className="about-links reveal reveal-delay-4">
              <a
                href="https://www.linkedin.com/in/m-karthikeyan-r10/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Karthikeyanmurugavel"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://unstop.com/u/karthm2497"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                🏆 Unstop Profile
              </a>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="achievements-card reveal reveal-delay-2">
              <h3>🏅 Achievements</h3>
              {ACHIEVEMENTS.map((a) => (
                <div className="achievement-item" key={a.title}>
                  <div className="achievement-icon">{a.icon}</div>
                  <div className="achievement-text">
                    <strong>{a.title}</strong>
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
            <div className="about-quote reveal reveal-delay-3">
              "Discipline, teamwork, and consistency aren't just traits I learned on the football pitch —
              they're the principles I bring to every line of code."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

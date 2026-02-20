import { useEffect, useRef } from 'react';

const SKILLS = [
  {
    icon: '⚙️',
    title: 'Backend Development',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'RESTful APIs', 'MVC Architecture'],
    bars: [
      { name: 'Java', pct: 85 },
      { name: 'Spring Boot', pct: 80 },
      { name: 'REST API Design', pct: 82 },
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    items: ['ReactJS', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Flutter (Basic)'],
    bars: [
      { name: 'ReactJS', pct: 82 },
      { name: 'JavaScript', pct: 80 },
      { name: 'Angular', pct: 68 },
    ],
  },
  {
    icon: '🐍',
    title: 'Python & AI Automation',
    items: [
      'Python (Core & OOP)',
      'Ollama · Local LLM (Llama 3)',
      'RAG — Retrieval-Augmented Gen.',
      'Selenium · Browser Automation',
      'Microsoft Edge-TTS',
      'Speech Recognition (SpeechRecognition lib)',
      'BeautifulSoup · Web Scraping',
      'OS & Subprocess Automation',
      'Modular / Multi-threaded Design',
    ],
    bars: [
      { name: 'Python', pct: 80 },
      { name: 'Selenium & Automation', pct: 78 },
      { name: 'LLM Integration (Ollama)', pct: 72 },
    ],
    note: 'Applied across JARVIS 2.0: 12-module voice-controlled AI assistant running Llama 3 locally.',
  },
  {
    icon: '🗄️',
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Relational Design', 'Query Optimization', 'Normalization', 'Complex Joins'],
    bars: [
      { name: 'MySQL', pct: 80 },
      { name: 'PostgreSQL', pct: 65 },
      { name: 'Schema Design', pct: 75 },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & DevOps',
    items: ['Git & GitHub', 'Docker', 'Maven', 'Jenkins', 'Postman', 'VS Code', 'Agile / Scrum'],
    bars: [
      { name: 'Git / GitHub', pct: 85 },
      { name: 'Postman', pct: 80 },
      { name: 'Docker', pct: 55 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    const barFills = sectionRef.current?.querySelectorAll('.skill-bar-fill');

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    revealEls?.forEach((el) => revealObs.observe(el));

    const barObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animated')),
      { threshold: 0.5 }
    );
    barFills?.forEach((el) => barObs.observe(el));

    return () => { revealObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header reveal">
          <div className="section-label">Technical Expertise</div>
          <h2 className="skills-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((cat, ci) => (
            <div className={`skill-card reveal reveal-delay-${ci + 1}`} key={cat.title}>
              <div className="skill-card-icon">{cat.icon}</div>
              <div className="skill-card-title">{cat.title}</div>
              <div className="skill-list">
                {cat.items.map((s) => (
                  <div className="skill-item" key={s}>{s}</div>
                ))}
              </div>
              <div className="skill-bar-row" style={{ marginTop: '20px' }}>
                {cat.bars.map((b) => (
                  <div className="skill-bar-item" key={b.name}>
                    <div className="skill-bar-label">
                      <span>{b.name}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {cat.note && (
                <div className="skill-card-note">
                  <span className="skill-note-marker">⚡</span>
                  {cat.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

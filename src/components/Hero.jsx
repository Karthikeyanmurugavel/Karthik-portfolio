import { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const PHRASES = [
  'reliable, scalable web applications.',
  'intelligent AI-powered systems.',
  'clean, production-ready backends.',
  'full-stack solutions that perform.',
  'automation that works while you sleep.',
];

const FLOATING_BADGES = [
  { label: 'Java',        top: '18%', left: '8%',  delay: '0s'    },
  { label: 'Spring Boot', top: '30%', left: '5%',  delay: '0.6s'  },
  { label: 'Python',      top: '55%', left: '7%',  delay: '1.2s'  },
  { label: 'Ollama LLM',  top: '70%', left: '10%', delay: '0.3s'  },
  { label: 'ReactJS',     top: '15%', right: '7%', delay: '0.9s'  },
  { label: 'RAG',         top: '32%', right: '5%', delay: '1.5s'  },
  { label: 'Selenium',    top: '50%', right: '6%', delay: '0.4s'  },
  { label: 'MySQL',       top: '66%', right: '8%', delay: '1.1s'  },
  { label: 'n8n',         top: '80%', right: '5%', delay: '0.7s'  },
  { label: 'Git',         top: '82%', left: '8%',  delay: '1.8s'  },
];

const TERMINAL_LINES = [
  { text: '$ jarvis --start',              color: 'var(--accent)' },
  { text: '> Loading Llama 3 model…',      color: '#888'          },
  { text: '> Speech engine ready.',        color: '#888'          },
  { text: '> 12 modules initialised.',     color: '#888'          },
  { text: '✓ JARVIS 2.0 online.',          color: '#4ade80'       },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const typed = useTypewriter(PHRASES, { typeSpeed: 55, deleteSpeed: 32, pauseMs: 2200 });

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    items?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" ref={sectionRef} id="hero">
      {/* ── Radial glow overlays ── */}
      <div className="hero-glow hero-glow-tr" />
      <div className="hero-glow hero-glow-bl" />

      {/* ── Floating tech badges (desktop only) ── */}
      {FLOATING_BADGES.map((b) => (
        <div
          key={b.label}
          className="hero-float-badge"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            animationDelay: b.delay,
          }}
        >
          {b.label}
        </div>
      ))}

      {/* ── Main content ── */}
      <div className="container hero-inner">
        {/* Left column — primary content */}
        <div className="hero-left">
          <div className="reveal">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open to opportunities · Tamil Nadu, India
            </div>
          </div>

          <div className="hero-headline reveal reveal-delay-1">
            <div className="hero-headline-pretext">I build</div>
            <h1 className="hero-typewriter-line">
              <span className="typed-text">{typed}</span>
              <span className="typed-cursor" aria-hidden="true">|</span>
            </h1>
          </div>

          <p className="hero-sub reveal reveal-delay-2">
            Java Full Stack Developer &amp; AI Automation enthusiast. I specialise in{' '}
            <strong>Spring Boot</strong>, <strong>ReactJS</strong>, and Python-powered systems —
            including a locally-hosted AI assistant (JARVIS 2.0) running <strong>Llama 3</strong> fully offline.
          </p>

          <div className="hero-location reveal reveal-delay-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Chennai, Tamil Nadu · karthikeyanmurugan37@gmail.com
          </div>

          <div className="hero-actions reveal reveal-delay-3">
            <button className="btn-primary" onClick={() => scrollTo('work')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              View My Work
            </button>
            <a className="btn-secondary" href="mailto:karthikeyanmurugan37@gmail.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Me
            </a>
            {/* ── Download Resume ── */}
            <a
              className="btn-resume"
              href="/Karthik-portfolio/Karthikeyan_Murugavel_resume.pdf"
              download="Karthikeyan_Murugavel_resume.pdf"
              aria-label="Download Karthikeyan's Resume PDF"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/Karthikeyanmurugavel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>


          {/* ── Stats strip ── */}
          <div className="hero-stats reveal reveal-delay-4">
            <div>
              <div className="hero-stat-num">5+</div>
              <div className="hero-stat-label">Projects Built</div>
            </div>
            <div>
              <div className="hero-stat-num">280+</div>
              <div className="hero-stat-label">Problems Solved</div>
            </div>
            <div>
              <div className="hero-stat-num">3 mo</div>
              <div className="hero-stat-label">Internship</div>
            </div>
            <div>
              <div className="hero-stat-num">12</div>
              <div className="hero-stat-label">JARVIS Modules</div>
            </div>
          </div>
        </div>

        {/* Right column — animated terminal card */}
        <div className="hero-right reveal reveal-delay-2">
          <div className="hero-terminal">
            <div className="terminal-titlebar">
              <span className="t-dot t-red" />
              <span className="t-dot t-yellow" />
              <span className="t-dot t-green" />
              <span className="terminal-title">jarvis_v2 — bash</span>
            </div>
            <div className="terminal-body">
              {TERMINAL_LINES.map((line, i) => (
                <div
                  key={i}
                  className="terminal-line"
                  style={{ animationDelay: `${i * 0.55 + 0.8}s`, color: line.color }}
                >
                  {line.text}
                </div>
              ))}
              <div className="terminal-line terminal-blink" style={{ animationDelay: '3.8s', color: '#555' }}>
                $ _
              </div>
            </div>
          </div>

          {/* Mini skill pills under the terminal */}
          <div className="hero-tech-strip reveal reveal-delay-3">
            {['Java', 'Spring Boot', 'ReactJS', 'Python', 'Ollama', 'Selenium', 'MySQL', 'n8n'].map((t) => (
              <span className="hero-tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

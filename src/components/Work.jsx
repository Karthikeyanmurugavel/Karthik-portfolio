import { useEffect, useRef } from 'react';
import SectionMatrixBg from './SectionMatrixBg';

const PROJECTS = [

    {
    num: '01',
    name: 'JARVIS 2.0 — Intelligent Local AI Assistant',
    role: 'System Architect & Solo Developer · Personal Project',
    tags: ['Python', 'Ollama / Llama 3', 'Selenium', 'Edge-TTS', 'RAG', 'Computer Vision', 'Speech Recognition', 'Local LLM'],
    desc: 'A fully modular, locally-hosted AI assistant that automates your entire digital life via voice commands. JARVIS 2.0 connects a local Llama 3 brain (via Ollama) to 12 specialized automation modules — controlling Netflix, YouTube, Instagram, LinkedIn, WhatsApp, the file system, email, browser, and system hardware, all hands-free.',
    built: [
      'Built a central intent-recognition router (agent.py) that dispatches voice commands to 12 domain-specific modules',
      'Integrated Ollama/Llama 3.2 as the local LLM brain — zero cloud dependency, fully offline capable',
      'Implemented a RAG (Retrieval-Augmented Generation) pipeline (The Oracle) for codebase Q&A and YouTube video summarization',
      'Engineered natural-sounding TTS using Microsoft Edge-TTS with a randomized personality engine for human-like responses',
      'Automated Netflix: profile selection, show search, auto-play, skip intro, next episode, and full playback controls via Selenium',
      'Automated YouTube: smart tab reuse, voice remote (pause/resume/speed/rewind), frame capture, and AI transcript summarization',
      'Automated Instagram: Reel surfing, hashtag exploration, profile analysis, DM sending, and post URL extraction',
      'Automated LinkedIn: job search by role & location, auto-connect, profile analysis, recruiter messaging, and AI post generation',
      'Automated WhatsApp: click-to-call and a safe message drafter with voice confirmation before sending',
      'Built system control ops: process termination, speed test, screenshots, volume/brightness control, battery & RAM monitoring, shutdown',
      'Built file management ops: voice-driven search, move, and delete with confirmation guard',
      'Designed an interactive voice email composer (subject → body → confirm) sending via Gmail SMTP/SSL',
    ],
    impact: [
      'Eliminated manual browsing across 5+ platforms — everything accessible by voice in under 3 seconds',
      'Demonstrated production-grade Python architecture: modular, extensible, and independently testable per domain',
      'Proved ability to integrate hardware (mic/speaker), OS-level APIs, browser automation, and local AI in a single cohesive system',
      'Built a project that rivals commercial AI assistants using entirely open-source, locally-run models',
    ],
    features: [
      { label: 'Local AI Brain', value: 'Ollama + Llama 3.2 · No internet required' },
      { label: 'RAG / Summarizer', value: 'Codebase Q&A · YouTube transcript summary' },
      { label: 'Streaming Control', value: 'Netflix profiles + playback · YouTube remote' },
      { label: 'Social Automation', value: 'Instagram Reels · LinkedIn Jobs · WhatsApp DMs' },
      { label: 'System & Files', value: 'Process kill · Volume/Brightness · File ops · Email' },
      { label: 'Architecture', value: '12 modules · Threaded speech · Intent router' },
    ],
  },

  {
    num: '02',
    name: 'Zidio Task Management Application',
    role: 'Full Stack Developer · Internship',
    tags: ['Java', 'Spring Boot', 'ReactJS', 'Angular', 'MySQL'],
    desc: 'A collaborative task management system built during my internship at Zidio Software Development, designed to streamline workflow tracking, task assignment, and project monitoring for teams.',
    built: [
      'Developed REST APIs using Spring Boot',
      'Built dynamic frontend components with ReactJS',
      'Integrated backend APIs with the frontend layer',
      'Implemented CRUD operations with MySQL',
      'Collaborated in a team-based Agile environment',
    ],
    impact: [
      'Improved team task tracking efficiency',
      'Delivered end-to-end full-stack solution',
      'Strengthened cross-layer integration skills',
    ],
  },
  {
    num: '03',
    name: 'Full Stack CRUD Web Application',
    role: 'Sole Developer',
    tags: ['Spring Boot', 'ReactJS', 'MySQL', 'REST APIs', 'Authentication'],
    desc: 'A full-stack web application demonstrating authentication, authorization, role-based access, and REST API integration — built to simulate a production-grade system architecture.',
    built: [
      'Implemented authentication & authorization',
      'Built role-based access control system',
      'Developed REST APIs and integrated MySQL',
      'Designed responsive React frontend',
      'Structured scalable MVC architecture',
    ],
    impact: [
      'Demonstrated production-ready full-stack skills',
      'Applied security best practices to auth system',
      'Validated end-to-end API pipeline',
    ],
  },
  {
    num: '04',
    name: 'WhatsApp Automation System (n8n)',
    role: 'Automation Developer · Client Project',
    tags: ['n8n', 'WhatsApp Business API', 'Webhooks', 'REST APIs'],
    desc: 'A WhatsApp automation solution built for a clothing retail client to streamline customer communication, automate promotions, and improve engagement response time.',
    built: [
      'Built automation workflows using n8n platform',
      'Integrated WhatsApp Business API via provider',
      'Designed trigger-based webhook automations',
      'Implemented conditional logic for message personalization',
      'Connected customer lists for targeted promotions',
    ],
    impact: [
      'Reduced manual messaging effort significantly',
      'Improved customer response speed',
      'Delivered a scalable automated outreach system',
    ],
  },
  {
    num: '05',
    name: 'Automated Job Scraping & Alert System',
    role: 'Personal Project · Automation',
    tags: ['Python', 'Web Scraping', 'Automation', 'Data Filtering'],
    desc: 'A custom job-scraping automation system that eliminates the need for manual job portal browsing by collecting, filtering, and alerting on relevant opportunities automatically.',
    built: [
      'Implemented web scraping across multiple job portals',
      'Built keyword & skill-based filtering engine',
      'Designed automated alert delivery workflow',
      'Created structured job tracking output',
      'Optimized for consistent, daily scheduled runs',
    ],
    impact: [
      'Saved hours of repetitive manual search time',
      'Delivered consistent structured job-tracking data',
      'Applied Python automation to real personal workflow',
    ],
  },
];

export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    items?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section work" id="work" ref={sectionRef}>
      <SectionMatrixBg blurPx={4} opacity={0.22} />
      <div className="container">
        <div className="work-header reveal">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="work-title">Projects that define me</h2>
          </div>
          <span className="work-count">{PROJECTS.length} projects</span>
        </div>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <div className={`project-item reveal reveal-delay-${Math.min(i + 1, 5)}`} key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-content">
                <div className="project-top">
                  <div>
                    <h3 className="project-name">{p.name}</h3>
                    <div className="project-role">{p.role}</div>
                  </div>
                  <div className="project-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                {p.features && (
                  <div className="project-features">
                    {p.features.map((f) => (
                      <div className="project-feature-pill" key={f.label}>
                        <span className="pf-label">{f.label}</span>
                        <span className="pf-value">{f.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="project-details">
                  <div className="project-detail-block">
                    <h4>What I Built</h4>
                    <ul>{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
                  </div>
                  <div className="project-detail-block">
                    <h4>Impact</h4>
                    <ul>{p.impact.map((im) => <li key={im}>{im}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

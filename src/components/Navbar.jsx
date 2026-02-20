import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/Karthik-portfolio/karthik.png" alt="Karthikeyan Murugavel" className="nav-logo-img" />
            <span>Karthikeyan Murugavel</span>
          </a>
          <ul className="nav-links">
            <li><button className="nav-link" onClick={() => scrollTo('work')}>Work</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('skills')}>Skills</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('about')}>About</button></li>
            <li><button className="nav-cta" onClick={() => scrollTo('contact')}>Let's Talk</button></li>
          </ul>
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollTo('work')}>Work</button>
        <button onClick={() => scrollTo('skills')}>Skills</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </>
  );
}

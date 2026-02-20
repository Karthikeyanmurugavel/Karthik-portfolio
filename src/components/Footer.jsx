export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-name">
          <span>KM.</span> — Karthikeyan M
        </div>
        <div className="footer-copy">
          © {year} · Built with React &amp; Vite
        </div>
        <div className="footer-links">
          <a href="https://github.com/Karthikeyanmurugavel" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/m-karthikeyan-r10/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:karthikeyanmurugan37@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}

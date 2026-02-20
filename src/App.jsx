import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixCanvas from './components/MatrixCanvas';

export default function App() {
  return (
    <>
      {/* Global animated background — fixed, behind everything */}
      <MatrixCanvas fixed />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


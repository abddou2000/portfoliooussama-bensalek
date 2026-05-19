import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

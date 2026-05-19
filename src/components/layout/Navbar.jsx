import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#expertise', label: 'Expertises' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Parcours' },
  { href: '#services', label: 'Services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory-50/80 backdrop-blur-md border-b border-ink-900/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-ink-900 text-ivory-50 flex items-center justify-center font-display text-sm group-hover:bg-gold-500 transition-colors tracking-tight">
            OB
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base text-ink-900">Bensalek</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-ink-700/60">Engineering</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-700 hover:text-ink-900 link-underline transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-primary">
          Contactez-moi
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-full border border-ink-900/15 flex items-center justify-center text-ink-900"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory-50 border-t border-ink-900/5 overflow-hidden"
          >
            <ul className="container-px py-6 flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="text-base text-ink-700 hover:text-ink-900 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary self-start mt-2">
                Contactez-moi
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

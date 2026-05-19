import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '../../data/portfolio';
import PortraitCard from '../ui/PortraitCard';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none mix-blend-multiply" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-ink-900/5 blur-3xl pointer-events-none" />

      <div className="container-px relative w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Portfolio · Génie Civil & BTP
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-7 text-[40px] sm:text-6xl lg:text-7xl xl:text-[88px] font-medium leading-[1] tracking-tight text-ink-900 break-words"
          >
            Concevoir des
            <br />
            ouvrages qui{' '}
            <span className="relative inline-block">
              <span className="italic font-normal">durent.</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 240 14" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.9, ease: 'easeOut' }}
                  d="M2 9 Q 60 2, 120 8 T 238 7"
                  stroke="#C9A24B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg text-ink-700/80 leading-relaxed max-w-xl"
          >
            {profile.tagline} Ingénieur en bureau d'études — calcul de structures,
            conduite de projets et coordination BIM pour les acteurs du bâtiment et des travaux publics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              Voir mes projets
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#contact" className="btn-ghost">
              Discutons de votre projet
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-ink-700/50"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-gold-400" />
              Eurocodes
            </span>
            <span>·</span>
            <span>RPS 2011</span>
            <span>·</span>
            <span>BIM Revit</span>
            <span>·</span>
            <span>ETABS</span>
          </motion.div>
        </div>

        {/* Right portrait card */}
        <PortraitCard />
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-700/50 hover:text-ink-900 transition"
      >
        <span>Découvrir</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}

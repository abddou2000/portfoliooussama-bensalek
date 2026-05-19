import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { projects } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 container-px">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
        <SectionTitle
          eyebrow="Projets sélectionnés"
          title={<>Une sélection<br />de réalisations.</>}
        />
        <p className="max-w-md text-ink-700/70 text-base leading-relaxed">
          Du résidentiel haut standing aux ouvrages d'art, chaque projet conjugue
          rigueur technique, optimisation économique et qualité d'exécution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white hover:shadow-premium transition-all duration-500 ${
              i === 0 || i === 3 ? 'md:row-span-1' : ''
            }`}
          >
            {/* Visual header */}
            <div className={`relative h-56 lg:h-64 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
              <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`g-${i}`} width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#F5F2EC" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#g-${i})`} />
              </svg>

              {/* Project number */}
              <div className="absolute top-6 left-6 text-ivory-50/90 font-mono text-xs tracking-[0.3em] uppercase">
                — {String(i + 1).padStart(2, '0')}
              </div>

              {/* Year */}
              <div className="absolute top-6 right-6 font-display text-ivory-50 text-lg">
                {p.year}
              </div>

              {/* Surface tag */}
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-ivory-50/10 backdrop-blur-md border border-ivory-50/20 text-[11px] uppercase tracking-[0.2em] text-ivory-50">
                {p.surface}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-ivory-50 text-ink-900 flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Body */}
            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-2 text-xs text-ink-700/60">
                <MapPin size={12} className="text-gold-500" />
                {p.location}
                <span className="text-ink-900/20">·</span>
                <span>{p.role}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl lg:text-3xl text-ink-900 leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-ink-700/80 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-ink-700 border border-ink-900/15 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

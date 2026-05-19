import { motion } from 'framer-motion';
import { MapPin, Award, Globe2 } from 'lucide-react';
import { profile } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 container-px">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="À propos"
            title={<>Un ingénieur,<br />une exigence.</>}
          />
        </div>

        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-xl text-ink-700 leading-relaxed font-light"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-ink-700/70"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-500" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <Award size={16} className="text-gold-500" />
              EMI Rabat — Major
            </span>
            <span className="flex items-center gap-2">
              <Globe2 size={16} className="text-gold-500" />
              FR · EN · AR
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 border border-ink-900/10 rounded-2xl overflow-hidden">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-ivory-50 p-8 lg:p-10 group hover:bg-ink-900 transition-colors duration-500"
          >
            <div className="font-display text-5xl lg:text-6xl font-medium text-ink-900 group-hover:text-gold-400 transition-colors duration-500">
              {s.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-ink-700/60 group-hover:text-ivory-200 transition-colors duration-500">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

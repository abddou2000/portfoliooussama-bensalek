import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 bg-ivory-100/60 container-px">
      <SectionTitle
        align="center"
        eyebrow="Parcours"
        title={<>Huit ans, une trajectoire <span className="italic font-normal">cohérente</span>.</>}
      />

      <div className="mt-20 max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-3 sm:left-1/2 top-2 bottom-2 w-px bg-ink-900/15 sm:-translate-x-px" />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-2'}`}
            >
              {/* Dot */}
              <div className="absolute left-3 sm:left-1/2 top-3 w-2 h-2 rounded-full bg-gold-400 ring-4 ring-ivory-100/60 sm:-translate-x-1/2" />

              {/* Content */}
              <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`}>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-500 font-mono">
                  {e.period}
                </div>
                <h3 className="mt-2 font-display text-2xl text-ink-900 leading-tight">{e.role}</h3>
                <div className="mt-1 text-sm text-ink-700/70 italic">{e.company}</div>
                <p className="mt-4 text-sm text-ink-700/80 leading-relaxed">{e.description}</p>
              </div>

              {/* spacer */}
              <div className="hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

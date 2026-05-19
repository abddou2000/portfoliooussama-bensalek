import { motion } from 'framer-motion';
import { PencilRuler, Search, ClipboardCheck, Boxes, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

const ICONS = { PencilRuler, Search, ClipboardCheck, Boxes };

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 container-px">
      <SectionTitle
        eyebrow="Services"
        title={<>Comment puis-je<br />vous accompagner ?</>}
        subtitle="Une intervention sur-mesure selon votre phase projet — étude, exécution ou expertise. Devis transparent, livrables certifiés."
      />

      <div className="mt-20 grid lg:grid-cols-2 gap-px bg-ink-900/10 border border-ink-900/10 rounded-3xl overflow-hidden">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-ivory-50 p-10 lg:p-14 hover:bg-ink-900 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-ink-900 text-gold-400 group-hover:bg-gold-400 group-hover:text-ink-900 flex items-center justify-center transition-colors duration-500">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="font-mono text-xs text-ink-700/40 group-hover:text-ivory-200/40 transition-colors">
                  / 0{i + 1}
                </div>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-ink-900 group-hover:text-ivory-50 transition-colors leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-base text-ink-700/80 group-hover:text-ivory-200/80 transition-colors leading-relaxed max-w-md">
                {s.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-900 group-hover:text-gold-400 transition-colors"
              >
                Demander un devis
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Building2, HardHat, Ruler, Layers } from 'lucide-react';
import { expertise } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

const ICONS = { Building2, HardHat, Ruler, Layers };

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-28 lg:py-36 bg-ink-900 text-ivory-50 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="relative container-px">
        <SectionTitle
          light
          eyebrow="Expertises"
          title={<>Une boîte à outils <span className="italic font-normal text-gold-400">complète</span>.</>}
          subtitle="De la note de calcul au pilotage d'équipe, je couvre l'ensemble du cycle d'étude et d'exécution avec les standards techniques et normatifs les plus exigeants."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((e, i) => {
            const Icon = ICONS[e.icon];
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-ivory-50/10 bg-ivory-50/5 backdrop-blur-sm hover:border-gold-400/40 hover:bg-ivory-50/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-ink-900 transition-colors duration-500">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl mb-4 leading-tight">{e.title}</h3>
                <ul className="space-y-2.5">
                  {e.items.map((it) => (
                    <li key={it} className="text-sm text-ivory-200/80 flex items-start gap-2">
                      <span className="text-gold-400 mt-1">·</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="absolute top-6 right-6 text-[10px] font-mono text-ivory-200/30">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-ink-900 text-ivory-50 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="relative container-px grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1] text-ivory-50"
          >
            Parlons de
            <br />
            votre <span className="italic font-normal text-gold-400">prochain projet.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg text-ivory-200/80 leading-relaxed max-w-xl"
          >
            Étude, expertise ou accompagnement complet ? Décrivez-moi votre besoin —
            je vous propose une réponse argumentée sous 48h ouvrées.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={`mailto:${profile.email}`}
            className="mt-12 inline-flex items-center gap-3 group"
          >
            <span className="font-display text-3xl sm:text-4xl text-ivory-50 group-hover:text-gold-400 transition-colors">
              {profile.email}
            </span>
            <span className="w-14 h-14 rounded-full bg-gold-400 text-ink-900 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={22} />
            </span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="space-y-px bg-ivory-50/10 rounded-2xl overflow-hidden border border-ivory-50/10">
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
              { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-5 p-6 bg-ink-900 hover:bg-ink-800 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-ivory-50/5 border border-ivory-50/10 text-gold-400 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-ink-900 transition-colors">
                  <c.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ivory-200/50">{c.label}</div>
                  <div className="mt-0.5 text-ivory-50">{c.value}</div>
                </div>
                <ArrowUpRight size={16} className="text-ivory-200/40 group-hover:text-gold-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-ivory-50/10 bg-ivory-50/5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory-200/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponibilité
            </div>
            <div className="mt-2 text-sm text-ivory-200">
              Missions ouvertes — Q2 à Q4 2026.<br />
              Présentiel Algérie · Remote international.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
